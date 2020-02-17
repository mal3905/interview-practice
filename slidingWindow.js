// REQUIREMENT : solve the problem using the sliding window technique
// Sample Questions from https://www.techiedelight.com/sliding-window-problems/

// Question #1
// Find the longest substring of a given string containing k distinct characters
function distinctCharCount(s, k) {
  if (k > s.length) return s;
  let counts = {};
  let longestString = '';
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] === null) {
      counts[s[i]] += 1;
    }
    if (Object.keys(counts).length > k) {
      counts[s[i]] -= 1;
      j++;
    }
    if (s.substring(j, i).length > longestString.length)
      longestString = s.substring(j.i);
  }
}

// Question #2
// Find all substrings of a string that are permutations of a given string

// Question #3
// Longest substring of given string containing distinct characters

// Question #4
// Find maximum sequence of continuous 1's that can be formed by replacing at-most k zeroes by ones

// Question #5
// Find the maximum length sequence of continuous ones

// Question #6
// Find the minimum sum subarray of given size k

// Question #7
// Find subarray having given sum in given array of integers

// Question #8
// Find the length of smallest sub whose sum of elements is greater than the given number

// Question #9
// Find count of distinct elements in every sub-array of size k

// Question #10
// Print all sub-arrays of an array having distinct elements

// Question #11
// Count the distinct absolute values in the sorted array

// Question #12
// Find duplicates within given range k in an array
