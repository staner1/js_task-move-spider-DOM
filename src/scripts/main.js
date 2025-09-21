'use strict';

document.addEventListener('click', (e) => {
  if (e.target.className === 'wall') {
    const spider = document.querySelector('.spider');
    const wall = document.querySelector('.wall');

    const coordsClick = {
      x: e.clientX,
      y: e.clientY,
    };

    const wallPosition = {
      x: wall.offsetLeft,
      y: wall.offsetTop,
    };

    const wallBorders = {
      x: wall.clientLeft,
      y: wall.clientTop,
    };

    const calcedCoords = {
      x: coordsClick.x - wallPosition.x - wallBorders.x - spider.height / 2,
      y: coordsClick.y - wallPosition.y - wallBorders.y - spider.height / 2,
    };

    if (calcedCoords.x < 0) {
      calcedCoords.x = 0;
    }

    if (calcedCoords.x > wall.clientWidth - spider.width) {
      calcedCoords.x = wall.clientWidth - spider.width;
    }

    if (calcedCoords.y < 0) {
      calcedCoords.y = 0;
    }

    if (calcedCoords.y > wall.clientHeight - spider.width) {
      calcedCoords.y = wall.clientHeight - spider.width;
    }

    spider.style.top = `${calcedCoords.y}px`;
    spider.style.left = `${calcedCoords.x}px`;
  }
});
