import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(   
    {
        "title": {
            type: String,
            required: true,
            trim: true
        }
    }, 

    {
        "amount": {
            type: Number,
            required: true,
            min: 0
        }
    },

    {
        "category": {
            type: String,
            required: true,
            trim: true, 
            enum: ["Food", "Transport", "Bills", "Shopping", "Others"]
        }
    },

    {
        "description": {
            type: String,
            trim: true
        }
    },

    {
        timestamps: true
    }
)