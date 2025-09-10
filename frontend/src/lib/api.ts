export async function getTasks() {
    const res = await fetch("http://localhost:8033/api/tasks");
    if (!res.ok) throw new Error("Erreur de récupération");
    return res.json();
}
