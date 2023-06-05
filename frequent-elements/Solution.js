class Solution {
  frequentElements(nums, k) {
    const seen = {};
    for (const num of nums) {
      if (seen[num] === undefined) {
        seen[num] = 1;
      } else {
        seen[num]++;
      }
    }
    // { '1': 3, '2': 2, '3': 1 }

    const bucket = [];
    for (let i = 0; i < nums.length; i++) {
      bucket.push([]);
    }
    //  [ [], [], [], [], [], [] ]

    for (const key in seen) {
      let count = seen[key];
      bucket[count].push(key);
    }
    // [ [], [ '3' ], [ '2' ], [ '1' ], [], [] ]

    let res = [];
    for (let i = bucket.length - 1; i >= 0; i--) {
      // [ [], [ '3' ], [ '2' ], [ '1' ], [], [] ] <-
      if (bucket[i].length === 0) {
        // desconsider the empty arrays
        continue;
      } else {
        res = [...res, Number(...bucket[i])];
      }
    }
    //['1','2','3']
    return res.slice(0, k);
  }
}

module.exports = Solution;
