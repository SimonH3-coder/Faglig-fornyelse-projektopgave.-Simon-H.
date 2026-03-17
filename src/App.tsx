import { useState } from "react";
import { Home } from "./components/Home";
import { Navagation } from "./components/Navagation";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Navagation />
    </>
  );
}

export default App;

{
  /* <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />

      </Routes>
      </BrowserRouter> */
}
