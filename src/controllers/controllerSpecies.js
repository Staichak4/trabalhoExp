import Species from "../models/Species.js";

export const create = async (req, res) => {
    try {
        const content = await Species.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Species.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const show = async (req, res) => {
    try {
      const content = await Species.findById(req.params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };  

export const update = async (req, res) => {
    try {
        const content = await Species.findByIdAndUpdate(
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
        const content = await Species.findByIdAndDelete(req,params.id).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error);
    };
};