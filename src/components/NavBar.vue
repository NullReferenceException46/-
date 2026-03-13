<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="nav-links">
        <a href="https://github.com/NullReferenceException46" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="ГитХаб"
          />
        </a>

        <a href="https://t.me/NoSyrneke" target="_blank">
          <img
            src="https://icons.veryicon.com/png/o/application/awesome-common-free-open-source-icon/telegram-4.png"
            alt="Телега"
          />
        </a>
        <a
          href="https://open.spotify.com/user/31af7kpctcj7uchciw5uyjw2ivsi?si=6b596e862d8b4006"
          target="_blank"
        >
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Black.png"
            alt="Спотифайчик"
            target="_blank"
        /></a>
        <a href="https://discord.gg/zGPK6Qsf" target="_blank">
          <img
            src="https://www.freeiconspng.com/uploads/discord-black-icon-1.png"
            alt="Дискорд сервер"
          />
        </a>
      </div>

      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="active">
          Главная
        </router-link>

        <router-link to="/about" class="nav-link" active-class="active">
          Обо мне
        </router-link>
        <router-link to="/todo" class="nav-link" active-class="active">
          Мини TODO
        </router-link>
        <button @click="toggleTheme" class="theme-toggle" id="changebtn">
          {{ theme === "light" ? "Тёмная" : "Светлая" }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";

const theme = ref(localStorage.getItem("theme" || "light"));

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme.value);
  localStorage.setItem("theme", theme.value);
}
onMounted(() => {
  document.documentElement.setAttribute("data-theme", theme.value);
});
</script>

<style scoped>
.navbar {
  height: 70px;
  background: #8b00e28a;
  border-bottom: 1px solid #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-radius: 15px;
  box-shadow: #000000;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: #000000;
}

.logo {
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: white;
}

.nav-link.active {
  color: white;
  position: relative;
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #39047e;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-login {
  background: #39047e;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-login:hover {
  background: #39047e;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
img {
  width: 30px;
  height: 30px;
  margin: 0;
}
#changebtn {
  color: #c7abab;
  background-color: #20004b;
  border-radius: 15px;
}
</style>
