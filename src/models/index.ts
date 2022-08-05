export interface IBrands {
    id: number,
    name: string,
    icon: any
}

export interface IProduct {
    id: number,
    name: string,
    price: number,
    discount: number,
    product_img: any,
    brand: number,
    category: number,
    is_stock: boolean
}