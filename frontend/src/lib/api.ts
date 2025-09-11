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

export async function deleteTask(taskId: number) {
    const res = await fetch(`http://localhost:8033/api/tasks/${taskId}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error("Erreur lors de la suppression de la tâche");
    }

    return true;
}
export const updateTask = async (task) => {
    const res = await fetch(`/api/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    });
    if (!res.ok) throw new Error("Failed to update task");
    return res.json();
};
