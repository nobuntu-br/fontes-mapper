import mongoose, { Mongoose, Schema } from "mongoose"; 
import { InventoryTransactions } from "../inventoryTransactions.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.inventoryTransactions) { 
    return mongooseConnection.models.inventoryTransactions; 
  } 

  var schema = new mongoose.Schema<InventoryTransactions>( 
    {
        transactionType: {type: Schema.Types.ObjectId, ref: 'inventoryTransactionTypes'}, 
      transactionCreatedDate: Date,
      transactionModifiedDate: Date,
        product: {type: Schema.Types.ObjectId, ref: 'products'}, 
      quantity: Number,
        purchaseOrder: {type: Schema.Types.ObjectId, ref: 'purchaseOrders'}, 
        customerOrder: {type: Schema.Types.ObjectId, ref: 'orders'}, 
      comments: String
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

  return mongooseConnection.model<InventoryTransactions>("inventoryTransactions", schema); 
};
