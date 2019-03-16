export async function removeDocument(docId) {
    try {
        console.log('removeDoc ', docId);
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ docId })
        }
        const response = await fetch('http://localhost:8080/removeDocument', config);
        const json = await response.json();
        return json;
    } catch (e) {
        console.log(e);
    }
}