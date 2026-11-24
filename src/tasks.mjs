export function normalizeTitle(value) {
  if (typeof value !== "string") throw new TypeError("El título debe ser texto.");
  return value.trim().replace(/\s+/g, " ");
}

export function createTask(title, id) {
  const normalized = normalizeTitle(title);
  if (!normalized) throw new Error("Escribe el nombre de la tarea.");
  if (typeof id !== "string" || !id) throw new Error("Se necesita un identificador.");
  return { id, title: normalized, done: false };
}

export function toggleTask(tasks, id) {
  return tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task);
}

export function pendingCount(tasks) {
  return tasks.filter((task) => !task.done).length;
}
