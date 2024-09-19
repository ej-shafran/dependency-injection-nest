export interface Uploader {
  upload(fileName: string, contents: string | Buffer): Promise<void>;
}
