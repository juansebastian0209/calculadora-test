export async function setFunction(number1: string, number2: string, operator: string) {
    const response = await fetch('http://localhost:5600/v1/functions', {
        body: JSON.stringify({ number1, number2, operator }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data.result;
}