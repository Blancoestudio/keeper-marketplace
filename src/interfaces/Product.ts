import { Store } from "./Store";

export interface Category {
	_id?: string;
	name?: string;
}

export interface Product {
	_id?: string;
	images?: string | string[];
	deleteImages?: string[];
	discount?: number;
	name: string;
	shortDescription: string;
	description: string;
	price?: string;
	category?: Category;
	store?: Store;
}

export interface ImageToUpload {
	localUrl: string;
	image: File;
}