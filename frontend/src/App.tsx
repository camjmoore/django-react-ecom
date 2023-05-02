import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
  return (
    <div className="bg-gray min-h-full">
      <Header />
      <main className="bg-white mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
