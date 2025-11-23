
var maxSumDivThree = function (nums) {
    const v = [[], [], []];
    for (const num of nums) {
        v[num % 3].push(num);
    }
    v[1].sort((a, b) => b - a);
    v[2].sort((a, b) => b - a);

    const tot = nums.reduce((sum, num) => sum + num, 0);
    let remove = Infinity;

    if (tot % 3 === 0) {
        remove = 0;
    } else if (tot % 3 === 1) {
        if (v[1].length >= 1) {
            remove = Math.min(remove, v[1][v[1].length - 1]);
        }
        if (v[2].length >= 2) {
            remove = Math.min(
                remove,
                v[2][v[2].length - 2] + v[2][v[2].length - 1],
            );
        }
    } else {
        if (v[1].length >= 2) {
            remove = Math.min(
                remove,
                v[1][v[1].length - 2] + v[1][v[1].length - 1],
            );
        }
        if (v[2].length >= 1) {
            remove = Math.min(remove, v[2][v[2].length - 1]);
        }
    }

    return tot - remove;
};
