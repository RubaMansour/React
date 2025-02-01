
import React, { useState, useEffect } from "react";
import Person from "./person";

function PersonController() {
  const [person, setPerson] = useState(null);

 
  const getPerson = async () => {
    try {
      const response = await fetch("https://randomuser.me/api?results=1");
      const data = await response.json();
      const user = data.results[0];

     
      const formattedPerson = {
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
      };

   setPerson(formattedPerson);
    } catch (error) {
      console.error("error to fetch data:", error);
    }
  };

useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <button onClick={getPerson}>new person</button>
      <Person person={person} />
    </div>
  );
}

export default PersonController;

