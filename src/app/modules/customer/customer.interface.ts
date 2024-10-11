

interface IOrderItem{
  id:string // it is will be the product id
  quantity:number
}

export interface TCustomer{
  name:string
  email:string
  phone:string
  address:string
  cartItems:IOrderItem[]
}