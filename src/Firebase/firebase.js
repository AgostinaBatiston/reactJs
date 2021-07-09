import firebase from 'firebase/app';

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyANT8N2OcNn4xwDImWEDYM3ryj7Q_hLspc",
    authDomain: "tienda-uzumaki.firebaseapp.com",
    projectId: "tienda-uzumaki",
    storageBucket: "tienda-uzumaki.appspot.com",
    messagingSenderId: "410728580345",
    appId: "1:410728580345:web:df2ba2c6940990608e8e28"
  };
  // Initialize Firebase

  const fb = firebase.initializeApp(firebaseConfig);

// Y ahora utilizamos su método llamado firestore, lo ejecutamos y lo guardamos
// dentro de una constante llamada db. También debemos exportar
export const db = fb.firestore();