'use strict';
//Написать функцию, которая принимает два числа и возращает результат их умножения



const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

function hex2rgb(c) {
    var bigint = parseInt(c.split('#')[1], 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return `rgb(${r}, ${g}, ${b}, ${opasity})`;
}

let fz = parseFloat(getComputedStyle(document.querySelector(`h1`)).fontSize);
    console.log(fz);
    let osX;
    let osY;
    let fade;
    let opasity;
    const titleH1 = $(`.generator__title h1`);
    let color = $(`.color`).val();




$(`.range`).on(`input`,function(e){
    const length = e.target.closest(`.range`);
    if(!length) return;


    

       fz = +$(`.generator__fz`).val();
        osX = +$(`.generator__osX`).val();
        osY = +$(`.generator__osY`).val();
        fade = +$(`.generator__fade`).val();
        opasity = +$(`.generator__opasity`).val();
        titleH1.css({
            'font-size':`${fz}px`,
            'text-shadow':`${fz*osX}px ${fz*osY}px ${fz*fade}px ${color}`,
            'opacity':`${opasity}`,
            
        });


        
        $(`.textar1`).text(
`background-color:${color};
opasity:${opasity};
font-size:${fz}px;
`); 
        $(`.textar2`).text(
`text-shadow: ${(Math.ceil(fz*osX*100))/100}px ${(Math.ceil(fz*osY*100))/100}px ${(Math.ceil(fz*fade*100))/100}px ${hex2rgb(color)};
font-size:${fz}px;
`); 

});
$(`.color`).on(`input`,function(e){

color = $(this).val();
       fz = +$(`.generator__fz`).val();
        osX = +$(`.generator__osX`).val();
        osY = +$(`.generator__osY`).val();
        fade = +$(`.generator__fade`).val();
        opasity = +$(`.generator__opasity`).val();
        titleH1.css({
            'font-size':`${fz}px`,
            'text-shadow':`${fz*osX}px ${fz*osY}px ${fz*fade}px ${color}`,
            'opacity':`${opasity}`,
            
                    });

                    $(`.textar1`).text(
                        `background-color:${color};
                        opasity:${opasity};
                        font-size:${fz}px;
                        `); 
                                $(`.textar2`).text(
                        `text-shadow: ${(Math.ceil(fz*osX*100))/100}px ${(Math.ceil(fz*osY*100))/100}px ${(Math.ceil(fz*fade*100))/100}px ${hex2rgb(color)};
                        font-size:${fz}px;
                        `);

});


/* generator__fz
generator__osX
generator__osY
generator__fade
generator__opasity */