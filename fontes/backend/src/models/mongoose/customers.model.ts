import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Customers } from "../customers.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.customers) { 
    return mongooseConnection.models.customers; 
  } 

  var schema = new mongoose.Schema<Customers>( 
    {
      company: String,
      lastName: String,
      firstName: String,
      emailAddress: String,
      jobTitle: String,
      businessPhone: String,
      homePhone: String,
      mobilePhone: String,
      faxNumber: String,
      address: String,
      city: String,
      stateProvince: String,
      zipPostalCode: String,
      countryRegion: String,
      webPage: String,
      notes: String,
      attachments: String
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

  return mongooseConnection.model<Customers>("customers", schema); 
};
