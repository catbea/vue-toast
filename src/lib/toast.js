import VueToastPlugin from './toast.vue'
const toastPlugin = {
  install: function(Vue) {
    Vue.component(VueToastPlugin.name, VueToastPlugin)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(toastPlugin) 
}
// 导出模块
export default toastPlugin