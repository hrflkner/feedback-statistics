import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyADlYqKil-te6fskvTddVdcaJCEBQfpI8I',
    authDomain: 'feedbackstats-200d9.firebaseapp.com',
    projectId: 'feedbackstats-200d9',
    storageBucket: 'feedbackstats-200d9.appspot.com',
    messagingSenderId: '1023494798030',
    appId: '1:1023494798030:web:eb4e2c6f79bb5e2236ee9f',
    measurementId: 'G-ERZENZXS4J',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
