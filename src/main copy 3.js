import Vue from 'vue'
import App from './App.vue'
import router from './router'
import menus from './router/component'
import store from './store'

Vue.config.productionTip = false

// 模拟通过接口返回的数据 false为有这个权限，true则没有这个权限，false可以不写‘"/splashAdverse":false,’删除也行，直接写true的即可
let menuDatas = {
  "errno": 0,
  "errmsg": "获取权限成功",
  "result": {
    "/gyspz": true,
    "/gyszh/accountedit": true,
    "/gyszh/invitationcode": true,
    "/gyszh/accountregister": true,
    "/gyszh/invitationcodeview": true,
  }
}

const formatRoutes = function (routes, routeData) {
  let lists = digui(routes, routeData.children);
  routeData.children  = lists;
  return routeData;
};
function digui(routes, child) {
  if (child.length) {
    for (var i = 0; i < child.length; i++) {
      var item = child[i];
      if (routes[item.path]) {
        child.splice(i, 1);
        i--;
        continue;
      }
      if (item.children && item.children.length) {
        digui(routes, item.children);
      }
    }
  }
  return child;
}
router.beforeEach((to, from, next) => {
  const routeData = formatRoutes(menuDatas.result, menus.menus);
  // var getRouter = resourceApp.router.concat(routeData);
  router.options.routes.push(routeData);
  router.addRoutes([routeData]);
  console.log(router);

  next();
})
new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    // let islogin=localStorage.getItem('islogin');
    // if(!islogin){
    //   return this.$router.push({path:'/login'});
    // }
  }
}).$mount('#app')
