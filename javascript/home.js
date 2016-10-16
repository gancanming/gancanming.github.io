//轮播2
var aLi=document.getElementById('aa').getElementsByTagName('li');
document.getElementById('aa').appendChild(aLi[0].cloneNode(true));
var bLi=document.getElementById('bb').getElementsByTagName('li');
document.getElementById('bb').appendChild(bLi[0].cloneNode(true));
var mm=0;
document.getElementById('leftZ').onclick=function(){
    mm--;
    if(mm==-1){
        mm=aLi.length-2;
        document.getElementById('aa').style.left=-(aLi.length-1)*880+'px';
    }
    animate(document.getElementById('aa'),{left:-mm*880});
    animate(document.getElementById('bb'),{top:-mm*120})
};
document.getElementById('rightY').onclick=function(){
    mm++;
    if(mm==aLi.length){
        mm=1;
        document.getElementById('aa').style.left='0';
    }
    animate(document.getElementById('aa'),{left:-mm*880});
    animate(document.getElementById('bb'),{top:-mm*120})
};
var tim;
tim=setInterval(function(){
    mm--;
    if(mm==-1){
        mm=aLi.length-2;
        document.getElementById('aa').style.left=-(aLi.length-1)*880+'px';
    }
    animate(document.getElementById('aa'),{left:-mm*880});
},2000);
  document.getElementById('ruB').onmouseover=function(){
    clearInterval(tim);
};
  document.getElementById('ruB').onmouseout=function(){
    tim=setInterval(function(){
        mm--;
        if(mm==-1){
            mm=aLi.length-2;
            document.getElementById('aa').style.left=-(aLi.length-1)*880+'px';
        }
        animate(document.getElementById('aa'),{left:-mm*880});
    },2000);
};

//无缝轮播1
    var cur = 0;
    var allLi = document.getElementById('indexBag').getElementsByTagName('li');
    for (var i = 0; i < 3; i++) {
        document.getElementById('indexBag').appendChild(allLi[i].cloneNode(true));
    }
    var len = allLi.length;
    document.getElementById('btnRight').onclick = function () {
        cur++;
        if (cur == len - 2) {
            cur = 1;
            document.getElementById('indexBag').style.left = 0;
        }
        animate(document.getElementById('indexBag'), {left: -407 * cur});
    };
    document.getElementById('btnLeft').onclick = function () {
        cur--;
        if (cur == -1) {
            cur = len - 4;
            document.getElementById('indexBag').style.left = -407 * (len - 3) + 'px';
        }
        animate(document.getElementById('indexBag'), {left: -407 * cur});
    };
//

   //无缝轮播3
   var dLi=document.getElementById('cc').getElementsByTagName('li');
   document.getElementById('cc').appendChild(dLi[0].cloneNode(true));
    var pLi=document.getElementById('titleA-ul').getElementsByTagName('li');
    document.getElementById('titleA-ul').appendChild(pLi[0].cloneNode(true));
   var per=0;
   document.getElementById('btn-1').onclick=function() {
    per--;
    if (per == -1) {
        per = dLi.length - 2;
        document.getElementById('cc').style.left = -(dLi.length - 1) * 880 + 'px';
    }
    animate(document.getElementById('cc'), {left: -per * 880});
    animate(document.getElementById('titleA-ul'),{top:-per*200})
};
    document.getElementById('btn-2').onclick = function () {
        per++;
        if (per == dLi.length) {
            per = 1;
            document.getElementById('cc').style.left = '0';
        }
        animate(document.getElementById('cc'), {left: -per * 880});
        animate(document.getElementById('titleA-ul'),{top:-per*200})
    };
    var time ;
 time=setInterval(function(){
        per--;
        if (per == -1) {
            per = dLi.length - 2;
            document.getElementById('cc').style.left = -(dLi.length - 1) * 880 + 'px';
        }
        animate(document.getElementById('cc'), {left: -per * 880});
    }, 2000);
     document.getElementById('beiJ3').onmouseover = function () {
        clearInterval(time);
    };
    document.getElementById('beiJ3').onmouseout = function () {
        time = setInterval(function () {
            per--;
            if (per == -1) {
                per = dLi.length - 2;
                document.getElementById('cc').style.left = -(dLi.length - 1) * 880 + 'px';
            }
            animate(document.getElementById('cc'), {left: -per * 880});
        }, 2000);
    };

document.getElementById('btn-1').onmouseover = function () {
    clearInterval(time);
};
document.getElementById('btn-1').onmouseout = function () {
    time = setInterval(function () {
        per--;
        if (per == -1) {
            per = dLi.length - 2;
            document.getElementById('cc').style.left = -(dLi.length - 1) * 880 + 'px';
        }
        animate(document.getElementById('cc'), {left: -per * 880});
    }, 2000);
};
document.getElementById('btn-2').onmouseover = function () {
    clearInterval(time);
};
document.getElementById('btn-2').onmouseout = function () {
    time = setInterval(function () {
        per--;
        if (per == -1) {
            per = dLi.length - 2;
            document.getElementById('cc').style.left = -(dLi.length - 1) * 880 + 'px';
        }
        animate(document.getElementById('cc'), {left: -per * 880});
    }, 2000);
};





