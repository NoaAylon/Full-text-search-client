export async function getDocument(docId, words) {
    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ docId, words })
        }
        const response = await fetch('http://localhost:8080/getDocument', config);
        console.log('response--->', response);
        const json = await response.json();
        return json;
    } catch (e) {

    }
}