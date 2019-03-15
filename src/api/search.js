export async function search(query) {
    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query)
        }
        const response = await fetch('http://localhost:8080/search', config);
        const json = await response.json();
        return json;
    } catch (e) {

    }
}