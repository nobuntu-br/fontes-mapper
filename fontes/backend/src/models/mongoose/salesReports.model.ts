import mongoose, { Mongoose, Schema } from "mongoose"; 
import { SalesReports } from "../salesReports.model";

export default function defineModel(mongooseConnection: Mongoose) { 

  if (mongooseConnection.models.salesReports) { 
    return mongooseConnection.models.salesReports; 
  } 

  var schema = new mongoose.Schema<SalesReports>( 
    {
      display: String,
      title: String,
      filterRowSource: String,
      padrao: Boolean
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

  return mongooseConnection.model<SalesReports>("salesReports", schema); 
};
