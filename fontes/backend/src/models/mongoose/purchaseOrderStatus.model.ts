import mongoose, { Mongoose, Schema } from "mongoose"; 
import { PurchaseOrderStatus } from "../purchaseOrderStatus.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.purchaseOrderStatus) { 
    return mongooseConnection.models.purchaseOrderStatus; 
  } 

  var schema = new mongoose.Schema<PurchaseOrderStatus>( 
    {
      status: String
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

  return mongooseConnection.model<PurchaseOrderStatus>("purchaseOrderStatus", schema); 
};
