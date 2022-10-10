<template>
  <div class="page">
    <!-- 测试分支newdev提交 and 合并至maste-->
    <el-row class="tac">
      <el-col :span="6">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>

            <el-menu-item @click="handleOpenItem(1)">脱敏、伪类</el-menu-item>
            <el-menu-item @click="handleOpenItem(2)">抽奖</el-menu-item>
            <el-menu-item @click="handleOpenItem(3)">获取本地时间</el-menu-item>

            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col :span="18">
          <HelloWorld v-if="active == 1" />
          <Lottery v-if="active == 2"/>
          <timePage v-if="active == 3"/>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import HelloWorld from './HelloWorld/HelloWorld.vue'
import Lottery from './Lottery/Lottery.vue'
import timePage from './time/time.vue'

export default {
  name: "",
  components: {
      HelloWorld,
      Lottery,
      timePage
  },
  props: {},
  data() {
    return {
      active:'1',
    };
  },
  computed: {},
  created() {},
  watch: {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpenItem(key){
      console.log('key',key);
      this.active = key
    }
  },
};
</script>

<style scoped>
.page {
  height: 100vh;
  background: #e6e7ea;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */
</style>
