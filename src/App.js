import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store';
import AppRoutes from './routes';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { CLIENT_ID, firebaseConfig } from './constants';
import { GoogleOAuthProvider } from '@react-oauth/google';
const usePageMeta = (title, description, keywords) => {
  const defaultTitle = "Ekohub";
  const defaultDesc = "Shop online a wide range";
  const defaultKeys = "Shop Online";

  useEffect(() => {
    document.title = title || defaultTitle;
    document.querySelector("meta[name='description']").setAttribute("content", description || defaultDesc);
    document.querySelector("meta[name='keywords']").setAttribute("content", keywords || defaultKeys);
  }, [defaultTitle, title, defaultDesc, description, defaultKeys, keywords ]);
};
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
  usePageMeta("Ekohub", "Shop online a wide range of top-quality products from electronics, phones, and computers to fashion, shoes, household equipment, babies and kids items, toys, furniture, groceries, sport and fitness gear, properties, and more - all from the best brands in the market. Ekohub online shopping",
   `
Clothing, Shoes, Electronics, Home appliances, Furniture, Jewelry
Watches, Beauty products, Personal care products, Sports equipment, Outdoor gear
Toys, Books, Music, Movies, Video games, Office supplies
Pet supplies, Health supplements, Food and beverage, Online shopping, E-commerce
Shopping online, Buy online,Online store, Shop online, Online shopping sites, Best online shopping, Online shopping deals, Cheap online shopping, Online shopping website, Online shopping offers, Online shopping discounts, Online shopping for clothes, Online shopping for shoes, Online shopping for electronics, Online shopping for home decor, Online shopping for beauty products, Online shopping for accessories, Online shopping for gifts

   
   `);
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
