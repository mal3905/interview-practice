// REQUIREMENT : solve the problem using the sliding window technique
// Sample Questions from https://www.techiedelight.com/sliding-window-problems/
// Tutorial Used in conjunction with these problems : https://www.youtube.com/watch?v=MK-NZ4hN7rsß

// Question #1
// Find the longest substring of a given string containing k distinct characters
function distinctCharCount(s, k) {
  if (k > s.length) return s;

  let longestString = '', // used to track the length - also serves as return value
    unique = 0, // keeps track of unique count, to check against k
    counts = {}, // keeps track of occurence of characters, checks whether or not they are unique
    j = 0; // this is the value well store for the right window
  for (let i = j; i < s.length + 1; i++) {
    // i is the left window
    if (!counts[s[i]]) {
      // if the character is unique
      counts[s[i]] = 1; // set its value in the counts obj to one
      unique++; // increment the value of unique - to check against k
    } else counts[s[i]]++; // else increment its value in the obj 'counts'
    if (s.substring(j, i).length > longestString.length) {
      // if the current substring being checked is greater in length then the longest string, set the longest as the current
      longestString = s.substring(j, i);
    }
    if (unique > k) {
      // if unique is greater than k
      counts[s[j]]--; // decrement the count of the last character in the window
      unique--; // decrement the count of unique
      j++; // and increment the left window
    }
  }

  return longestString;
}

console.log(distinctCharCount('xyzaabbccdd', 4));

// Question #2
// Find all substrings of a string that are permutations of a given string

function findAllSubstrings(s, k) {
  if (k.length > s.length) return false;
  let set = {};
  let window = {};
  for (let i = 0; i < k.length + 1; i++) {
    let charValue = set[k[i]];
    charValue === undefined ? (charValue = 1) : (charValue += 1);
  }
  for (let j = 0; j < k.length; j++) {
       let charValue = window[k[i]];
   if(j < k) {

    charValue === undefined ? (charValue = 1) : (charValue += 1);
   } else {
if(window contains all the requirements of set) {
    print out window and the current index
}

if(window contains all the required conditions even when we remove the last element) {
    then increment the left window
}

    charValue === undefined ? (charValue = 1) : (charValue += 1);
   }
   
  }
}

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
