import { useState } from "react";
import { Home } from "./components/Home";
import { Navagation } from "./components/Navagation";
import { Destination } from "./components/Destination";
import { Reunion } from "./components/Reunion";
import { Slidertravel } from "./components/Slidertravel";
import { Information } from "./components/Information";
import { Footermain } from "./components/Footermain";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Navagation />
      <Destination />
      <Reunion />
      <Slidertravel />
      <Information />
      <Footermain />
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
