<template>
    <div id="scoreboard" :class="getGridStyle">
        <div id="scoreboard-title">
            <h3>Top 10 Score</h3>
        </div>
        <div id="scoreboard-users">
            <div class="justify-content-between" v-for="(item, index) in scoreBoard">
                <span>{{index+1}}.Score({{ item.point }})</span>
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        scoreBoard(){
            return this.$store.getters.getUsers.sort((a,b)=>{ return a.point-b.point }).reverse().slice(0, 10);
        },
        getGridStyle() {
            return this.$store.getters.getGridStyle;
        }
    }
}
</script>

<style scoped>
    .grid8x8{
        width:100% !important;
    }
    .grid7x7{
        width:265px !important;
    }
    .grid6x6{
        width:365px !important;
    }
    .grid5x5{
        width:432px;
    }
    #scoreboard {
        width: 432px;
        height: 540px;
        margin-top: 30px;
        background: #F7F9FA;
        border-radius: 10px;
        border-bottom: 2px solid #E5E5E5;
    }
    #scoreboard-title {
        background-color: #00BCE5;
        display: flex;
        text-indent: 15px;
        color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 2px solid #E5E5E5;
    }
    #scoreboard-users {
      margin: 12px 18px;
    }
    #scoreboard-users div {
        margin-bottom: 20px;
        font-size: 20px;
        color:#91949F;
    }
    #scoreboard-users div span:nth-last-child(1) {
        color:#5D6980;
        font-weight: 600;
    }
    .justify-content-between {
        display: flex;
        justify-content: space-between !important;
    }
</style>