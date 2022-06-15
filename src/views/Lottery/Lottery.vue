<template>
  <div>
    <img src="../../assets/logo.png" class="img" alt="" ref="turntable" />
    <div class="box" @click="go">点击</div>

  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      isGo: false, //是否正在执行动画
      oTurntable: "", //执行动画的对象
      randomDeg: 0, //即将旋转的度数
      lastDeg: 0, //上一次旋转的度数
      goTimes: 2, //抽奖次数
    };
  },
  computed: {},
  created() {},
  watch: {},
  mounted() {
    this.oTurntable = this.$refs.turntable;
  },
  methods: {
    go() {
      if (!this.isGo && this.goTimes > 0) {
        this.getNumber();
      } else if (!this.isGo && this.goTimes <= 0) {
        alert("抱歉您的抽奖次数用完了");
      } else return; //表明正在抽奖，未结束 点击无效
    },
    getRandom(n, m) {
      //该方法产生[n,m]之间随机数
      let result = Math.floor(Math.floor(Math.random() * (m - n + 1) + n));
      return result;
    },
    getNumber() {
      /*  
        调整中奖概率(让每次旋转前指针都在初始位置，这样才准确)
        想转到第一项，需要转：360/7*0 + 360/7/2;   --->该项为超级大奖奖项
        想转到第二项，需要转：360/7*1 + 360/7/2;
        想转到第三项，需要转：360/7*2 + 360/7/2;
        想转到第四项，需要转：360/7*3 + 360/7/2;
        想转到第五项，需要转：360/7*4 + 360/7/2;
        想转到第六项，需要转：360/7*5 + 360/7/2;
        想转到第七项，需要转：360/7*6 + 360/7/2;   --->该项为未中奖项
      */
      let number = this.getRandom(0, 100);
      let caseNum = "";
      if (number === 0) {
        caseNum = 0; //粗略概率为1%
      } else if (number > 0 && number < 5) {
        caseNum = 1; //粗略概率为5%
      } else if (number >= 5 && number < 10) {
        caseNum = 2; //粗略概率为5%
      } else if (number >= 10 && number < 15) {
        caseNum = 3; //粗略概率为5%
      } else if (number >= 15 && number < 20) {
        caseNum = 4; //粗略概率为5%
      } else if (number >= 20 && number < 25) {
        caseNum = 5; //粗略概率为5%
      } else {
        caseNum = 6; //粗略概率为75%
      }
      switch (caseNum) {
        case 0:
          this.ratating((360 / 7) * 0 + 360 / 7 / 2, "5");
          break;
        case 1:
          this.ratating((360 / 7) * 1 + 360 / 7 / 2, "1");
          break;
        case 2:
          this.ratating((360 / 7) * 2 + 360 / 7 / 2, "4");
          break;
        case 3:
          this.ratating((360 / 7) * 3 + 360 / 7 / 2, "1");
          break;
        case 4:
          this.ratating((360 / 7) * 4 + 360 / 7 / 2, "2");
          break;
        case 5:
          this.ratating((360 / 7) * 5 + 360 / 7 / 2, "3");
          break;
        default:
          this.ratating((360 / 7) * 6 + 360 / 7 / 2, "1");
          break;
      }
    },
    ratating(deg, text) {
      this.goTimes--;
      this.isGo = true;
      let times = this.getRandom(3, 6); //圈数(从用户体验角度考虑，设计随机转3-6圈。最少3圈，最多6圈)

      this.randomDeg = deg + 360 * times; //记录这次要旋转的度数(传来的度数+圈数)
      let realDeg = 360 - (this.lastDeg % 360) + this.lastDeg + this.randomDeg;
      /*上次指针离初始状态的度数 + 上次的度数 + 这次要旋转的度数
      (这样的目的是为了每次旋转都从原点开始，保证数据准确)*/
      this.oTurntable.style.transform = `rotate(${realDeg}deg)`;
      setTimeout(() => {
        this.isGo = false;
        console.log(`以原点为基准共旋转了${this.randomDeg}度,
        			以一圈为基准相对旋转了${this.randomDeg % 360}度,最终结果为${text}`);
        this.lastDeg = realDeg; //把这次度数存储起来，方便下一次获取
      }, 4000); //4000ms为css里面写的执行动画的时间
    },
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 50px;
  border: 1px solid red;
}

.img {
  width: 150px;
  height: 150px;
  border: 1px solid #000;
  transition: all 4s;
}
</style>
