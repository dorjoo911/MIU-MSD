/* **************************************************
Algorithm findSubsets(subset, nums, output, index)
     if index = nums.length 
        subset.push(output)
        return 
    findSubsets(subset, nums, [...output], index + 1)
*************************************************** */
