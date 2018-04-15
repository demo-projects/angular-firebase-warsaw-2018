// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB18CgVDr-AejqXZv8SQGw_w2aFQAgwPdY",
    authDomain: "warsaw-demo.firebaseapp.com",
    databaseURL: "https://warsaw-demo.firebaseio.com",
    projectId: "warsaw-demo",
    storageBucket: "warsaw-demo.appspot.com",
    messagingSenderId: "683114411673"
  }
};
