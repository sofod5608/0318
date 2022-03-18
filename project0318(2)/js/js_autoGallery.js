'use strict';
const gallery = document.querySelector('.gallery');
const galleryLi = document.querySelectorAll('.gallery>ul>li')

// galleryLi 각각 for,배열을 이용해서 배경이미지를 설정 하시오.

const arrBg=[];

for(let i=0;i<galleryLi.length;i++){
    arrBg.push(`url(img/sec1_${i}.jpg) no-repeat 50%/cover`)
    galleryLi[i].style.background=arrBg[i];
}


let i = -1;

function autoGallery() {

    i++;
    // 이동 기준 거리(하나의 li의 너비)
    const gap = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft;
    //gallery가 이동
    const goto = (-i * gap) + 'px';

    console.log(`i ${i}, gap ${gap}, goto ${goto}`)


    gallery.style.left = goto;
    gallery.style.transition = 'all 0.5s';

    // li의 마지막 번지를 보이고 다시 처음으로 돌아가서
    // 반복실행 조건문 설정

    // 마지막 번지?
    if(i>=galleryLi.length-1) i=-1;
}

// 3초마다 autoGallery실행 setInterval
setInterval(autoGallery, 3000);

(() => {
    autoGallery();
})();