/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    // initalize variables
    let pathInfo = [], row = 0, col = 0;
    let right = 1, down = 0, left = 0, up = 0;
    let pathLength = matrix.length * matrix[0].length;

    // begin spiral looper
    while (true) {

        // if you are moving right
        // then check if you can continue moving right
        if (right === 1) {

            // if this is the first time you've been in this location
            // then add your location to the path information
            if (matrix[row][col] !== "x") {

                // add your current location to the path information
                pathInfo.push(matrix[row][col]);

                // place an x in your current location
                matrix[row][col] = "x";
            }

            // if you can continue moving right
            // then move right
            if (col + 1 < matrix[0].length && matrix[row][col + 1] !== "x") {
                col += 1;
            }

            // else you've reached a dead end
            // then begin moving down
            else {
                right = 0;
                down = 1;
            }
        }

        // if you are moving down
        // then check if you can continue moving down
        if (down === 1) {

            // if this is the first time you've been in this location
            // then add your location to the path information
            if (matrix[row][col] !== "x") {

                // add your current location to the path information
                pathInfo.push(matrix[row][col]);

                // place an x in your current location
                matrix[row][col] = "x";
            }

            // if you can continue moving down
            // then move down
            if (row + 1 < matrix.length && matrix[row + 1][col] !== "x") {
                row += 1;
            }

            // else you've reached a dead end
            // then begin moving left
            else {
                down = 0;
                left = 1;
            }
        }

        // if you are moving left
        // then check if you can continue moving left
        if (left === 1) {

            // if this is the first time you've been in this location
            // then add your location to the path information
            if (matrix[row][col] !== "x") {

                // add your current location to the path information
                pathInfo.push(matrix[row][col]);

                // place an x in your current location
                matrix[row][col] = "x";
            }

            // if you can continue moving left
            // then move left
            if (col - 1 >= 0 && matrix[row][col - 1] !== "x") {
                col -= 1;
            }

            // else you've reached a dead end
            // then begin moving up
            else {
                left = 0;
                up = 1;
            }
        }

        // if you are moving up
        // then check if you can continue moving up
        if (up === 1) {

            // if this is the first time you've been in this location
            // then add your location to the path information
            if (matrix[row][col] !== "x") {

                // add your current location to the path information
                pathInfo.push(matrix[row][col]);

                // place an x in your current location
                matrix[row][col] = "x";
            }

            // else if you can continue moving up
            // then move up
            if (row - 1 >= 0 && matrix[row - 1][col] !== "x") {
                row -= 1;
            }

            // else you've reached a dead end
            // then begin moving right
            else {
                up = 0;
                right = 1;
            }
        }

        // if the path has ended
        // then return the path information
        if (pathInfo.length === pathLength) {
            return pathInfo;
        }
    }
};