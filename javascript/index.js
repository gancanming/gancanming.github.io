/**
 * 公用选项卡 
 */
window.onload = function () {
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var xxk = document.getElementById('xxk');
    var xxk1 = document.getElementById('xxk1');
    var xxk2 = document.getElementById('xxk2');
    xxk1.style.display = 'none';
    xxk2.style.display = 'none';
    one.onmouseover = function () {
        xxk1.style.display = 'none';
        xxk2.style.display = 'none';
        xxk.style.display = 'block';
    };
    two.onmouseover = function () {
        xxk.style.display = 'none';
        xxk1.style.display = 'block';
        xxk2.style.display = 'none';
    };
    three.onmouseover = function () {
        xxk.style.display = 'none';
        xxk2.style.display = 'block';
        xxk1.style.display = 'none';
    };

};
