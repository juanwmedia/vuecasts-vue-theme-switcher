<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="selector">
      <a href="#" class="selector__link vue">Vue 🌞</a>
      <a href="#" class="selector__link night">Night 🌚</a>
      <a href="#" class="selector__link eighties">80's 🌈</a>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.selector {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
}

.selector__link {
  margin: 0 .3rem;
  text-decoration: none;
  border: 1px solid;
  padding: .3rem;
  color: white;
  font-weight: bold;
  border-radius: .5rem;
  display: inline-block;
  transition: all .3s ease-in-out;
}

.selector__link:hover {
  transform: translateY(.5rem);
}

.selector__link.vue {
  background-color: #42b983;
}

.selector__link.night {
  background-color: black;
}

.selector__link.eighties {
  background-color: purple;
}

</style>
