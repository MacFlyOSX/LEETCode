/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

Example 1:

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.


Constraints:

m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color < 216
0 <= sr < m
0 <= sc < n
*/

const floodFill = function(image, sr, sc, color) {
    const val = image[sr][sc];
    if (val === color) return image;
    const set = new Set([sr, sc].toString());
    const stack = [[sr, sc]];
    while (stack.length) {
        const next = stack.pop();
        image[next[0]][next[1]] = color;
        const [ left, right, up, down ] = [ image[next[0]]?.[next[1] - 1], image[next[0]]?.[next[1] + 1], image[next[0] + 1]?.[next[1]], image[next[0] - 1]?.[next[1]]];
        if (left !== undefined && left === val && !set.has([next[0], next[1] - 1].toString())) {
            stack.push([next[0], next[1] - 1]);
            set.add([next[0], next[1] - 1].toString());
        }
        if (right !== undefined && right === val && !set.has([next[0], next[1] + 1].toString())) {
            stack.push([next[0], next[1] + 1]);
            set.add([next[0], next[1] + 1].toString());
        }
        if (up !== undefined && up === val && !set.has([next[0] + 1, next[1]].toString())) {
            stack.push([next[0] + 1, next[1]]);
            set.add([next[0] + 1, next[1]].toString());
        }
        if (down !== undefined && down === val && !set.has([next[0] - 1, next[1]].toString())) {
            stack.push([next[0] - 1, next[1]]);
            set.add([next[0] - 1,next[1]].toString());
        }
    }
    return image;
};
