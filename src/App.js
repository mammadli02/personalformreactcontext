import React, { Suspense, lazy } from "react";

import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";

import {  Route, Routes } from "react-router-dom";
import Layout from "shared/components/Layout/Layout";
import Header from "shared/components/Header";
import { ToastContainer } from "react-toastify";

const HomePage = lazy(() => import("pages/HomePage"));
const Create = lazy(() => import("pages/Create"));

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Layout>
          <Suspense fallback={<h1>Loading....</h1>}>
            <Routes>
             
              <Route path="/home" element={<HomePage />} />
              <Route path="/create" element={<Create />} />

            </Routes>
          </Suspense>
        </Layout>
        <ToastContainer theme="dark" />
      </>
    );
  }
}

export default App;
