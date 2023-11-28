import Heder from "./Components/Heder";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import Data from "./Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Heder />
      <Routes>
        <Route element={<Hero />} path="/" />
        <Route element={<Error />} path="*" />
        <Route element={<Data />} path="/data" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

/*// import Heder from "./Components/Heder";
// import Hero from "./Components/Hero";
// import Footer from "./Components/Footer";
// import Error from "./Components/Error";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Heder />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/footer" element={<Footer />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App; */
