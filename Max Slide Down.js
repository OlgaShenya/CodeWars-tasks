function longestSlideDown (pyramid) {
      let prevRow = pyramid[0];
    for (let i = 1; i < pyramid.length; i++) {
        let row = pyramid[i].slice();
        for (let j = 0; j < row.length; j++) {
            row[j] += Math.max((prevRow[j - 1] || 0), (prevRow[j] || 0));
        }
        console.log(row);
        prevRow = row;
    }
    return Math.max(...prevRow);
}