
export interface IProduct {
    id?: number;
    images: any;
    name: string;
    count: number;
    is_verified?: string;
    sale_price: number;
    quantity: number;
    unit: string;
}

export interface IProductGroup {
    id?: number;
    name: string;
    description?: string;
    order?: string;
    status?: Number;
    products?: IProduct[];
}