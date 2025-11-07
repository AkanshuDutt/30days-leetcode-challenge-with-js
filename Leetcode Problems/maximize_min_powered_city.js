var maxPower = function (stations, r, k) {
    const n = stations.length;
    const cnt = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const left = Math.max(0, i - r);
        const right = Math.min(n, i + r + 1);
        cnt[left] += stations[i];
        cnt[right] -= stations[i];
    }

    const check = (val) => {
        const diff = [...cnt];
        let sum = 0;
        let remaining = k;

        for (let i = 0; i < n; i++) {
            sum += diff[i];
            if (sum < val) {
                const add = val - sum;
                if (remaining < add) {
                    return false;
                }
                remaining -= add;
                const end = Math.min(n, i + 2 * r + 1);
                diff[end] -= add;
                sum += add;
            }
        }
        return true;
    };

    let lo = Math.min(...stations);
    let hi = stations.reduce((a, b) => a + b, 0) + k;
    let res = 0;

    while (lo <= hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        if (check(mid)) {
            res = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return res;
};


// Here’s a concise

// 1. Each city has some power stations, and every station supplies power to cities within a distance `r`.
// 2. The goal is to **maximize the minimum power** among all cities after adding up to `k` new stations anywhere.
// 3. The code builds a **difference array (`cnt`)** to efficiently calculate the total power each city receives.
// 4. The **`check(val)`** function tests whether it’s possible to give every city at least `val` power using the remaining `k` stations.
// 5. Finally, **binary search** is used to find the largest `val` (the maximum possible minimum power) that can be achieved.
