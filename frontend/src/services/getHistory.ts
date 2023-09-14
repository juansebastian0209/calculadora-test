export async function getHistory() {
    const response = await fetch('http://localhost:5600/v1/history', { method: 'GET' })
    const data = await response.json()
    return data.history
}