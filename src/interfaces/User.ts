import { Store } from "./Store";

export interface User {
	id?: string;
	name: string;
	email: string;
	password?: string;
	token?: string;
	store?: Store;
}
