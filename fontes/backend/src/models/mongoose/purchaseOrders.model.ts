import mongoose, { Mongoose, Schema } from "mongoose"; 
import { PurchaseOrders } from "../purchaseOrders.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.purchaseOrders) { 
    return mongooseConnection.models.purchaseOrders; 
  } 

  var schema = new mongoose.Schema<PurchaseOrders>( 
    {
        supplier: {type: Schema.Types.ObjectId, ref: 'suppliers'}, 
        createdBy: {type: Schema.Types.ObjectId, ref: 'employees'}, 
      submittedDate: Date,
      creationDate: Date,
        status: {type: Schema.Types.ObjectId, ref: 'purchaseOrderStatus'}, 
      expectedDate: Date,
      shippingFee: Number,
      taxes: Number,
      paymentDate: Date,
      paymentAmount: Number,
      paymentMethod: String,
      notes: String,
      approvedBy: Number,
      approvedDate: Date,
      submittedBy: Number,
        purchaseOrderDetails: {type: Schema.Types.ObjectId, ref: 'purchaseOrderDetails'}, 
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

  return mongooseConnection.model<PurchaseOrders>("purchaseOrders", schema); 
};
