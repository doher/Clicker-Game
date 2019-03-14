import { BallModel } from './ballModel.js';
import { BallView } from './ballView.js';
import { BallController } from './ballController.js';

function randomCoords(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

let ballArray = [],
    $field = $('g.ball'),
    x = randomCoords(30, 300),
    y = randomCoords(30, 300);

let ballModel = new BallModel(x, y),
    ballView = new BallView(),
    ballController = new BallController();

ballArray.push(ballModel);

ballModel.start(ballView);
ballView.start(ballArray, $field);
ballController.start(ballArray);

function addBall() {
    let x = randomCoords(30, 300),
        y = randomCoords(30, 300),
        ballModel = new BallModel(x, y);

    ballArray.push(ballModel);

    ballModel.start(ballView);
    ballView.start(ballArray, $field);
    ballController.start(ballArray);
}

addBall();
addBall();
addBall();
addBall();

console.log(ballArray);

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
