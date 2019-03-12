import {
    BallModel
} from './ballModel.js';
import {
    BallView
} from './ballView.js';
import {
    BallController
} from './ballController.js';

function random(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

let $field = $('g.ball');

let modelBall = new BallModel(300, 300, 10, 10),
    viewBall = new BallView($field, modelBall),
    controllerBall = new BallController(modelBall, viewBall);

let modelBall2 = new BallModel(150, 150, 15, 10),
    viewBall2 = new BallView($field, modelBall2),
    controllerBall2 = new BallController(modelBall2, viewBall2);

viewBall.draw();
viewBall2.draw();

const MAX_RADIUS = 30;

// let timer = setInterval(() => {
    let elements = $('circle'),
        newX = random(30, 300),
        newY = random(30, 300),
        isCorrectBall = true;

    console.log(elements);

    if (elements.length) {
        elements.each(function (index, elem) {
            let x = $(elem).attr('cx'),
                y = $(elem).attr('cy'),
                distance = Math.sqrt(Math.pow((newX - x), 2) + Math.pow((newY - y), 2));

            console.log(distance);

            if (distance < 2 * MAX_RADIUS) {
                isCorrectBall = false;
            }
        });
    }

    if (isCorrectBall) {
        console.log('Draw!');
    }
// }, 5000);















let RequestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

function Tick() {

    PlanNextTick();
}

function PlanNextTick() {
    RequestAnimationFrame(Tick);
}

// PlanNextTick();





// let timer = setInterval(() => {
//     let modelBall = new BallModel(1, 10),
//         viewBall = new BallView($field, modelBall),
//         controllerBall = new BallController(modelBall, viewBall);

//     controllerBall.expandBall();
//     viewBall.draw();
// }, 1000);


// console.log(modelBall.getRadius());

// let ball = new ModelBall(10, 2),
//     speed = ball.getSpeed();

// function apearBall(ball) {

//     let circles = $('circle');

//     console.log(circles);

//     $('g.ball').append(ball.createBall());
// }

// let s = 0;

// // let timer = setInterval(() => {
// s += speed;

// console.log(ball.getY());
// ball.setRadius(s);
// // apearBall(ball);
// // }, 1000);