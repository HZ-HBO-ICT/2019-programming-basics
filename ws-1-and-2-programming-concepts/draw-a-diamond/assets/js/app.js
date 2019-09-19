/* declaring variables */
const playground = document.getElementById("playground");
const ctx = playground.getContext("2d");
const startingCoordinates = {
    xPos: 0,
    yPos: 150
}
drawDiamond(8);

/**
 * function to draw a diamond
 * @param {*} maxSides - number of sides the diamon has (always 4, 8, 16 etc)
 */
function drawDiamond(maxSides = 4) {
    const coordinates = creatingCoordinates(maxSides);
    for (let i = 0; i < coordinates.length; i++) {
        let startPos = {
                xPos: coordinates[i].xPos,
                yPos: coordinates[i].yPos
            },
            endPos = {};

        if (i < coordinates.length - 1) {
            endPos = {
                xPos: coordinates[i + 1].xPos,
                yPos: coordinates[i + 1].yPos
            };
        } else {

            endPos = {
                xPos: coordinates[0].xPos,
                yPos: coordinates[0].yPos
            };

        }

        drawSide(startPos, endPos, "#F00");

    }
}

/**
 * Function to draw a side of a diamond
 * @param {*} startPos - starting position of a line
 * @param {*} endPos - ending position of a line
 * @param {*} color - color of a line
 */
function drawSide(startPos, endPos, color) {
    ctx.beginPath();
    ctx.moveTo(startPos.xPos, startPos.yPos);
    ctx.lineTo(endPos.xPos, endPos.yPos);
    ctx.strokeStyle = color;
    ctx.stroke();
}

/**
 * Function to create points based on coordinates to draw lines between
 * @param {*} maxSide - number of sides the diamond has
 * @returns {*} coordinates - returns an arry with coordinates 
 */
function creatingCoordinates(maxSide) {
    let coordinates = [];
    if (maxSide == 4) {
        coordinates.push({
            xPos: startingCoordinates.xPos,
            yPos: startingCoordinates.yPos
        });
        coordinates.push({
            xPos: startingCoordinates.yPos,
            yPos: startingCoordinates.xPos
        });
        coordinates.push({
            xPos: startingCoordinates.yPos * 2,
            yPos: startingCoordinates.yPos
        });
        coordinates.push({
            xPos: startingCoordinates.yPos,
            yPos: startingCoordinates.yPos * 2
        });
    }
    if (maxSide == 8) {
        coordinates = [{
                xPos: 0,
                yPos: 150
            },
            {
                xPos: 50,
                yPos: 50
            },
            {
                xPos: 150,
                yPos: 0
            },
            {
                xPos: 250,
                yPos: 50
            },
            {
                xPos: 300,
                yPos: 150
            },
            {
                xPos: 250,
                yPos: 250
            },
            {
                xPos: 150,
                yPos: 300
            },
            {
                xPos: 50,
                yPos: 250
            }

        ]
    }
    return coordinates;
}