import { Schema } from "mongoose";
import { Iuser } from "./user.interface";

export const UserSchema = new Schema<Iuser>({
   user_name:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
},{timestamps:true})