import mongoose, { Mongoose, Schema } from "mongoose"; 
import { PurchaseOrderDetails } from "../purchaseOrderDetails.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.purchaseOrderDetails) { 
    return mongooseConnection.models.purchaseOrderDetails; 
  } 

  var schema = new mongoose.Schema<PurchaseOrderDetails>( 
    {
        purchaseOrder: {type: Schema.Types.ObjectId, ref: 'purchaseOrders'}, 
        product: {type: Schema.Types.ObjectId, ref: 'products'}, 
      quantity: Number,
      unitCost: Number,
      dateReceived: Date,
      postedToInventory: Boolean,
        inventory: {type: Schema.Types.ObjectId, ref: 'inventoryTransactions'}, 
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

  return mongooseConnection.model<PurchaseOrderDetails>("purchaseOrderDetails", schema); 
};
