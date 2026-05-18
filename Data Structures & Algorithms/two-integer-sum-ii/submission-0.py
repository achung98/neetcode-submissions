class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        i, j = 0, len(numbers) - 1
        
        while(i < j):
            first = numbers[i]
            last = numbers[j]
            diff = first + last

            if diff == target:
                return [i + 1, j + 1]
            
            if diff < target: i += 1
            else: j -= 1

        raise Exception("Error")