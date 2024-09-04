import mongoose, { Mongoose, Schema } from "mongoose"; 
import { Application } from "../application.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.application) { 
    return mongooseConnection.models.application; 
  } 

  var schema = new mongoose.Schema<Application>( 
    {
      name: String
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

  return mongooseConnection.model<Application>("application", schema); 
};
