// PeopleList.js
import React from "react";
import people from "./people";

const PeopleList = () => {
  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
