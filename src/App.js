import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import DataTable from "./components/DataTable";
import ManajemenBook from "./components/ManajemenBook";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
function App() {
  
    return (
        <div>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" exact element={<Beranda />} />
                    <Route
                        path="/manajemen-buku"
                        exact
                        element={<ManajemenBook />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
