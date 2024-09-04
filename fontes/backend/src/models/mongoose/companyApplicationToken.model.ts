import mongoose, { Mongoose, Schema } from "mongoose"; 
import { CompanyApplicationToken } from "../companyApplicationToken.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.companyApplicationToken) { 
    return mongooseConnection.models.companyApplicationToken; 
  } 

  var schema = new mongoose.Schema<CompanyApplicationToken>( 
    {
        company: {type: Schema.Types.ObjectId, ref: 'company'}, 
        application: {type: Schema.Types.ObjectId, ref: 'application'}, 
      token: String
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

  return mongooseConnection.model<CompanyApplicationToken>("companyApplicationToken", schema); 
};
