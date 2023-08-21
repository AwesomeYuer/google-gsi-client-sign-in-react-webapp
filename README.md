# Google One Tap Sign-In for Web Demo

# Usage
Open src/App.js and insert the client ID where it says `insert-client-id-here` you created on the Google Developer Console [link here](https://console.developers.google.com/apis/credentials).

Then `npm install`, and `npm start`

Refer to this post here for the details of the demo. [Passwordless sign-in with Google One Tap Sign-In for Web](https://www.intricatecloud.io/2020/12/passwordless-sign-in-with-google-one-tap-for-web/)

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


May be need run

```powershell

npm i react-scripts@latest

npm audit fix

npm audit fix --force

```

May be need modify `package.json`

```json

{

 "scripts": {
    "start": "react-scripts start --openssl-legacy-provider start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

}



```

