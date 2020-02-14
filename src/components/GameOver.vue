<template>
    <div id="gameover" :class="{'none':!isFinish}">
        <div id="popup">
            <div id="popup-title">
                <h2>GAME OVER</h2>
            </div>
            <div id="popup-score" class="justify-content-between">
                <span>Your Score</span>
                <span>{{userInstantScore}}</span>
            </div>
            <div id="popup-footer" class="justify-content-between">
                <button @click="reset('tryAgain')">Try Again</button>
                <button @click="reset('newGame')">New Game</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        isFinish() {
            return this.$store.getters.showMines;
        },
        userInstantScore() {
            return this.$store.getters.getUserInstantScore;
        },
        getGrid() {
            return this.$store.getters.getBoardGrid;
        },
        getPlayer() {
            return this.$store.getters.getPlayer;
        }
    },
    methods:{
        reset(type) {
            this.$store.commit('showMines', false);

            if(type === "newGame") {
                this.$store.commit('newGame', true);
            } else {
                this.$store.commit('createGameBoard', this.getGrid);
                this.$store.commit('newGame', false);
            }
        }
    }
}
</script>

<style scoped>
    .none {
        display: none;
    }
    #gameover {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #101727bd;
        top: 0;
        left: 0;
        z-index: 2;
    }
    #popup {
        width: 432px;
        height: 238px;
        background-color: #F7F9FA;
        border-radius: 10px;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        position: absolute;
    }
    #popup-title {
        background-color: #00BCE5;
        display: flow-root;
        color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 2px solid #E5E5E5;
        height: 66px;
    }
    #popup-title h2 {
        margin: 0;
        line-height: 66px;
    }
    #popup-score {
        color: #91949F;
        font-size: 20px;
        margin: 30px 20px;
    }
    #popup-score span:nth-last-child(1) {
        color:#5D6980;
        font-weight: 600;   
    }
    #popup-footer {
        margin: 0px 20px;
    }
    #popup-footer button {
        width: 184px;
        height: 60px;
        border-radius: 10px;
        font-size: 24px;
        border:none;
        outline: none;
        cursor: pointer;
        color:white;
    }
    #popup-footer button:first-child {
        background-color: #FF8A00;
        box-shadow: 0px 2px #ff8a0082;
    }
    #popup-footer button:last-child {
        background-color: #25A35C;
        box-shadow: 0px 2px #25a35c94;
    }
    .justify-content-between {
        display: flex;
        justify-content: space-between !important;
    }
</style>