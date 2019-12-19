const app = getApp()

Page({

  data: {
    imageUrl: 'https://image.potatofield.cn/logo.jpg',
    share: "https://image.potatofield.cn/nku100_sharepic.jpg",
  },

  onLoad: function () {
    var that = this
    wx.downloadFile({
      url: this.data.imageUrl,
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imageUrl: tempFilePath
        })
      }
    })
  },

  //头像生成器
  gotoAvatarCreator: function () {
    wx.navigateTo({
      url: '/pages/NKAvatar/NKAvatar',
    })
  },

  onShareAppMessage: function (res) {
    return {
      title: "南开百年，有我应援！",
      imageUrl: this.data.share,
      success: function (res) {
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 1500
        })
      },
      fail: function (res) {
        wx.showToast({
          title: "分享失败",
          icon: 'none',
          duration: 1500
        })
      }
    }
  }
})