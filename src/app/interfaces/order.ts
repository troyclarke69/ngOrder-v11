import { Customer } from './customer';
import { OrderDetail } from './orderDetail';

export interface Order {
    id: string,
    orderID: number,
    customerID: string,
    employeeID: number,
    orderDate: Date,
    requiredDate: Date,
    shippedDate: Date,
    shipVia: number,
    freight: number,
    shipName: string,
    shipAddress: string,
    shipCity: string,
    shipRegion: string,
    shipPostalCode: string,
    shipCountry: string,
    customerData: Customer,
    detailData: OrderDetail[],
    subTotal: number,
    orderTotal: number
}