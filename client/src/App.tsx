import React from "react";
import { Route } from "wouter";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Toaster />
      <div className="">
        <Route path="/">
          <Home />
        </Route>
      </div>
    </div>
  );
}

export default App;
