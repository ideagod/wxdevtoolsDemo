//拿到数据库的引用
const db = wx.cloud.database();
// 获取到集合的引用
const userinfo = db.collection("userinfo");
// pages/del/del.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

delete:function(){
  userinfo.doc("2b4144565e79ba530000618c6a6337e6").remove({
   success:res =>{
     console.log("删除成功")
   }
 })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})