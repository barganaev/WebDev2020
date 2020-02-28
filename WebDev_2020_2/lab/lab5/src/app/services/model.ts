export interface iCategory{
    id: number;
    category: string;
    products: iProduct[]
}
export interface iProduct{
    id: number;
    title: string,
    description: string;
}
