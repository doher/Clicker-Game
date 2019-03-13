import { BallModel } from './ballModel.js';
import { BallView } from './ballView.js';
import { BallController } from './ballController.js';

let ballModel1 = new BallModel(300, 300, 1, 0.3),
    ballModel2 = new BallModel(390, 390, 10, 1),
    ballView = new BallView(),
    ballController = new BallController(),
    $field = $('g.ball');

ballModel1.start(ballView);
ballModel2.start(ballView);
ballView.start([ballModel1, ballModel2], $field);
ballController.start([ballModel1, ballModel2]);

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