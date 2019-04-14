/**
 * leetcode初级算法题
 * 网址：https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成
 * 【解题思路】
 * 1、第一次看题觉得数组去重可用set,后来测试不通过，再次读题，原地删除重复数组
 * 就是说修改原来的数组。set是会重新创建一个新数组。
 * 后来使用splice，它可对原数组进行操作。slice会产生新的数组，不对原数组操作。
 * 2、因为是排序数组，所以重复的元素一定是相邻的。删除之后，指针往前移一位。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i = 0;i<nums.length;i++){
        if(nums[i]=== nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};