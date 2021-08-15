App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    if (!wx.cloud) {
      console.error("云开发能力需要基础版本号2.2.3以上")
    } else {
      // 全局初始化一次云环境
      wx.cloud.init({
        // 云开发环境的环境id
        env: "test-h9tup",
        traceUser: true
      })
    }
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }
})