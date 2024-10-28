import db from "../config/db.js";
import { Schema, model } from "mongoose";

const expeditionSchema = new db.Schema({
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }, 
    participants: {
        type: [Schema.Types.ObjectId],
        ref: "Explorer",
        required: true
    },
    speciesFound: {
        type: [Schema.Types.ObjectId],
        ref: "Species",
        required: true
    }
});

const Expedition = db.model("Expedition", expeditionSchema);

export default Expedition;