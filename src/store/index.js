import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player:[],
    userInstantScore:0,
    gameBoard:[],
    showMines:false,
    grid:5,
    users:[],
    newGame:false,
    style:''
  },
  getters:{
    getUserInstantScore(state) {
      return state.userInstantScore;
    },
    getGameBoard(state) {
      return state.gameBoard;
    },
    showMines(state) {
      return state.showMines;
    },
    getBoardGrid(state) {
      return state.grid;
    },
    getUsers(state) {
      return state.users;
    },
    getPlayer(state) {
      return state.player;
    },
    getIsNewGame(state) {
      return state.newGame;
    },
    getGridStyle(state) {
      return state.style;
    }
  },
  mutations: {
    addPlayer(state, payload) {
      state.player = payload;
    },
    createGameBoard(state, payload) {
      state.grid = payload;
      state.gameBoard = [];
      state.userInstantScore = 0;
      state.player.point=0;
      state.style = `grid${state.grid}x${state.grid}`

      const boxCount = (payload * payload)

      let mineCounter = 0;

      for(let i = 0; i < boxCount; i++) {

        if(Math.floor(Math.random() * 7) > 3 && mineCounter < payload) {
            state.gameBoard.push({ mine:true, isOpen:false });
            mineCounter++;
        } else {
          state.gameBoard.push({ mine:false, isOpen:false });
        }
        
      }
    },
    showMines(state, payload){
      state.showMines = payload;
    },
    addUser(state, payload) {
      state.users.push(payload);
    },
    newGame(state, payload) {
      state.newGame = payload;
      if(payload) {
        state.gameBoard = [];
      }
    }
  },
  actions: {
    addPoint({ state }) {
      state.userInstantScore += 5;
      state.player.point = state.userInstantScore;
    },
    openBox({ state }, payload) {
      state.gameBoard[payload].isOpen = true;
    }
  },
  modules: {
  }
})
