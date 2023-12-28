interface SocialNetwork {
	_id: string;
	type: string;
	url: string;
}

export interface Store {
	_id?: string;
	name: string;
	logo?: string;
	address?: string;
	shortDescription?: string;
	description?: string;
	socialNetworks?: SocialNetwork[];
}
