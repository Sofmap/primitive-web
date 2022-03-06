var Links = {
  setColor : function LinksSetColor(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i <  alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    // jQuery에서 css를 불러옴
    $('a').css('color', color);
  }
}
var Body = {
  setColor : function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor : function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightdayhandler (self) {
  var target = document.querySelector('body');
  if(self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('skyblue')
  }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night'

    Links.setColor('black')
  }
