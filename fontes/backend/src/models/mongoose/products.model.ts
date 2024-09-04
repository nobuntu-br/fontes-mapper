import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Products } from "../products.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.products) { 
    return mongooseConnection.models.products; 
  } 

  var schema = new mongoose.Schema<Products>( 
    {
      supplierIds: String,
      productCode: String,
      productName: String,
      description: String,
      standardCost: Number,
      listPrice: Number,
      reorderLevel: Number,
      targetLevel: Number,
      quantityPerUnit: String,
      discontinued: Boolean,
      minimumReorderQuantity: Number,
      category: String,
      attachments: String,
      defaultDiscount: Number
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

  return mongooseConnection.model<Products>("products", schema); 
};
