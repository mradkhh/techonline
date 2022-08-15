
type Results = {
    id: number,
    name: string,
    icon: any
}

export interface IBrands {
    results: Results[]
}

export interface IColors {
    results: {
        id: number,
        name: string
    }[]
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
    short_desc: string,
    viewer?: string,
    rating?: number,
    quantity?: number,
    reviews?: number
}

export interface IProductId {
    id: number
    name: string
    short_desc: string
    desc: string
    price: string
    quantity: number
    discount: number
    viewer: number
    rating: number
    is_stock: boolean
    only_here: boolean
    memory: string
    ram: string
    category: string
    brand: string
    product_images: {
        id: number,
        image: string
    }[],
    colors: {
        id: number,
        name: string
    }[]
}

export interface IRegion {
        id: string,
        name: string
}

export interface IRegionResults {
    results: IRegion[]
}

export interface IRegionRetrieve {
    id: number,
    name: string,
    tax_price: number,
    shipping_price: number,
    childs: IRegion[]
}

export interface IRegionRetrieveResults {
    results: IRegionRetrieve
}

export interface ICart {
    id: number,
    quantity: number,
    product: IProduct
}

export interface ICartResults {
    results: ICart[]
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
    brand_ids?: string,
    category_ids?: string,
    colors_ids?: string,
    search?: string,
    ordering?: number | string
}

 export interface ICategories {
    id: number,
    name: string,
    icon: string,
    products: IProduct[],
    childs?: ICategories[]
}

export interface ICategoriesResults {
    results: ICategories[]
}
