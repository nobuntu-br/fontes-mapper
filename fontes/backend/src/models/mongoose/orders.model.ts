import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Orders } from "../orders.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.orders) { 
    return mongooseConnection.models.orders; 
  } 

  var schema = new mongoose.Schema<Orders>( 
    {
        employee: {type: Schema.Types.ObjectId, ref: 'employees'}, 
        customer: {type: Schema.Types.ObjectId, ref: 'customers'}, 
      orderDate: Date,
      shippedDate: Date,
        shipper: {type: Schema.Types.ObjectId, ref: 'shippers'}, 
      shipName: String,
      shipAddress: String,
      shipCity: String,
      shipStateProvince: String,
      shipZipPostalCode: String,
      shipCountryRegion: String,
      shippingFee: Number,
      taxes: Number,
      paymentType: String,
      paidDate: Date,
      notes: String,
      taxRate: Number,
        taxStatus: {type: Schema.Types.ObjectId, ref: 'ordersTaxStatus'}, 
        status: {type: Schema.Types.ObjectId, ref: 'ordersStatus'}, 
        orderDetails: [ 
          {type: Schema.Types.ObjectId, ref: 'orderDetails'}
        ], 
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

  return mongooseConnection.model<Orders>("orders", schema); 
};
