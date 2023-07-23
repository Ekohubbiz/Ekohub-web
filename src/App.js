import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store';
import AppRoutes from './routes';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { CLIENT_ID, firebaseConfig } from './constants';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  useEffect(() => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    firebase.auth().signInAnonymously();
  }, []);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Provider store={store}>
        <AppRoutes />
        <ToastContainer />
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default App;
