export class ImageUtils {
	static fileToByteArray(file: File): Promise<ArrayBuffer> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();

			reader.onload = () => {
				resolve(reader.result as ArrayBuffer);
			};

			reader.onerror = (error) => {
				reject(error);
			};

			reader.readAsArrayBuffer(file);
		});
	}

	static base64ToImage(base64string: string): string {
		const binaryString = atob(base64string);
		const length = binaryString.length;
		const byteArray = new Uint8Array(length);

		for (let i = 0; i < length; i++) {
			byteArray[i] = binaryString.charCodeAt(i);
		}

		const blob = new Blob([new Uint8Array(byteArray)], { type: "image/png" });
		return URL.createObjectURL(blob);
	}

	static byteArrayToImage(byteArray: ArrayBuffer) {
		const blob = new Blob([new Uint8Array(byteArray)], { type: "image/png" });
		return URL.createObjectURL(blob);
	}

}
