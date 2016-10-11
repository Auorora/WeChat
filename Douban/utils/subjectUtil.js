function processSubject(subject){
    var title = subject.title;      //片名
    var year = subject.year;        //年份
    var directors = subject.directors;    //导演
    var directorStr = "";
    for(var index in directors){      
      directorStr = directorStr + directors[index].name + " / ";
    }
    if(directorStr != ""){
      directorStr = directorStr.substring(0,directorStr.length - 2);
    }

    var casts = subject.casts;        //演员
    var castStr = "";
    for(var index in casts){
      castStr = castStr + casts[index].name + " / ";
    }
    if(castStr != ""){
      castStr = castStr.substring(0,castStr.length - 2);
    }

    var genres = subject.genres;       //类型
    var genreStr = "";
    for(var index in genres){
      genreStr = genreStr + genres[index] + " / ";
    }
    if(genreStr != ""){
      genreStr = genreStr.substring(0,genreStr.length - 2);
    }

    var text = "片名：" + title + "\n导演：" + directorStr + "\n演员：" + castStr + "\n类型：" + genreStr + "\n年份：" + year;
    subject.text = text;

  }

 function processSubjects(subjects){
    for(var i = 0 ; i < subjects.length ; i++){
      var subject = subjects[i];
      this.processSubject(subject);
    }
  }

module.exports = {          //模块导出
    processSubject : processSubject,
    processSubjects : processSubjects
}