import { IOrderItem } from "./order-item.interface";

export interface IOrder {
  id: number;
  dateRequest: Date;
  userId: number;
  deliveryForecastDate: Date;
  zipCode: string;
  state: string;
  city: string;
  address: string;
  addressNumber: string;
  paymentId: number;
  itensRequest: IOrderItem[];
}