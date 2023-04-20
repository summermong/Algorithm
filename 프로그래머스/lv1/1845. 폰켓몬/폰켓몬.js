function solution(nums) {
  let numsType = new Set(nums).size;
  if (nums.length / 2 >= numsType) {
    return numsType;
  } else {
    return nums.length / 2;
  }
}