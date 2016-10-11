var subjectUtil =  require('../../utils/subjectUtil.js');
Page({
  data:{
    // text:"这是一个页面"
    movies : [],
    hidden : false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadMovies();
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  loadMovies : function(){
    var page = this;
    wx.request({
      url : 'http://api.douban.com//v2/movie/top250',
      header : {
        'Content-Type': 'application/json'
      },
      success : function(res){
        console.log(res.data.subjects);
        var subjects = res.data.subjects;
        subjectUtil.processSubjects(subjects);
        page.setData({movies : subjects,hidden : true});
        console.log(page.movies);
      }
    })
  },
  detail : function(e){
    getApp().detail(e);
  }
})