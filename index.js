// var title = document.getElementById("title");

var title = document.querySelector("h1");

title.style.color = 'blue';
title.style.textDecoration = 'underline';
title.style.margin = '20px 20px 10px 10px';

// var ul = document.querySelectorAll('ul');


// var button = document.querySelector('button').style.marginLeft = '12px';

var buttons = document.querySelectorAll('button');
for(var button of buttons){
    button.style.marginLeft = '12px';
}

// function foo() {
//     var article = document.querySelector('input').value;
//     ul.appendChild(`<li>${article}<button>-</button><span>10</span><button>+</button></li>`);

//     // var article = document.createElement('Input').value;
//     // article.setAttribute('type', 'button');
//     // article.setAttribute('value', 'button');
//     // article.setAttribute('name', 'button');

//     // var ul = document.createElement('ul');
//     // ul.appendChild(document.createTextNode(`<li>${article}<button>-</button><span>10</span><button>+</button></li>`));
//     // ul.appendChild(article);
// }

document.querySelector('#push').onclick = function() {
    if(document.querySelector('input').value.length == 0) {
        alert('Entrer un article svp !!');
    } else {
        document.querySelector('ul').innerHTML
        += `<li>${document.querySelector('input').value}<button style="margin-left: 12px;" onClick="allClick(-1)">-</button><span id="allClicks">0</span><button onClick="allClick(1)" style="margin-left: 12px;">+</button></li><hr>`;
    }
}

function allClick(click) {
    const allClicks = document.getElementById('allClicks');
    const sum = parseInt(allClicks.innerText) + click;
    console.log(sum + click);
    allClicks.innerText = sum;

}

function allClick_one(click_one) {
    const allClicks = document.getElementById('allClicks_one');
    const sum = parseInt(allClicks.innerText) + click_one;
    console.log(sum + click_one);
    allClicks_one.innerText = sum;

}

function allClick_two(click_two) {
    const allClicks = document.getElementById('allClicks_two');
    const sum = parseInt(allClicks.innerText) + click_two;
    console.log(sum + click_two);
    allClicks.innerText = sum;

}

function allClick_three(click_three) {
    const allClicks = document.getElementById('allClicks_three');
    const sum = parseInt(allClicks.innerText) + click_three;
    console.log(sum + click_three);
    allClicks.innerText = sum;

}

function allClick_four(click_four) {
    const allClicks = document.getElementById('allClicks_four');
    const sum = parseInt(allClicks.innerText) + click_four;
    console.log(sum + click_four);
    allClicks.innerText = sum;

}










// var ul2 =  document.getElementsByTagName('ul li');
// console.log(ul2);
// console.log(ul);

