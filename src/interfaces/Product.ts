import { Store } from "./Store";

export interface Product {
	_id?: string;
	images?: string;
	discount?: number;
	name: string;
	shortDescription: string;
	description: string;
	price?: string;
	category?: string;
	store?: Store;
}
