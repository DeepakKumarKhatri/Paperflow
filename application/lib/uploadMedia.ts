import cloudinary from "./cloudinary";

interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
}

export const UploadProfileImage = async (file: File, folder: string) => {

  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);

  return new Promise<CloudinaryUploadResult>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: folder,
        },
        (error: Error, result: CloudinaryUploadResult) => {
          if (error) {
            return reject(error.message);
          }
          return resolve(result);
        }
      )
      .end(bytes);
  });
};
