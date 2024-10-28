import Expedition from "../models/Expedition.js";

export const create = async (req, res) => {
    try {
        const content = await Expedition.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};