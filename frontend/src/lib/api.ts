export async function getTasks() {
    const res = await fetch("http://localhost:8033/api/tasks");
    if (!res.ok) throw new Error("Erreur de récupération");
    return res.json();
}
export async function addTask(newTask: { title: string }) {
    const res = await fetch("http://localhost:8033/api/tasks", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
    });
    return res.json();
}
export async function DeleteTask(newTask: { title: string }) {
    const res = await fetch("http://localhost:8033/api/tasks/user/", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
    });
    return res.json();
}
export async function deleteTask(taskId: number) {
    const res = await fetch(`http://localhost:8033/api/tasks/${taskId}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error("Erreur lors de la suppression de la tâche");
    }

    return true;
}
export async function updateTask(taskId: number, updatedTask: any) {
    const res = await fetch(`http://localhost:8033/api/tasks/${taskId}`, {
        method: "PUT",
        body: JSON.stringify(updatedTask),
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
        throw new Error("Erreur lors de la mise à jour");
    }
    return res.json();
}