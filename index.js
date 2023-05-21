

// let currentPos = 0;
// let targetPos = 0;

// let obj = document.getElementById('skills');
// obj.addEventListener('click',function () {

//     targetPos = 600;

//     let scrollInterval = setInterval(function () {
//         if (currentPos == targetPos) {
//             clearInterval(scrollInterval);
//         }
//         currentPos += 50;
//         window.scrollBy(0, 50);
//     }, 50);

//     currentPos = 0;

// });









// let obj1 = document.getElementById('about');
// obj1.addEventListener('click', function scroller() {

//     targetPos = 100;

//     let scrollInterval = setInterval(function () {
//         if (currentPos == targetPos) {
//             clearInterval(scrollInterval);
//         }
//         currentPos += 50;
//         window.scrollBy(0, 50);
//     }, 50);

//     currentPos = 0;

// });

// let obj2 = document.getElementById('education');
// obj2.addEventListener('click', function scroller() {

//     targetPos = 1900;

//     let scrollInterval = setInterval(function () {
//         if (currentPos == targetPos) {
//             clearInterval(scrollInterval);
//         }
//         currentPos += 50;
//         window.scrollBy(0, 50);
//     }, 50);

//     currentPos = 0;

// });


// let obj3 = document.getElementById('experience');
// obj3.addEventListener('click', function scroller() {

//     targetPos = 1050    ;

//     let scrollInterval = setInterval(function () {
//         if (currentPos == targetPos) {
//             clearInterval(scrollInterval);
//         }
//         currentPos += 50;
//         window.scrollBy(0, 50);
//     }, 50);

//     currentPos = 0;

// });



// let obj4 = document.getElementById('contacts');
// obj4.addEventListener('click', function scroller() {

//     targetPos = 4000;

//     let scrollInterval = setInterval(function () {
//         if (currentPos == targetPos) {
//             clearInterval(scrollInterval);
//         }
//         currentPos += 50;
//         window.scrollBy(0, 50);
//     }, 50);

//     currentPos = 0;

// });


// let obj5 = document.getElementById('portfolio');

// obj5.addEventListener('click', function scroller() {

//     targetPos = 2700;

//     let scrollInterval = setInterval(function () {
//         if (currentPos == targetPos) {
//             clearInterval(scrollInterval);
//         }
//         currentPos += 50;
//         window.scrollBy(0, 50);
//     }, 50);

//     currentPos = 0;

// });





//smart Approach as follows

var menuAchorTags = document.querySelectorAll('.horizontal-list a');
var interval;
// console.log(menuAchorTags);
for (var i = 0; i < menuAchorTags.length; i++) {
    menuAchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();// to remove existing effect or default effect

        var targetSectionId = this.textContent.trim().toLowerCase();
        console.log(targetSectionId);

        var targetSection = document.getElementById(targetSectionId);

        // interval = setInterval(scrollVertically, 20,targetSection);
        //OR
        interval = setInterval(function () {
            scrollVertically(targetSection)
        }, 20);

    });

}

function scrollVertically(targetSection) {

    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    // console.log(targetSectionCoordinates)
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }

    window.scrollBy(0, 50);
}






//Skill Bar Logic

//Handle Scroll Event on Window
//Check that skills section container is visible or not
//ensure that initial width of coloured divs is zero
//start animation on every skill -->increase skill width 0 to 100
//store skill level with the help data attribute


var progressBars = document.querySelectorAll('.skill-progress>div');
var skillContainer = document.getElementsByClassName('skills-container');
var animationDone = false;
document.addEventListener('scroll', checkScroll);

// function initializeBars() {
//     for (let bar of progressBars) {
//         bar.style.width = "0%";
//     }
// }
// initializeBars();
// function fillBars() {


//     for (let bar of progressBars) {
//         var initial_width = 0;
//         let targetWidth = bar.getAttribute('data-bar-width');

//         var interval = setInterval(function () {

//             if(initial_width>targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             initial_width++;
//             bar.style.width=initial_width+'%';
//         }, 50);
//     }

// }
function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}

function fillBar(bar) {
    var initial_width = 0;
    // console.log(bar);
    let targetWidth = bar.getAttribute('data-bar-width');

    var interval = setInterval(function () {

        if (initial_width > targetWidth) {
            clearInterval(interval);
            return;
        }
        initial_width++;
        bar.style.width = initial_width + '%';
    }, 3);

}
function checkScroll() {
    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        console.log(barCoordinates)
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}










