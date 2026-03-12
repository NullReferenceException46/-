<template>
  <div class="container">
  <h2>Кто я такой на самом деле</h2>

  <p>
    Я Mr.Сырнечке. Мне 14, и я из тех, кто сначала ненавидел код, потому что ноутбук лагал на всём, а потом влюбился в него именно из-за этого.
  </p>

  <p>
    Летом у меня был ужасный ноутбук на котором я даже умудрялся во что то играть, но "Спасибо" он мне за это так и не сказал. Еще тогда я пытался учить что то в кодинге: сначала пробовал Python, потом начал осваивать веб разработку с HTML и учу ее до сих пор!
  </p>

  <p>
    Сначала родители пытались занять меня чем-либо чтобы я не впустую сидел за ноутом и отец устроил мне возможность поговорить с его другом-фрилансером в вебе. Я этим увлекся и изучив сначала какие-то основы стал учить React, но он показался мне слишком страшным и так и пришел к Vue и пока что это мой основной инструмент.
  </p>

  <p>
    Кроме кода обожаю:
    <ul>
      <li>метал (Cannibal Corpse, Children of Bodom, Type O Negative, Rammstein)</li>
      <li>играть на гитаре (пока криво, но громко)</li>
      <li>аниме (Вермейл в золотом — моё сердечко ❤️)</li>
      <li>готовить что-по рецептам из интернета</li>
    </ul>
  </p>

  <p>
    Если ты тоже начинающий, любишь тяжёлую музыку или просто хочешь поболтать про код/гитару/аниме — пиши в Telegram или Discord. Буду рад найти родственные души!
  </p>
  <p>Вот Pinterest моего друга. Ему нравится фотография и думаю ему будет приятно если на него кто то подпишется <a href="https://ru.pinterest.com/moskito476/">Клик</a></p>

    <img
      src="https://media.tenor.com/Jojpr9QgMLoAAAAM/maxwell-maxwell-spin.gif"
      alt="котейчик"
    />
  </div>
</template>
<style scoped>
.container {
min-height: 95vh;        
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: #0d0d0d;
  color: #e0e0e0;
  font-family: 'Segoe UI', system-ui, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 15px
}
img {
  width: 330px;
  height: 250px;
}
h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #9300f5;
  text-shadow: 0 0 12px rgba(62, 1, 119, 0.514);
  letter-spacing: 1px;
}
p {
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: #d0d0d0;
}

ul {
  list-style: none;
  padding-left: 0;
  font-size: 1.1rem;
}

ul li {
  margin: 0.6rem 0;
  position: relative;
  padding-left: 1.8rem;
}

ul li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #ff5555;
  font-weight: bold;
}

img {
  width: 280px;
  height: auto;
  border-radius: 12px;
  margin-top: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(255, 80, 80, 0.3);
  transition: transform 0.4s ease;
}

img:hover {
  transform: scale(1.08) rotate(3deg);
}
a {
  color: #ff0000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;}

</style>
