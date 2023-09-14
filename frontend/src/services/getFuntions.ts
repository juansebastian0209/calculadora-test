export async function getFunctions(): Promise<string[]> {
    const response = await fetch('http://localhost:5600/v1/functions', { method: 'GET' })
    const data = await response.json()
    return data.operators;
}