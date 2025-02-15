import { defineStorage } from '@aws-amplify/backend';


export const storage = defineStorage({
    name: 'amplifyImageDrive',
    access: (allow) => ({
      // Files under the public/ folder:
      'public/*': [
        // Allow any authenticated user to read and write.
        allow.authenticated.to(['read', 'write']),
        // Optionally, if you want guests to read files:
        allow.guest.to(['read'])
      ]
    })
  });