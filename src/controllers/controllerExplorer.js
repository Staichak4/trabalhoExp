import Explorer from "../models/Explorer.js";

export const create = async (req, res) => {
    try {
        const content = await Explorer.create(req.body);
        return res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Explorer.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const show = async (req, res) => {
    try {
      const content = await Explorer.findById(req.params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };  

export const update = async (req, res) => {
    try {
        const content = await Explorer.findByIdAndUpdate(
            req.params.id,
            req.body
        ).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const destroy = async (req, res) => {
    try {
        const content = await Explorer.findByIdAndDelete(req,params.id).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error);
    };
};