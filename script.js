var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var square1 = document.getElementsByClassName('square')[0];
var square2 = document.getElementsByClassName('square')[1];
const containerDiv = document.getElementById('container');
const favDialog = document.getElementById('favDialog');

// update position of square 1 and square 2 when scroll event fires.
document.body.addEventListener('touchmove', triggerScroll)
window.addEventListener('scroll', function () {
    triggerScroll()
});
function triggerScroll() {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop / scrollArea || 0;
    // console.log(parseInt(square2.style.right));
    // console.log(parseInt(square1.style.left));
    let rect = square1.getBoundingClientRect();
    let rect2 = square2.getBoundingClientRect();
    // console.log(rect.x);
    // console.log(rect2.bottom);
    console.log(window.pageYOffset == 0);
    if (window.pageYOffset == 0) {
        square1.style.left = -451 + "px";
    } else {
        square1.style.left = scrollPercent * window.innerWidth + 'px';
        square1.style.top = scrollPercent * window.innerWidth + 'px';
        square2.style.right = scrollPercent * window.innerWidth + 'px';
        square2.style.top = scrollPercent * window.innerWidth + 'px';
    }

    // if(rect.left <rect2.right){

    // }

    calculateDistance(rect, rect2)


    // //   square2.style.left = 10 - scrollPercent*window.innerWidth*0.6 + 'px';
}
function calculateDistance(div1rect, div2rect) {
    var div1x = div1rect.left + div1rect.width / 2;
    var div1y = div1rect.top + div1rect.height / 2;

    // get div2's center point
    var div2x = div2rect.left + div2rect.width / 2;
    var div2y = div2rect.top + div2rect.height / 2;

    // calculate the distance using the Pythagorean Theorem (a^2 + b^2 = c^2)
    var distanceSquared = Math.pow(div1x - div2x, 2) + Math.pow(div1y - div2y, 2);
    var distance = Math.sqrt(distanceSquared);
    const containerStyles = {
        "background-repeat": 'no-repeat',
        // top:0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // position: 'absolute',
        // margin: 'auto'

    }
    const imagePath = '/final_image.png'
    if (distance < 370) {
        // console.log(true)
        document.getElementById('final-image').style.display = "block";
        square1.style.visibility = 'hidden';
        square2.style.visibility = 'hidden';
        // document.getElementById("containerDiv").style.overflowY = "hidden";

        try {
            favDialog.showModal();
            document.getElementsByTagName("body")[0].style.overflowY = "hidden";

        } catch (error) {
            // console.log('modal opened')
            // console.log(favDialog);
        }


    } else {
        console.log(distance);
        square1.style.visibility = 'visible';
        square2.style.visibility = 'visible';
        // document.getElementById('final-image').style.display = "none";
        // document.getElementById("containerDiv").style.overflowY = "scroll";

        try {
            // favDialog.close();
        } catch (error) {
            // console.log('modal opened')
            console.log(distance);
        }
    }
}
window.onload = () => {
    document.querySelector("button").addEventListener("click", function (e) {
        console.log(e);
        party.confetti(this);
    });
    document.querySelector(".cls-btn").addEventListener("click", function (e) {
        document.getElementsByTagName("body")[0].scrollTop;
        location.reload()
    });
}

// document.getElementById('thankYou').addEventListener('click',()=>{
//     party.confetti(this);

//     // document.getElementsByTagName("body")[0].scrollTop;
//     // location.reload()
// })