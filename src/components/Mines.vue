<template>
    <div id="mines" :class="getGridStyle">
        <div 
        class="mine" 
        v-for="(item, index) in gameBoard" 
        :key="index" 
        :class="{'danger':isShowMines ? item.mine : false, 'success':item.isOpen}"
        @click="openBox(item.mine, index)"></div>

        <div class="clearfix"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            boxes:[],
            openBoxes:[]
        }
    },
    computed:{
        gameBoard() {
            this.boxes = this.$store.getters.getGameBoard;
            return this.boxes;
        },
        isShowMines() {
            return this.$store.getters.showMines;
        },
        getUsers() {
            return this.$store.getters.getUsers;
        },
        getPlayer() {
            return this.$store.getters.getPlayer;
        },
        getGridStyle() {
            return this.$store.getters.getGridStyle;
        }
    },
    methods:{
        openBox(isBomb, index) {
            if(!isBomb) {
                if(this.openBoxes.indexOf(index) === -1 && !this.isShowMines) {
                    this.$store.dispatch('addPoint');
                    this.openBoxes.push(index);
                    this.$store.dispatch('openBox', index);
                }
            } else {
                this.$store.commit('showMines', true);
                this.openBoxes=[];

                this.$store.commit('addUser', { 
                    id:Math.floor(Math.random() * 99999), 
                    name:this.getPlayer.name, 
                    point:this.getPlayer.point 
                });
            }
        }
    }
}
</script>

<style scoped>
    .grid8x8{
        width:813px;
        margin-left: 10%;
    }
    .grid7x7{
        width:713px;
    }
    .grid6x6{
        width:613px;
    }
    .grid5x5{
        width:545px;
    }

    #mines {
        margin-top: 20px;
    }
    .mine {
        width: 91px;
        height: 91px;
        background-color: #5D6980;
        border-radius: 10px;
        box-shadow: 0px 5px #DFDFDF;
        margin: 10px 5px;
        float: left;
        cursor: pointer;
    }
    .success{
        background: url('~@/assets/check.png') no-repeat center #25A35C !important;
        background-size: contain;
    }
    .danger{
        background: url('~@/assets/mine.png') no-repeat center #FA3A3A !important;
        background-size: contain;
    }
    .clearfix{
        clear: both;
    }
</style>