


const insert = function(intervals, newInterval) {
    if (!intervals.length) return [newInterval];
    let sorted = false;
    let i = 0;
    while (!sorted) {
        const [ newX, newY ] = newInterval;
        let [ currX, currY ] = intervals[i];
        console.log('this is newX, newY', newX, newY)
        console.log('this is currX, currY', currX, currY)
        if (currX < newX && currY < newX) null;
        else if (currX < newX) {
            if (currY <= newX) {
                intervals[i][1] = newY;
                newInterval = intervals.splice(i + 1, 1)[0];
                i = -1;
            } else if (currY >= newY) {
                newInterval = intervals.splice(i + 1, 1)[0];
                i = -1;
            } else {
                intervals.splice(i + 1, 0, newInterval);
                sorted = true;
            }
            console.log(newInterval)
        }
        console.log('this is i', i);
        console.log('this is intervals', intervals);
        i++;
    }
    return intervals;
};


console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
