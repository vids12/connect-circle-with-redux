import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout, Modal } from "./components";
import { Edit, Home, Login, SeeAll } from "./pages";
import { Profile } from "./features/index";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<SeeAll />} path="/show-all-followers" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Login />} path="/login" />
          <Route element={<Modal />} path="/modal" />
          <Route element={<Edit />} path="/edit" />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
