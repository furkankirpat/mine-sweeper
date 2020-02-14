<template>
    <div id="header">
        <div class="justify-content-between">
            <img alt="Vue logo" src="@/assets/logo.png" width="525" height="108">
            <div id="user-score" class="justify-content-between">
                <span>Score</span>
                <span>{{ userInstantScore }}</span>
            </div>
        </div>
        <div class="justify-content-between">
            <div id="username" :class="{'justify-content-between':true, 'danger-validation':!validations.name, 'disabled-button':!validations.grid&&!getIsNewGame}">
                <span>Name</span>
                <input type="text" v-model="username" :class="{'disabled-button':!validations.grid&&!getIsNewGame}" :disabled="!validations.grid&&!getIsNewGame">
            </div>
            <div id="select-grid-type">
                <select v-model="grid" :class="{ 'disabled-button':!validations.grid&&!getIsNewGame }" :disabled="!validations.grid&&!getIsNewGame">
                    <option value="5">5x5 Grid</option>
                    <option value="6">6x6 Grid</option>
                    <option value="7">7x7 Grid</option>
                    <option value="8">8x8 Grid</option>
                </select>
            </div>
            <div id="start">
                <button @click="startGame" :class="{ 'disabled-button':validations.start && !getIsNewGame }" :disabled="validations.start&&!getIsNewGame">Start</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            grid:"5",
            validations:{
                name:true,
                start:false,
                grid:true
            }
        }
    },
    computed:{
        userInstantScore() {
            return this.$store.getters.getUserInstantScore;
        },
        getUserCount() {
            return this.$store.getters.getUsers;
        },
        getIsNewGame() {
            return this.$store.getters.getIsNewGame;
        }
    },
    methods:{
        startGame() {
            if(this.username === '') {
                this.validations.name = false;
                this.validations.start = true;
                alert('Lütfen isim girin!');

                return false;
            }

            this.validations.start = true;
            this.validations.grid = false;

            this.$store.commit('createGameBoard', this.grid);
            this.$store.commit('addPlayer', { name:this.username, point:0 });

            this.$store.commit('newGame', false);
        }
    },
    watch:{
        username(newValue) {
            if(newValue !== '') {
                this.validations.name = true;
                this.validations.start = false;
            } else {
                this.validations.start = true;
            }
        }
    }
}
</script>

<style scoped>
    .justify-content-between {
        display: flex;
        justify-content: space-between !important;
    }

    #user-score, #username, #select-grid-type {
        background-color: #F7F9FA;
        border-bottom: 2px solid #e5e5e5;
        border-radius: 10px;
    }

    #user-score {
        width: 215px;
        height: 60px;
        line-height: 60px;
        margin: 20px 0px 0px 0px;
        padding: 0px 20px;
        font-size: 24px;
        font-weight: 100;
        color:#91949F
    }

    #user-score span:nth-last-child(1) {
        font-weight: bold;
        color:#5D6980;
        text-shadow: -1px 3px 3px #5D6980;
    }

    #username, #select-grid-type select {
        width: 393px;
        height: 60px;
    }

    #username {
        line-height: 60px;
        text-indent: 25px;
        color:#91949F;
        font-size: 24px;
    }

    #username input[type="text"] {
        color: #5D6980;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: 24px;
        font-weight: 600;
        width: 159px;
        padding-right: 15px;
    }

    #select-grid-type select {
        outline: none;
        border: none;
        font-size: 24px;
        color:#5D6980;
        font-weight: 600;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-indent: 25px;
        position: relative;
        border-radius: 10px;
    }

    #select-grid-type {
        position: relative;
    }

    #select-grid-type::before {
        content: "";
        position: absolute;
        z-index: 1;
        right: 25px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #5D6980;
        top: 25px;
    }

    #start button {
        width: 158px;
        height: 60px;
        border-radius: 10px;
        background-color: #FF8A00;
        border-bottom: 1px solid #ffffff;
        box-shadow: 0px 2px #ff8a0096;
        outline: none;
        cursor: pointer;
        color: white;
        font-size: 24px;
    }

    .disabled-button {
       background-color: #b1b1b1 !important; 
       box-shadow: 0px 2px #90909096 !important;
       cursor: not-allowed !important;
    }

    .danger-validation {
        border: 1px solid red !important;
    }
</style>