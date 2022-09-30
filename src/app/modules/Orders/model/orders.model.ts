export interface Orders {
    OrderId: number,
    OrderDate: string,
    UserId: string,
    Products: Products[];
    PaymentType: string;
    totalPrice: number;
}

export interface Products {
    ProductId: number
    Quantity: number
    price: number
}
