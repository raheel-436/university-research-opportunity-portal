const API_URL = "http://127.0.0.1:8000/api"

export async function getOpportunities() {
    const res = await fetch(`${API_URL}/opportunities`)
    if (!res.ok){
        throw new Error("Failed to fetch opportunities");
    }

    return res.json()
}