import mongoose, { Mongoose, Schema } from "mongoose"; 
import { OrdersStatus } from "../ordersStatus.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.ordersStatus) { 
    return mongooseConnection.models.ordersStatus; 
  } 

  var schema = new mongoose.Schema<OrdersStatus>( 
    {
      statusName: String
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

  return mongooseConnection.model<OrdersStatus>("ordersStatus", schema); 
};
