import { CreateProduct } from "./create-product.interface";

export interface Product extends CreateProduct {
    id: string;
    buyer?: string;
    invoiceDate: Date;
    invoiceCreateDate: Date;
}