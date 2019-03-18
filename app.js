'use strict';

import {
    BallModel
} from './ballModel.js';
import {
    BallView
} from './ballView.js';
import {
    BallController,
    MAX_RADIUS
} from './ballController.js';

function randomCoords(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

let $field = $('.game-field'),
    $svg = $('g.ball'),
    controllerArray = [],
    modelArray = [];

function addBall(field) {
    let height = field.height(),
        width = field.width(),
        x = randomCoords(MAX_RADIUS, width - MAX_RADIUS),
        y = randomCoords(MAX_RADIUS, height - MAX_RADIUS),
        isIncorrect = false;

    if (controllerArray.length) {

        $svg.children().each(function (i, item) {
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
        return addBall($field);
    }

    let model = new BallModel(x, y),
        view = new BallView(),
        controller = new BallController();

    model.start(view);
    view.start(model, $svg);
    controller.start(model);

    controllerArray.push(controller);
    modelArray.push(model);
}

addBall($field);
addBall($field);

let start = Date.now(),
    playTime = 60000,
    score = 0;

function handler(eo) {
    let item = eo.target;

    score -= 100;

    if ($(item).attr('r')) {
        $(item).remove();
        score += 600;
        addBall($field);
    }
};

$field.on('click', handler);

let timer = setInterval(() => {
    let timePassed = Date.now() - start;

    if (timePassed >= playTime) {
        clearInterval(timer);
        $field.off('click', handler);
        return;
    }

    addBall($field);
}, 5000);

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

    controllerArray.forEach((item) => {
        item.expandBall();
    });

    modelArray = modelArray.filter((item) => {

        if (item.getRadius() > 0) {
            return item;
        }

        score -= 300;
    });

    PlanNextTick();
}

function PlanNextTick() {
    let timePassed = Date.now() - start;

    if (timePassed < playTime) {
        RequestAnimationFrame(Tick);
    }
}

PlanNextTick();