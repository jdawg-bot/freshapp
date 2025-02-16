
import React, { useState } from 'react';
import { uploadData } from 'aws-amplify/storage';
import '@aws-amplify/ui-react/styles.css';



export const ImageUploader = () => {
  const [uploadMessage, setUploadMessage] = useState<string>('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Construct the key so that the file is stored in the uploads folder.
      const path = `uploads/${file.name}`;

      // Upload the file using uploadData.
      // The bucket is specified by its name, which is 'anthony-object-detection-bucket'.
      const result = await uploadData({
        path,
        data: file,
        options: {

          bucket: {
            bucketName: 'anthony-object-detection-bucket',
            region: 'us-east-1'
          }
        }
      }).result;

      console.log('Upload successful:', result);
      setUploadMessage('Upload successful!');
    } catch (error: any) {
      console.error('Error uploading file:', error);
      setUploadMessage(`Upload failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
};
