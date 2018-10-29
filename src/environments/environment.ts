// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:  {
    apiKey: "AIzaSyBzR25JPIO_pLelTs56J37SmgSya1jiMvU",
    authDomain: "hospitalmanagement-demo.firebaseapp.com",
    databaseURL: "https://hospitalmanagement-demo.firebaseio.com",
    projectId: "hospitalmanagement-demo",
    storageBucket: "",
    messagingSenderId: "739478584528"
  }
};
