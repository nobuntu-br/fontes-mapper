import mongoose, { Mongoose, Schema } from "mongoose"; 
import { OrdersTaxStatus } from "../ordersTaxStatus.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.ordersTaxStatus) { 
    return mongooseConnection.models.ordersTaxStatus; 
  } 

  var schema = new mongoose.Schema<OrdersTaxStatus>( 
    {
      taxStatusName: String
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

  return mongooseConnection.model<OrdersTaxStatus>("ordersTaxStatus", schema); 
};
