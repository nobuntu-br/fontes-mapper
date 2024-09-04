import mongoose, { Mongoose, Schema } from "mongoose"; 
import { OrderDetailsStatus } from "../orderDetailsStatus.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.orderDetailsStatus) { 
    return mongooseConnection.models.orderDetailsStatus; 
  } 

  var schema = new mongoose.Schema<OrderDetailsStatus>( 
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

  return mongooseConnection.model<OrderDetailsStatus>("orderDetailsStatus", schema); 
};
