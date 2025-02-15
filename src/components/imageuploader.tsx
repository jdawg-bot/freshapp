

import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

export const ImageUploader = () => {
  return (
    <FileUploader
      acceptedFileTypes={['image/*']}
      path="public/"
      maxFileCount={1}
      isResumable
    />
  );
};