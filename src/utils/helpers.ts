export const convertPrice = (price?: string) =>
	Number(price?.replace("$", "").replace(".", ""));

export const calculateDiscount = (price?: string, discount?: number) =>
	new Intl.NumberFormat()
		.format(convertPrice(price!) - (convertPrice(price!) * discount!) / 100)
		.replace(",", ".");
