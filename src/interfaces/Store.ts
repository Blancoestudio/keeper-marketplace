import { ChangeEventHandler, Dispatch, MutableRefObject, SetStateAction } from "react";

export interface SocialNetwork {
	_id?: string;
	type: string;
	url: string;
}

export interface Store {
	_id?: string;
	name?: string;
	logo?: string;
	address?: string;
	shortDescription?: string;
	description?: string;
	socialNetworks?: SocialNetwork[];
}

export interface FormData1Props {
	setStoreName: Dispatch<SetStateAction<string>>;
	setAddress: Dispatch<SetStateAction<string>>;
	setDescription: Dispatch<SetStateAction<string>>;
	inputFileRef: MutableRefObject<HTMLInputElement | null>;
	handleImage: ChangeEventHandler<HTMLInputElement>;
	image: File | undefined;
}

export interface FormData2Props {
	handleSocialNetworks: (socialNetwork: SocialNetwork) => void;
}
