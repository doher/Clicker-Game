import { BallModel } from './ballModel.js';
import { BallView } from './ballView.js';
import { BallController } from './ballController.js';

function randomCoords(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

let x = randomCoords(30, 300),
    y = randomCoords(30, 300);

let ballModel = new BallModel(x, y, 1, 0.6),
    ballView = new BallView(),
    ballController = new BallController(),
    $field = $('g.ball'),
    ballArray = [ballModel];

ballModel.start(ballView);
ballView.start(ballArray, $field);
ballController.start(ballArray);

// let timer = setInterval(() => {
//     let x = randomCoords(30, 300),
//         y = randomCoords(30, 300);

//     let model = new BallModel(x, y, 1, 0.6);

//     ballArray.push(model);

//     ballModel.start(ballView);
//     ballView.start(ballArray, $field);
//     ballController.start(ballArray);
// }, 2000);



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
    ballController.expandBall();
    PlanNextTick();
}

function PlanNextTick() {
    RequestAnimationFrame(Tick);
}

PlanNextTick();
