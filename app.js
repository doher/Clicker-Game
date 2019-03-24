'use strict';

import { startGame, saveBestScore } from './game.js';

$('body').click(function (eo) {
    eo.preventDefault();

    let item = eo.target;

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
            $('.heading').append('<h2 class="timer">3</h2>');
            saveBestScore();
            let count = 3,
                counter = setInterval(function timer() {
                    count = count - 1;

                    if (count <= 0) {
                        clearInterval(counter);
                        startGame();
                        $('.timer').remove();
                        return;
                    }
                    $('.timer').text(count);
                }, 1000);
        }
    });
}



