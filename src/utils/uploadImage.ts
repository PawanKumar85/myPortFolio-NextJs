import cloudinary from "@/config/cloudinary"
export const UploadImage = async (file: File, folder: string) => {
    const buffer = await file.arrayBuffer();
    const byts = Buffer.from(buffer);

  return new Promise(async (resolve, reject) => {
    await cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: folder,
      },
      async (error, res) => {
        if (error) reject(error);
        resolve(res);
      }
    ).end(byts);
  });
};

