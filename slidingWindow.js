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

//console.log(distinctCharCount('xyzaabbccdd', 4));

// Question #2
// Find all substrings of a string that are permutations of a given string

function compareTwoObj(obj1, obj2) {
  let arr1 = Object.entries(obj1).sort();
  let arr2 = Object.entries(obj2).sort();
  return JSON.stringify(arr1) == JSON.stringify(arr2);
}

function findAllSubstrings(s, k) {
  if (k.length > s.length) return false;
  let set = {};
  let window = {};
  for (let i = 0; i < k.length; i++) {
    if (!set[k[i]]) set[k[i]] = 1;
    else set[k[i]]++;
  }
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    if (r < k) {
      if (!window[s[r]]) window[s[r]] = 1;
      else window[s[r]]++;
    } else {
      if (compareTwoObj(window, set)) {
        console.log({ window, set, leftIndex: l, rightIndex: r });
      }

      if (r - l + 1 > k.length) {
        window[s[l]]--;
        l++;
      }
      if (!window[s[r]]) window[s[r]] = 1;
      else window[s[r]]++;
    }
  }
}

//findAllSubstrings('tuckutck', 'tuck');

// Question #3
// Longest substring of given string containing distinct characters

function findLongestSubstr(s) {
  if (s.length < 2) {
    return s;
  }
  let l = 0,
    longest = '',
    hashMap = {};

  for (let r = l; r < s.length; r++) {
    while (Object.values(hashMap).find((char) => char > 1)) {
      //  increment l and keep r still until the condition passes
      hashMap[s[l]] -= 1;
      l++;
    }
    if (s.substring(l, r).length > longest.length) {
      longest = s.substring(l, r);
    }
    // account for the character that is at this index onto the hashMap
    if (!hashMap[s[r]]) hashMap[s[r]] = 1;
    else hashMap[s[r]]++;
  }

  return longest;
}

findLongestSubstr('findlongestsubstring');
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
