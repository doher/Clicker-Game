import { BallModel } from './ballModel.js';
import { BallView } from './ballView.js';
import { BallController } from './ballController.js';

function randomCoords(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

let $field = $('g.ball'),
    array = [];

function addBall() {
    let x = randomCoords(30, 300),
        y = randomCoords(30, 300),
        model = new BallModel(x, y),
        view = new BallView(),
        controller = new BallController();

    model.start(view);
    view.start(model, $field);
    controller.start(model);

    array.push(controller);
}

addBall();
addBall();

let timer = setInterval(() => {
    addBall();
}, 6000);

$field.click(function (eo) {
    let item = eo.target;

    if ($(item).attr('r')) {
        $(item).remove();
        addBall();
    }
});

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

    array.forEach((item) => {
        item.expandBall();
    });

    PlanNextTick();
}

function PlanNextTick() {
    RequestAnimationFrame(Tick);
}

PlanNextTick();
