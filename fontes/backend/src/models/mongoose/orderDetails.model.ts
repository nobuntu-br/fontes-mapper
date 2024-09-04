import mongoose, { Mongoose, Schema } from "mongoose"; 
import { OrderDetails } from "../orderDetails.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.orderDetails) { 
    return mongooseConnection.models.orderDetails; 
  } 

  var schema = new mongoose.Schema<OrderDetails>( 
    {
        order: {type: Schema.Types.ObjectId, ref: 'orders'}, 
        product: {type: Schema.Types.ObjectId, ref: 'products'}, 
      quantity: Number,
      unitPrice: Number,
      discount: Number,
        status: {type: Schema.Types.ObjectId, ref: 'orderDetailsStatus'}, 
      dateAllocated: Date,
      purchaseOrderId: Number,
      inventoryId: Number
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

  return mongooseConnection.model<OrderDetails>("orderDetails", schema); 
};
