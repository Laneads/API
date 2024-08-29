
import { Request, Response } from 'express';

export const confirmController = async (req: Request, res: Response) => {
    try {
        const { measure_uuid, confirmed_value } = req.body;

        // Validate the types of the parameters

        // Check if the measure exists and if it has already been confirmed
        // Example query: SELECT * FROM readings WHERE measure_uuid = ?

        // Save the new confirmed value to the database

        res.status(200).json({ success: true });
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error_code: "MEASURE_NOT_FOUND", error_description: "Leitura não encontrada" });
        }
        res.status(400).json({ error_code: "INVALID_DATA", error_description: error.message });
    }
};
