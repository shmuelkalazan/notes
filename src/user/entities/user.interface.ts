import { Document } from "mongoose"

export interface Iuser extends Document{
    user_name:string
    email:string
    password:string
}