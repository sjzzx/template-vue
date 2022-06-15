<template>
  <div>
      <div @click="add">大屏</div>
      <div class="name">姓名：{{name | nameSensitive}}</div>
      <!-- 伪类 -->
      <div class="box">
        <div class="angle"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      name:'张华华'
    }
  },
  methods:{
    add(){
        this.$router.push('../views/active')
      // console.log('axios',this.axios);
      // this.axios({
			// 		url: '/business/activity/listInfo',
			// 		method: 'POST',
			// 		data: {
      //         pageNum:1,
      //         pageSize:10,
			// 		},
			// 	}).then((res) => {
			// 		console.log(res);
			// 	});
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  font-size: 0.1rem;
}
/* 伪类 */
.box {
		width: 1rem;
		height: 1rem;
		position: relative;
		border: 1px solid #000;
		margin: 0 auto;
	}
	.box::before {
		content: '';
		position: absolute;
		width: 15px;
		height: 15px;
		border-top: 1px solid red;
		border-left: 1px solid red;
		top: 0px;
		left: 0px;
	}
	.box::after {
		content: '';
		position: absolute;
		width: 15px;
		height: 15px;
		border-top: 1px solid red;
		border-right: 1px solid red;
		top: 0px;
		right: 0px;
	}
	.angle {
		position: absolute;
		bottom: 15px;
		width: 100%;
	}
	.angle::before {
		content: '';
		position: absolute;
		width: 15px;
		height: 15px;
		border-left: 1px solid red;
		border-bottom: 1px solid red;
		top: 0px;
		left: 0px;
	}
	.angle::after {
		content: '';
		position: absolute;
		width: 15px;
		height: 15px;
		border-right: 1px solid red;
		border-bottom: 1px solid red;
		top: 0px;
		right: 0px;
	}
</style>
