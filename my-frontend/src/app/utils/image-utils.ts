export class ImageUtils {
    fileToByteArray(file: File): Promise<ArrayBuffer> {
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
    
      byteArrayToImageDataUrl(byteArray: ArrayBuffer): string {
        const blob = new Blob([new Uint8Array(byteArray)], { type: "image/jpeg" });
        return URL.createObjectURL(blob);
      }
    
}
