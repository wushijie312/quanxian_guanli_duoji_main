
<template>
  <div class="nav_list">
    home
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: []
    };
  },
  created() {
   
  },
  methods: {
    goPage(item) {
      // 只有一级菜单
      if (item.component) {
        this.$router.push(item.path);
      } else {
        // 二级菜单的数据结构中只在children中有path
        this.$router.push(item.children[0]["path"]);
      }
    }
  }
};
</script>