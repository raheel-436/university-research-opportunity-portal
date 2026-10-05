const API_URL = "http://127.0.0.1:8000/api"

export async function getOpportunities() {
    const res = await fetch(`${API_URL}/opportunities`)
    if (!res.ok){
        throw new Error("Failed to fetch opportunities");
    }

    return res.json()
}

export async function createOpportunity(opportunity) {
    const res = await fetch(`${API_URL}/opportunities`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(opportunity)
    })

     if (!res.ok) {
        throw new Error("Failed to create opportunity")
    }

  return res.json()
    
}