'use strict';
const wrapAnsi = require('wrap-ansi');
const cliBoxes = require('cli-boxes');

const BOX_WIDTH = 30;

const getBox = (message, options) => {
  const boxWidth = options && options.boxWidth || BOX_WIDTH;
  const boxChars = cliBoxes.round;
  const topBorder = boxChars.topLeft + boxChars.horizontal.repeat(boxWidth - 2) + boxChars.topRight;
  const bottomBorder = boxChars.bottomLeft + boxChars.horizontal.repeat(boxWidth - 2) + boxChars.bottomRight;

  let lines = wrapAnsi(message, boxWidth - 4, {hard: true}).split(/\n/);

  // Add vertical borders and paddings
  lines = lines.map(line => {
    const rightPaddingCount = boxWidth - 4 - line.length;
    const rightPadding = ' '.repeat(rightPaddingCount);
    return boxChars.vertical + ' ' + line + ' ' + rightPadding + boxChars.vertical;
  });

  const result = topBorder + '\n' + lines.join('\n') + '\n' + bottomBorder;
  return result;
}

module.exports = { get: getBox }
