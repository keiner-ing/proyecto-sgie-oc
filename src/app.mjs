import { createTask, toggleTask, pendingCount } from "./tasks.mjs";

const STORAGE_KEY = "laboratorio-opencode-tareas-v1";
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const count = document.querySelector("#task-count");
const feedback = document.querySelector("#form-feedback");
document.querySelector("#current-year").textContent = new Date().getFullYear();

function loadTasks() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value.filter((t) => t && typeof t.id === "string" && typeof t.title === "string" && typeof t.done === "boolean") : [];
  } catch { return []; }
}

let tasks = loadTasks();
function saveTasks() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }
  catch { feedback.textContent = "No se pudo guardar en este navegador."; }
}
function render() {
  list.replaceChildren();
  const pending = pendingCount(tasks);
  count.textContent = `${pending} ${pending === 1 ? "pendiente" : "pendientes"}`;
  if (tasks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "Aún no hay tareas. Crea la primera para empezar.";
    list.append(empty);
    return;
  }
  for (const task of tasks) {
    const row = document.createElement("li");
    row.className = `task-row${task.done ? " done" : ""}`;
    const label = document.createElement("label");
    label.className = "task-main";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      tasks = toggleTask(tasks, task.id); saveTasks(); render();
    });
    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;
    label.append(checkbox, title);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "delete-button";
    remove.textContent = "Eliminar";
    remove.setAttribute("aria-label", `Eliminar ${task.title}`);
    remove.addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== task.id); saveTasks(); render();
    });
    row.append(label, remove);
    list.append(row);
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault(); feedback.textContent = "";
  try {
    tasks = [...tasks, createTask(input.value, crypto.randomUUID())];
    saveTasks(); render(); form.reset(); input.focus();
  } catch (error) { feedback.textContent = error.message; }
});
render();
