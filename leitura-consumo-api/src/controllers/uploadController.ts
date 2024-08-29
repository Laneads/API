
import { Request, Response } from 'express';
import axios from 'axios';

export const uploadController = async (req: Request, res: Response) => {
    try {
        const { image, customer_code, measure_datetime, measure_type } = req.body;

        // Validate request body and types here

        // Check if there's already a reading for this type in the current month
        // Example query: SELECT * FROM readings WHERE customer_code = ? AND MONTH(measure_datetime) = ? AND measure_type = ?

        // Integrate with Google Gemini API for image reading
        const response = await axios.post('https://api.google.com/gemini', { image }, {
            headers: { 'Authorization': `Bearer ${process.env.GEMINI_API_KEY}` }
        });

        const { measure_value, measure_uuid, image_url } = response.data;

        res.status(200).json({ image_url, measure_value, measure_uuid });
    } catch (error) {
        if (error.response && error.response.status === 409) {
            return res.status(409).json({ error_code: "DOUBLE_REPORT", error_description: "Leitura do mês já realizada" });
        }
        res.status(400).json({ error_code: "INVALID_DATA", error_description: error.message });
    }
};
