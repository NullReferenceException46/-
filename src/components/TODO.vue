<!-- Сразу раскаиваюсь: Все стили в проекте писал ИИ, я старался написать максимум своего, но все что я получил так это то что я где-то 3 раза переписывал вручную то что написал этот же ИИ -->
<script setup>
import { ref, watch } from "vue";
const newTask = ref("");
const tasks = ref(JSON.parse(localStorage.getItem("tasks")) || []);

function addNew() {
  if (!newTask.value.trim()) return;
  tasks.value.push({ text: newTask.value, done: false });
  newTask.value = "";
}

function removeTask(index) {
  tasks.value.splice(index, 1);
}

function done(task) {
  task.done = !task.done;
}
watch(
  tasks,
  (newTask) => {
    localStorage.setItem("tasks", JSON.stringify(newTask));
  },
  { deep: true },
);
</script>

<template>
  <div class="todo-app">
    <h1>Создай заметку</h1>
    <form @submit.prevent="addNew">
      <div class="input-row">
        <input v-model="newTask" placeholder="Что нужно сделать?" autofocus />
        <button type="submit">Добавить</button>
      </div>
      <ul>
        <li
          v-for="(task, index) in tasks"
          :key="index"
          :class="{ done: task.done }"
        >
          <input type="checkbox" :checked="task.done" @change="done(task)" />
          <span @click="done(task)">{{ task.text }}</span>
          <button class="delete-btn" @click="removeTask(index)">Удалить</button>
        </li>
      </ul>
      <p class="empty" v-if="tasks.length === 0">Пока ничего нет...</p>
    </form>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 480px;
  margin: 60px auto;
  padding: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", sans-serif;
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 24px;
}

.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

input[type="text"],
.input-row input {
  flex: 1;
  padding: 10px 14px;
  border: 2px solid #dce1e7;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-row input:focus {
  border-color: #4a90e2;
}

.input-row button {
  padding: 10px 18px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.input-row button:hover {
  background: #357abd;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: #f4f6f9;
  transition: background 0.2s;
}

li:hover {
  background: #e8ecf1;
}

li.done span {
  text-decoration: line-through;
  color: #aaa;
}

li span {
  flex: 1;
  cursor: pointer;
  font-size: 1rem;
  color: #2c3e50;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #4a90e2;
}

.delete-btn {
  padding: 4px 10px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s;
}

.delete-btn:hover {
  background: #c0392b;
}

.empty {
  text-align: center;
  color: #aaa;
  font-style: italic;
  margin-top: 16px;
}
</style>
