//拿到数据库的引用
const db = wx.cloud.database();
// 获取到集合的引用
const userinfo = db.collection("userinfo");
var that;

// pages/get/get.js
Page({
/**
   * 页面的初始数据
   */
  data: {
  },
  // 自定义获取数据库数据的方法
  getdb: function () {
    // 使用查询指令时，要先获取指令的对象
    const _ =db.command;
    // 获取集合里面的所有数据
    userinfo.where({
      age:_.lt("23")
    }).get({
      success: res => {
        console.log(res.data);
        that.setData({
          detail:res.data
        })
      }, fail: err => {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 that=this;

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