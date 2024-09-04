import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Invoices } from "../invoices.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.invoices) { 
    return mongooseConnection.models.invoices; 
  } 

  var schema = new mongoose.Schema<Invoices>( 
    {
        order: {type: Schema.Types.ObjectId, ref: 'orders'}, 
      invoiceDate: Date,
      dueDate: Date,
      tax: Number,
      shipping: Number,
      amountDue: Number
    },
    { timestamps: true }
  );

  schema.set("toObject", {
    transform: (doc, ret, options) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  });

  return mongooseConnection.model<Invoices>("invoices", schema); 
};
