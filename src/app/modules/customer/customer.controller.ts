

import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { customerServices } from "./customer.service"
import { Customer } from "./customer.model"



const createCustomer = catchAsync(async(req,res)=>{
  const productData =req.body
  const result =await customerServices.createCustomerIntoDb(productData)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Customer created seccessfully',
    data:result
  })
})



const getAllCustomer=catchAsync(async(req,res)=>{
  const result = await Customer.find()
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Customer getAll successfully',
    data:result,
  })
})


const getSingleCustomer=catchAsync(async(req,res)=>{
  const email=req.query.email as string
  const result =await customerServices.getSingleCustomerFromDb(email)
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success :true,
    message:'Customer getSingleCustomer successfully',
    data:result
  })
})


export const customerControllers = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer
}
