import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Company } from "../company.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.company) { 
    return mongooseConnection.models.company; 
  } 

  var schema = new mongoose.Schema<Company>( 
    {
      name: String,
      databaseSchema: String
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

  return mongooseConnection.model<Company>("company", schema); 
};
