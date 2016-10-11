Page({
  data:{
    // text:"这是一个页面"
    id1 : "back",
    id2 : "clear",
    id3 : "negative",
    id4 : "÷",
    id5 : "7",
    id6 : "8",
    id7 : "9",
    id8 : "×",
    id9 : "4",
    id10 : "5",
    id11 : "6",
    id12 : "-",
    id13 : "1",
    id14 : "2",
    id15 : "3",
    id16 : "+",
    id17 : "0",
    id18 : ".",
    id19 : "history",
    id20 : "=",
    screenData : 0,
    lastIsOperate : false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  history : function(){
    wx.navigateTo({
      url : '../list/list'
    })
  },
  clickBtn : function(event){
    console.log(event.target.id);
    var id = event.target.id;
    if(id == this.data.id1){    //退格判断
      var data = this.data.screenData;
      if(data == 0){
        return;
      }
      data = data.substring(0,data.length - 1);
      if(data == "" || data == "-"){    //退格为0判断
        data = 0;
      }
      this.setData({screenData : data});
    }else if(id == this.data.id2){    //清空判断
      this.setData({screenData : "0"});
    }else if(id == this.data.id3){       //正负号
      var data = this.data.screenData;
      if(data == 0){
        return;
      }
      var firstWord = data.substring(0,1);
      if(firstWord == "-"){   //截取Data第一段判断正负
        data = data.substring(1,data.length);
      }else{
        data = "-" + data;
      }
      this.setData({screenData : data});
    }else{    //结束判断
      if(id == this.data.id4 || id == this.data.id8 || id == this.data.id12 || id == this.data.id16){   //判断最后一位是否是操作符
        if(this.data.lastIsOperate == true || this.data.screenData == 0){
          return;
        }
      }
      var sd = this.data.screenData;
      var data = sd + event.target.id;
      if(sd == 0){
        data = event.target.id;
      }
      this.setData({screenData : data});

      if(id == this.data.id4 || id == this.data.id8 || id == this.data.id12 || id == this.data.id16){   //判断操作符
        this.setData({lastIsOperate : true});
      }else{
        this.setData({lastIsOperate : false});
      }
    }
  }
})