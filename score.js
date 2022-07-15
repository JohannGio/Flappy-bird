let timer;
let ele = document.getElementById('timer');

(function () {
    let sec = 0;
    timer = setInterval(() =>{
        ele.innerHTML = '00:'+sec;
        sec ++;
    } , 1000)
})()