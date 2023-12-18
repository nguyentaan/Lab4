import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PeopleContainer from "./PeopleContainer";

function Ex132() {
  return (
    <>
      <h3 style={{ color: "red" }}>Ex 1.3.2</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/people/*" element={<PeopleContainer />} />
        </Routes>
        <Link to="/people">People</Link>
      </BrowserRouter>
    </>
  );
}

export default Ex132;
