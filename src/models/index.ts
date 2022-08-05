type Results = {
    id: number,
    name: string,
    icon: any
}

export interface IBrands {
    results: Results[]
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