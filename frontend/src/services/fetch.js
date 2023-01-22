const baseurl = "https://example-nodejs-express.onrender.com/api/persons/";

export async function getAll() {
    try {
        const response = await fetch(baseurl);
        const json = await response.json();
        return json;
    } catch (error) {
        throw error;
    }
}

export async function savePerson(person) {
    try {
        const response = await fetch(baseurl, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(person),
        });

        return response;
    } catch (error) {
        throw error;
    }
}

export async function updatePerson(person) {
    try {
        const response = await fetch(`${baseurl}${person.id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(person),
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function deleteById(id) {
    try {
        const response = await fetch(`${baseurl}${id}`, {
            method: "DELETE",
        });
        return response;
    } catch (error) {
        throw error;
    }
}
