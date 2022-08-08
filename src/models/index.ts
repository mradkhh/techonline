
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
    price: string,
    discount: number,
    product_img: {
        image: string | undefined
    } | null,
    brand: number,
    category: number,
    is_stock: boolean,
    short_desc: string
}

export interface ICart {
    user: number | null,
    products: IProduct[]
}

export interface IProductData {
    results: IProduct[],
    count: number,
    next: string | null,
    previous: string | null
}

export interface IProductsQuery {
    page?: number,
    page_size?: number,
    min_price?: number | string,
    max_price?: number | string,
    brand?: number | string,
    category_search?: string,
    colors?: number | string,
    search?: string,
    ordering?: number | string
}

interface IUserLogin {
    username: string,
    password: string
}

