// customer.model.ts
import { Schema, model } from 'mongoose'
import { TCustomer } from './customer.interface'



const cartItemSchema =new Schema(
 {
  id:{type:String,required:true},
  quantity:{type:Number,required:true},
 },
 {_id:false},

)



    const custormerSchema =new Schema <TCustomer>({
      name:{
        type:String,
        required:true,
        trim:true,
        // unique:true
      },

      email:{
        type:String,
        required:true,
        unique:true,
        trim:true
      },
      phone:{
      type:String,
      required:true,
      unique:true,
      trim:true
      },
      address:{
        type:String,
        required:true,
        trim:true
      },
      cartItems:[cartItemSchema]
    })

  
  // cartItems: [cartItemSchema],


export const Customer = model<TCustomer>('Customer', custormerSchema)
