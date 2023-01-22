import React from "react";

function PersonForm({ addPerson, handleNewName, handleNewNumber }) {
    return (
        <section>
            <h2>Add New:</h2>
            <form onSubmit={(e) => addPerson(e)}>
                <label>
                    name:
                    <input onChange={(e) => handleNewName(e)} type="text" />
                </label>
                <br />
                <label>
                    number:
                    <input onChange={(e) => handleNewNumber(e)} type="text" />
                </label>
                <label>
                    <button type="submit">add</button>
                </label>
            </form>
        </section>
    );
}

export default PersonForm;
