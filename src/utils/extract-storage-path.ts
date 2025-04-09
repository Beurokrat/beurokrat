export default function extractStoragePath(url: string, bucketName: string): string | null {
    const marker = `${bucketName}/`;
    const index = url.indexOf(marker);
    if (index === -1) return null;
  
    return url.slice(index + marker.length);
  }
  