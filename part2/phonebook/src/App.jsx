import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  // Handle input changes
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Searching & filtering function
  function filterItems(array, query) {
    return array.filter((element) =>
      element.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Handle form submission
  const addPerson = (event) => {
    event.preventDefault(); // Prevent page reload
    const newPerson = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1, // check length of array and set ID for new entry
    };

    // Check if person exists and throw error if so
    if (persons.some((person) => person.name === newPerson.name)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    // Post to server using axios
    axios.post("http://localhost:3001/persons", newPerson).then((response) => {
      console.log(response);
      setPersons(persons.concat(response.data)); // sync local to server
      setNewName(""); // clear the form state
      setNewNumber("");
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>Add New</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filterItems(persons, newFilter)} />
      {/* Use filtering function to display filtered person*/}
    </div>
  );
};

export default App;
