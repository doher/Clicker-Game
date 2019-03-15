import { BallModel } from './ballModel.js';
import { BallView } from './ballView.js';
import { BallController, MAX_RADIUS } from './ballController.js';

function randomCoords(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

let $field = $('g.ball'),
    array = [];

function addBall() {
    let height = $('.field').height(),
        width = $('.field').width(),
        x = randomCoords(MAX_RADIUS, width - MAX_RADIUS),
        y = randomCoords(MAX_RADIUS, height - MAX_RADIUS),
        isIncorrect = false;

    if (array.length) {

        $field.children().each(function (i, item) {
            let cx = $(item).attr('cx'),
                cy = $(item).attr('cy'),
                distance = Math.sqrt(Math.pow((cx - x), 2) +
                    Math.pow((cy - y), 2));

            if (distance < 2 * MAX_RADIUS) {
                isIncorrect = true;
            }
        });
    }

    if (isIncorrect) {
        return addBall();
    }

    let model = new BallModel(x, y),
        view = new BallView(),
        controller = new BallController();

    model.start(view);
    view.start(model, $field);
    controller.start(model);

    array.push(controller);
}

addBall();
addBall();

let distance = 30;

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
