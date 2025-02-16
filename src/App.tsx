//import { useEffect, useState } from "react";
//import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from '@aws-amplify/ui-react';
//import { generateClient } from "aws-amplify/data";
import { ImageUploader } from './components/imageuploader';
import { FileUploader } from '@aws-amplify/ui-react-storage';


//const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <main>
      <h1>{user?.signInDetails?.loginId} Welcome!</h1>

      <div>
        This is Group 2's Assessment 2 front end! You can upload an image here! 
        <br />

      </div>
      <div>
      <h1>ImageUploader</h1>
      <ImageUploader />
      <FileUploader
      acceptedFileTypes={['image/*']}
      bucket={{
        bucketName: 'anthony-object-detection-bucket',
        region: 'us-east-1',
      }}
      path="uploads/"
      maxFileCount={1}
    />
    </div>
    <br />
      <button onClick={signOut}>Sign out</button>  
    </main>
  );
}

export default App;
