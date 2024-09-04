import mongoose, { Mongoose, Schema } from "mongoose"; 
import { InventoryTransactionTypes } from "../inventoryTransactionTypes.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.inventoryTransactionTypes) { 
    return mongooseConnection.models.inventoryTransactionTypes; 
  } 

  var schema = new mongoose.Schema<InventoryTransactionTypes>( 
    {
      typeName: String
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

  return mongooseConnection.model<InventoryTransactionTypes>("inventoryTransactionTypes", schema); 
};
