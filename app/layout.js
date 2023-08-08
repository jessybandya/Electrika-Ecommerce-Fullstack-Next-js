"use client"

import './globals.css';
import FloatingButton from "@components/Floating-Button";
import { SoftUIControllerProvider } from "@context";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import { store, persistor  } from '@auth/redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
import "react-multi-carousel/lib/styles.css";
// import CartProvider from '@auth/store/CartProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Script from 'next/script';
import Footer from '@components/Footer';



export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
    <head>
    <link rel="shortcut icon" type="image/x-icon" href="/media/images/favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800&amp;display=swap" rel="stylesheet" />

    <link
    href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
    rel="stylesheet"
  />

	<link rel="stylesheet" type="text/css" href="/stylesheets/bootstrap.min.css"/>

	<link rel="stylesheet" type="text/css" href="/stylesheets/style.css"/>

	<link rel="stylesheet" type="text/css" href="/stylesheets/responsive.css"/>
    </head>
      <body>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <SoftUIControllerProvider>
      <ToastContainer />
        {children}
      <FloatingButton phoneNumber={`+254713441634`}/>
      <Footer/>
      </SoftUIControllerProvider>
      </PersistGate>
      </Provider>

    <Script type="text/javascript" src="/javascript/jquery.min.js" />
    <Script type="text/javascript" src="/javascript/tether.min.js" />
    <Script type="text/javascript" src="/javascript/bootstrap.min.js" />
    <Script type="text/javascript" src="/javascript/waypoints.min.js" />
    <Script type="text/javascript" src="/javascript/jquery.circlechart.js" />
    <Script type="text/javascript" src="/javascript/easing.js" />
    <Script type="text/javascript" src="/javascript/jquery.zoom.min.js" />
    <Script type="text/javascript" src="/javascript/jquery.flexslider-min.js" />
    <Script type="text/javascript" src="/javascript/owl.carousel.js" />
    <Script type="text/javascript" src="/javascript/smoothscroll.js" />
    <Script type="text/javascript" src="/javascript/jquery-ui.js" />
    <Script type="text/javascript" src="/javascript/jquery.mCustomScrollbar.js" />
    <Script
      type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&region=GB"
    />
    <Script type="text/javascript" src="/javascript/gmap3.min.js" />
    <Script type="text/javascript" src="/javascript/waves.min.js" />
    <Script type="text/javascript" src="/javascript/jquery.countdown.js" />
    <Script type="text/javascript" src="/javascript/main.js" />
      </body>
    </html>
  )
}
