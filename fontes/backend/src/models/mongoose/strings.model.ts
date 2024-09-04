import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Strings } from "../strings.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.strings) { 
    return mongooseConnection.models.strings; 
  } 

  var schema = new mongoose.Schema<Strings>( 
    {
      stringData: String
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

  return mongooseConnection.model<Strings>("strings", schema); 
};
