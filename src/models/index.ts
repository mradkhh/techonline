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
    product_img: {
        image: string | undefined
    },
    brand: number,
    category: number,
    is_stock: boolean,
    short_desc: string
}

export interface IProductData {
    results: IProduct[],
    count: number,
    next: string | null,
    previous: string | null
}

