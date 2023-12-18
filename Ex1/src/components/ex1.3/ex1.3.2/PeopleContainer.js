// PeopleContainer.js
import React from "react";
import Media from "react-media";
import { Route, Routes } from "react-router-dom";
import Person from "./Person";
import PeopleList from "./PeopleList";

const PeopleContainer = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 700px)",
      }}
    >
      {(size) => (
        <div style={{ display: "flex" }}>
          {size.small ? (
            <>
              <Routes>
                <Route path="/people/:id" element={<Person />} />
              </Routes>
              <PeopleList />
            </>
          ) : (
            <>
              <PeopleList />
              <Routes>
                <Route path="/people/:id" element={<Person />} />
              </Routes>
            </>
          )}
        </div>
      )}
    </Media>
  );
};

export default PeopleContainer;
