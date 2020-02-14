<template>
  <div id="app">
    <GameOver />
    <Header />
    <div id="game">
      <Mines />
      <Scoreboard />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Mines from './components/Mines.vue'
import Scoreboard from './components/Scoreboard.vue'
import GameOver from './components/GameOver.vue'

export default {
  name: 'App',
  components: {
    Header,
    Mines,
    Scoreboard,
    GameOver
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 980px;
  margin: 0 auto;
}
#game{
    width: 980px;
}
#mines, #scoreboard{
    float:left;
}
</style>
