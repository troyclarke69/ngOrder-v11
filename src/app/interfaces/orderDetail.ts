import { Product } from './product';

export interface OrderDetail {
    id: String,
    orderID: Number,
    productID: number,
    unitPrice: number,
    quantity: number,
    discount: number,
    extdPrice: number,
    productData: Product   
}