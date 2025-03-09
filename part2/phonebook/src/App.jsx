import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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

  // Handle deleting person
  const handleDelete = (id, name) => {
    if (confirm("Delete " + name + "?")) {
      personService
        .deletePerson(id)
        .then(() => {
          personService.getAll().then((updatedPersons) => {
            setPersons(updatedPersons);
          });
        })
        .catch((error) => {
          console.error("Failed to delete person:", error);
        });
    } else {
      return;
    }
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
      // leave setting id to server
    };

    // Check if person exists handle changing number
    if (persons.some((person) => person.name === newPerson.name)) {
      if (
        confirm(
          newPerson.name + " is already in the phonebook, replace old number?"
        )
      ) {
        // Find person to update based on name
        const personToUpdate = persons.find(
          (person) => person.name === newPerson.name
        );
        // define updatedPerson and add updated number
        const updatedPerson = { ...personToUpdate, number: newNumber };
        personService
          .update(updatedPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : returnedPerson
              )
            );
          });
        setNewName("");
        setNewNumber("");
        console.log(updatedPerson);
        return;
      }
    }
    // Post to server using service
    personService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
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
      <Persons
        persons={filterItems(persons, newFilter)}
        deletePerson={handleDelete}
      />
      {/* Use filtering function to display filtered person*/}
    </div>
  );
};

export default App;
