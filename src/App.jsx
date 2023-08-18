import React from "react";
import Formulario from "./assets/components/Formulario";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-1">
      <div className="max-w-lg bg-white shadow-md p-8 rounded-lg py-4">
        <Header />
        <Formulario />
        <Footer />
      </div>
    </div>
  );
};

export default App;
