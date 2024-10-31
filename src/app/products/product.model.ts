export interface Product {
    id: number;
    title: string;
    brand?: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    }
}