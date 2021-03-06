// COMPONENT AND PAGES
import Home from "./pages/Home";
import Nav from "./components/Nav";
// styles;
import GlobalStyles from "./components/GlobalStyles";
// react router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
