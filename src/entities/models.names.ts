import { Product } from "./Product"

export enum ModelNames {
    PRODUCT = "product"
}

export type ModelTypeMap = {
    [ModelNames.PRODUCT]: Product
}