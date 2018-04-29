"use strict";

const wrapAnsi = require("wrap-ansi");
const cliBoxes = require("cli-boxes");
const stringLength = require("string-length");

const defaultOptions = {
  boxWidth: 30,
  spikeDirection: "right",
  spikePosition: 10,
  boxType: "round"
};

const getBox = (message, options) => {
  options = Object.assign(defaultOptions, options);
  let boxWidth = options.boxWidth;
  let spikePosition = options.spikePosition;
  const boxType = options.boxType;
  const spikeDirection = options.spikeDirection;
  // If there is only one line and char length is less than boxWidth, reduce the box width.
  if (stringLength(message) < boxWidth) boxWidth = stringLength(message) + 4;
  if (boxWidth < spikePosition) spikePosition = boxWidth / 2;

  const boxChars = cliBoxes[boxType];
  const topBorder =
    boxChars.topLeft +
    boxChars.horizontal.repeat(boxWidth - 2) +
    boxChars.topRight;
  const bottomBorder =
    boxChars.bottomLeft +
    boxChars.horizontal.repeat(boxWidth - 2) +
    boxChars.bottomRight;

  let lines = wrapAnsi(message, boxWidth - 4, { hard: true }).split(/\n/);

  // Add vertical borders and paddings
  lines = lines.map(line => {
    const rightPaddingCount = boxWidth - 4 - stringLength(line);
    const rightPadding = " ".repeat(Math.max(rightPaddingCount, 0));
    return boxChars.vertical + " " + line + " " + rightPadding + boxChars.vertical;
  });

  let result = topBorder + "\n" + lines.join("\n") + "\n" + bottomBorder;

  const spike = spikeDirection === "right" ? "\\" : "/";
  result += "\n" + " ".repeat(spikePosition) + spike;
  return result;
};

module.exports = { get: getBox };
