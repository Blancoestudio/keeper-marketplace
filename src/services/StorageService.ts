

export class StorageService {

	static get(key: string) {
		try {
			const dataStr = localStorage.getItem(key);
			return dataStr ? JSON.parse(dataStr) : null;
		} catch (error) {
			console.log('Storage get error: ', error);
			return null;
		}
	}

	static set(key: string, value: string) {
		try {
			localStorage.setItem(key, value);
		} catch (error) {
			console.log('Storage remove error: ', error);
		}
		
	}

	static remove(key: string) {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.log('Storage remove error: ', error);
		}
	}

	static clear() {
		try {
			return localStorage.clear();
		} catch (error) {
			console.log('Storage clear error: ', error);
		}
	}
}
