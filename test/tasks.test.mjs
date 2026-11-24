import test from "node:test";
import assert from "node:assert/strict";
import { normalizeTitle, createTask, toggleTask, pendingCount } from "../src/tasks.mjs";

test("el título elimina espacios innecesarios", () => {
  assert.equal(normalizeTitle("  Preparar   proyecto  "), "Preparar proyecto");
});

test("la tarea se crea pendiente", () => {
  assert.deepEqual(createTask("  Preparar proyecto  ", "1"), { id: "1", title: "Preparar proyecto", done: false });
});

test("se rechazan títulos vacíos", () => {
  assert.throws(() => createTask("   ", "1"), /nombre de la tarea/);
});

test("cambiar estado mantiene la lista original sin modificar", () => {
  const initial = [createTask("Revisar", "1")];
  const updated = toggleTask(initial, "1");
  assert.equal(updated[0].done, true);
  assert.equal(initial[0].done, false);
  assert.equal(pendingCount(updated), 0);
});
