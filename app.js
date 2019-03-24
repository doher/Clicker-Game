'use strict';

import { startGame } from './game.js';

$('body').click(function (eo) {
    eo.preventDefault();

    let item = $('.start-game');

    if (item) {
        fieldGame();
    }
});

function fieldGame() {
    location.hash = 'field';
}

window.onhashchange = loadNewPage;

loadNewPage();

function loadNewPage() {
    let hash = location.hash.substr(1);

    switch (hash) {
        case 'field':
            loadGamePage();
            break;

        default:
            loadMainPage();
            break;
    }
}

function loadMainPage() {
    $.ajax('main.html', {
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            $('.main-content').html(data);
        }
    });
}

function loadGamePage() {
    $.ajax('field.html', {
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            $('.main-content').html(data);
            startGame();
        }
    });
}

