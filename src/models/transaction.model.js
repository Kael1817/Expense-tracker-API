import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(   
    {
        "title": {
            type: String,
            required: true,
            trim: true
        },

        "type": {
            type: String,
            required: true,
            trim: true,
            enum: ["income", "expense"]
        },

        "amount": {
            type: Number,
            required: true,
            min: 0
        },

        "category": {
            type: String,
            required: true,
            trim: true, 
            enum: ["Food", "Transport", "Bills", "Shopping", "Other"]
        },
    
        "description": {
            type: String,
            trim: true
        }
    },

    {
        timestamps: true
    }
)

export const Transaction = mongoose.model("Transaction", transactionSchema)