This library provides a comprehensive set of utility functions for working with arrays, objects, strings, and dates in JavaScript. Designed to simplify common tasks and improve productivity in your projects.

## Table of Contents

# Dates

### formatDate, formatCustomDate, dateDiffInDays, dateDiffInWeeks, dateDiffInMonths, dateDiffInYears, addDays, addWeeks, addMonths, addYears, isBefore, isAfter, isSameDay, startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear,

// startOfWeek
console.log("**\*\***\***\*\*** startOfWeek **\*\***\*\***\*\***");
console.log(startOfWeek(new Date())); // 2024-07-27T00:00:00.000Z

// endOfWeek
console.log(endOfWeek(new Date())); // 2024-08-03T23:59:59.999Z

// startOfMonth
console.log(startOfMonth(new Date())); // 2024-07-01T00:00:00.000Z

// endOfMonth
console.log(endOfMonth(new Date())); // 2024-07-31T23:59:59.999Z

// startOfYear
console.log(startOfYear(new Date())); // 2024-01-01T00:00:00.000Z

// endOfYear
console.log(endOfYear(new Date())); // 2024-12-31T23:59:59.999Z

console.log("**\*\***\***\*\*** AddMonths **\*\***\*\***\*\***");
// test addMonths
console.log("\***\*\*\*\*\*\*\*** AddMonths \***\*\*\*\***");
console.log(addMonths(new Date(), 10)); // 2024-08-27
console.log(addMonths(new Date(), -10)); // 2024-06-27
console.log(addMonths(new Date(), 0)); // 2024-07-27

console.log("**\*\***\***\*\*** AddYears **\*\***\*\***\*\***");
// test addYears
console.log(addYears(new Date(), 10)); // 2025-07-27
console.log(addYears(new Date(), -10)); // 2023-07-27
console.log(addYears(new Date(), 0)); // 2024-07-27

// test addDays
console.log("\***\*\*\*\*\*\*\*** AddDays \***\*\*\*\***");
console.log(addDays(new Date(), 10)); // 2024-07-27
console.log(addDays(new Date(), -10)); // 2024-07-17
console.log(addDays(new Date(), 0)); // 2024-07-27

console.log("\***\*\*\*\*\*\*\*** AddWeeks **\*\***\*\***\*\***");
// test addWeeks
console.log(addWeeks(new Date(), 10)); // 2024-08-03
console.log(addWeeks(new Date(), -10)); // 2024-07-17
console.log(addWeeks(new Date(), 0)); // 2024-08-03

console.log("**\*\***\***\*\*** dateDiffInDays **\*\***\*\***\*\***");
// test dateDiffInDays
console.log(dateDiffInDays("2024-07-27", "2024-08-27")); // 31
console.log(dateDiffInDays("2024-07-27", "2024-07-27")); // 0
console.log(dateDiffInDays("2024-07-27", "2024-06-27")); // 31

console.log("**\*\***\***\*\*** dateDiffInWeeks **\*\***\*\***\*\***");
// test dateDiffInWeeks
console.log(dateDiffInWeeks("2024-07-27", "2024-08-27")); // 5
console.log(dateDiffInWeeks("2024-07-27", "2024-07-27")); // 0
console.log(dateDiffInWeeks("2024-07-27", "2024-06-27")); // 5

console.log("**\*\***\***\*\*** dateDiffInMonths **\*\***\*\***\*\***");
// test dateDiffInMonths
console.log(dateDiffInMonths("2024-07-27", "2024-08-27")); // 1
console.log(dateDiffInMonths("2024-07-27", "2024-07-27")); // 0
console.log(dateDiffInMonths("2024-07-27", "2024-06-27")); // 1

console.log("**\*\***\***\*\*** dateDiffInYears **\*\***\*\***\*\***");
// test dateDiffInYears
console.log(dateDiffInYears("2024-07-27", "2024-08-27")); // 0
console.log(dateDiffInYears("2024-07-27", "2024-07-27")); // 0
console.log(dateDiffInYears("2024-07-27", "2024-06-27")); // 0

console.log("**\*\***\***\*\*** formatDate **\*\***\*\***\*\***");
// test formatDate
console.log(formatDate("2024-07-27")); // 2024-07-27

console.log("**\*\***\***\*\*** formatCustomDate **\*\***\*\***\*\***");
// test formatCustomDate
console.log(formatCustomDate("2024-07-27", "YYYY-MM-DD")); // 2024-07-27
console.log(formatCustomDate("2024-07-27", "DD-MM-YYYY")); // 27-07-2024

console.log("**\*\***\***\*\*** isBefore **\*\***\*\***\*\***");
// test isBefore
console.log(isBefore("2024-07-27", "2024-08-27")); // true
console.log(isBefore("2024-07-27", "2024-07-27")); // false
console.log(isBefore("2024-07-27", "2024-06-27")); // false

console.log("**\*\***\***\*\*** isAfter **\*\***\*\***\*\***");
// test isAfter
console.log(isAfter("2024-07-27", "2024-08-27")); // false
console.log(isAfter("2024-07-27", "2024-07-27")); // false
console.log(isAfter("2024-07-27", "2024-06-27")); // true

console.log("**\*\***\***\*\*** isSameDay **\*\***\*\***\*\***");
// test isSameDay
console.log(isSameDay("2024-07-27", "2024-08-27")); // false
console.log(isSameDay("2024-07-27", "2024-07-27")); // true
console.log(isSameDay("2024-07-27", "2024-06-27")); // false

console.log("**\*\***\***\*\*** isBefore **\*\***\*\***\*\***");
// test isBefore
console.log(isBefore("2024-07-27", "2024-08-27")); // true
console.log(isBefore("2024-07-27", "2024-07-27")); // false
console.log(isBefore("2024-07-27", "2024-06-27")); // false

console.log("**\*\***\***\*\*** isAfter **\*\***\*\***\*\***");
// test isAfter
console.log(isAfter("2024-07-27", "2024-08-27")); // false
console.log(isAfter("2024-07-27", "2024-07-27")); // false
console.log(isAfter("2024-07-27", "2024-06-27")); // true

console.log("**\*\***\***\*\*** endOfDay **\*\***\*\***\*\***");
// test endOfDay
console.log(endOfDay("2024-07-27")); // 2024-07-27T23:59:59.999Z

console.log("**\*\***\***\*\*** startOfDay **\*\***\*\***\*\***");
// test startOfDay
console.log(startOfDay("2024-07-27")); // 2024-07-27T00:00:00.000Z

# Arrays

### isEmptyArray, removeDuplicates, flattenArray, first, last, containsValue, findIndex, findLastIndex, removeFirst, removeLast, sliceArray, all, any, mapArray, filterArray, reduceArray, findElement, findAllElements, removeValue, groupBy, min, max, sum, average, shuffle, sortAsc, sortDesc, isSortedAsc, isSortedDesc, mergeArrays,

// test isEmptyArray
console.log(isEmptyArray([])); // true
console.log(isEmptyArray([1, 2, 3, 4, 5])); // false

// average
console.log(average([1, 2, 3, 4, 5])); // 3

// shuffle
console.log(shuffle([1, 2, 3, 4, 5]));

// sortAsc
console.log(sortAsc([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

// sortDesc
console.log(sortDesc([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// isSortedAsc
console.log(isSortedAsc([1, 2, 3, 4, 5])); // true

// isSortedDesc
console.log(isSortedDesc([1, 2, 3, 4, 5])); // true

// mergeArrays
console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// test removeDuplicates
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

// test flattenArray
console.log(
flattenArray([
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
])
); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// test first
console.log(first([1, 2, 3, 4, 5])); // 1

// test last
console.log(last([1, 2, 3, 4, 5])); // 5

// test containsValue
console.log(containsValue([1, 2, 3, 4, 5], 3)); // true
console.log(containsValue([1, 2, 3, 4, 5], 6)); // false

// test findIndex
console.log(findIndex([1, 2, 3, 4, 5], 3)); // 2

// test findLastIndex
console.log(findLastIndex([1, 2, 3, 4, 5], 3)); // 2

// test removeFirst
console.log(removeFirst([1, 2, 3, 4, 5])); // [2, 3, 4, 5]

// test removeLast
console.log(removeLast([1, 2, 3, 4, 5])); // [1, 2, 3, 4]

// test sliceArray
console.log(sliceArray([1, 2, 3, 4, 5], 2, 4)); // [3, 4]

// test all
console.log(all([true, true, true], (x) => x)); // true
console.log(all([true, true, false], (x) => x)); // false

// test any
console.log(any([true, true, true], (x) => x)); // true
console.log(any([true, true, false], (x) => x)); // true

// test mapArray
console.log(mapArray([1, 2, 3, 4, 5], (x) => x \* 2)); // [2, 4, 6, 8, 10]

// test filterArray
console.log(filterArray([1, 2, 3, 4, 5], (x) => x % 2 === 0)); // [2, 4]

// test reduceArray
console.log(reduceArray([1, 2, 3, 4, 5], (x, y) => x + y, 0)); // 15

// test findElement
console.log(findElement([1, 2, 3, 4, 5], (x) => x % 2 === 0)); // 2

// test findAllElements
console.log(findAllElements([1, 2, 3, 4, 5], (x) => x % 2 === 0)); // [2, 4]

// test removeValue
console.log(removeValue([1, 2, 3, 4, 5], 3)); // [1, 2, 4, 5]

// test groupBy
console.log(groupBy([1, 2, 3, 4, 5], (x) => x % 2 === 0)); // {true: [2, 4], false: [1, 3, 5]}

// test min
console.log(min([1, 2, 3, 4, 5])); // 1

// test max
console.log(max([1, 2, 3, 4, 5])); // 5

// test sum
console.log(sum([1, 2, 3, 4, 5])); // 15

## Objects

### isEmptyObject, mergeObjects, deepMerge, getValueByPath, setValueByPath, deleteByPath, cloneObject, hasKey, values, keys, entries, toArrayOfEntries, fromArrayOfEntries, pick, omit, countKeys, allValues, anyValue, transformKeys, transformValues, isPlainObject,

// test toArrayOfEntries
console.log(toArrayOfEntries({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]

// test fromArrayOfEntries
console.log(
fromArrayOfEntries([
["a", 1],
["b", 2],
["c", 3],
])
); // {a: 1, b: 2, c: 3}

// test pick
console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "b"])); // {a: 1, b: 2}

// test omit
console.log(omit({ a: 1, b: 2, c: 3 }, ["a", "b"])); // {c: 3}

// test countKeys
console.log(countKeys({ a: 1, b: 2, c: 3 })); // 3

// test allValues
console.log(allValues({ a: 1, b: 2, c: 3 }, (k) => k < 2)); // [1, 2, 3]

// test anyValue
console.log(anyValue({ a: 1, b: 2, c: 3 }, (k) => k < 2)); // true

// test transformKeys
console.log(transformKeys({ a: 1, b: 2, c: 3 }, (k) => k.toUpperCase())); // {A: 1, B: 2, C: 3}

// test transformValues
console.log(transformValues({ a: 1, b: 2, c: 3 }, (k) => k + 1)); // {a: 2, b: 3, c: 4}

// test isPlainObject
console.log(isPlainObject({ a: 1, b: 2, c: 3 })); // true

// test isEmptyObject
console.log(isEmptyObject({})); // true
console.log(isEmptyObject({ a: 1 })); // false

// test mergeObjects
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // {a: 1, b: 2, c: 3, d: 4}

// test deepMerge
console.log(deepMerge({ a: 1, b: 2 }, { c: 3, d: 4 })); // {a: 1, b: 2, c: 3, d: 4}

// test getValueByPath
console.log(getValueByPath({ a: { b: { c: 3 } } }, "a.b.c")); // 3

// test setValueByPath
console.log(setValueByPath({ a: { b: { c: 3 } } }, "a.b.c", 4)); // {a: {b: {c: 4}}}

// test deleteByPath
console.log(deleteByPath({ a: { b: { c: 3 } } }, "a.b.c")); // {a: {b: {}}}

// test cloneObject
console.log(cloneObject({ a: { b: { c: 3 } } })); // {a: {b: {c: 3}}}

// test hasKey
console.log(hasKey({ a: { b: { c: 3 } } }, "a.b.c")); // true
console.log(hasKey({ a: { b: { c: 3 } } }, "a.b.d")); // false

// test values
console.log(values({ a: 1, b: 2, c: 3 })); // [1, 2, 3]

// test keys
console.log(keys({ a: 1, b: 2, c: 3 })); // ['a', 'b', 'c']

// test entries
console.log(entries({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]

// test toArrayOfEntries
console.log(toArrayOfEntries({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]

## Strings

### trim, trimStart,trimEnd,toUpperCase, toLowerCase, capitalize, toTitleCase, reverseString, contains, startsWith, endsWith, indexOf, lastIndexOf, replace, replaceAll, split, join,repeat, substring, slice, padStart, padEnd, removeNonAlphanumeric, removeWhitespace, isEmpty, isBlank, isEmail, isUrl, isPhoneNumber, length, toArray, fromArray, escapeHtml, unescapeHtml, randomString, toSlug, toCamelCase, toPascalCase, toSnakeCase, toConstantCase, capitalizeWords,

// test capitalizeWords
console.log(capitalizeWords("hello world")); // "Hello World"
// test trim
console.log(trim(" hello ")); // "hello"

// test trimStart
console.log(trimStart(" hello ")); // "hello "

// test trimEnd
console.log(trimEnd(" hello ")); // " hello"

// test toUpperCase
console.log(toUpperCase("hello")); // "HELLO"

// test toLowerCase
console.log(toLowerCase("HELLO")); // "hello"

// test capitalize
console.log(capitalize("hello")); // "Hello"

// test toTitleCase
console.log(toTitleCase("hello world")); // "Hello World"

// test reverseString
console.log(reverseString("hello")); // "olleh"

// test contains
console.log(contains("hello", "e")); // true
console.log(contains("hello", "x")); // false

// test startsWith
console.log(startsWith("hello", "h")); // true
console.log(startsWith("hello", "x")); // false

// test endsWith
console.log(endsWith("hello", "o")); // true
console.log(endsWith("hello", "x")); // false

// test indexOf
console.log(indexOf("hello", "e")); // 1
console.log(indexOf("hello", "x")); // -1

// test lastIndexOf
console.log(lastIndexOf("hello", "e")); // 1
console.log(lastIndexOf("hello", "x")); // -1

// test replace
console.log(replace("hello", "e", "a")); // hallo

// test replaceAll
console.log(replaceAll("hello", "e", "a")); // hallo

// test split
console.log(split("hello", "e")); // ["h", "llo"]

// test join
console.log(join(["hello", "world"], " ")); // "hello world"

// test repeat
console.log(repeat("hello", 3)); // "hellohellohello"

// test substring
console.log(substring("hello", 1, 3)); // "ell"

// test slice
console.log(slice("hello", 1, 3)); // "el

// test padStart
console.log(padStart("hello", 10, "0")); // "000hello"

// test padEnd
console.log(padEnd("hello", 10, "0")); // "hello000"

// test removeNonAlphanumeric
console.log(removeNonAlphanumeric("hello world")); // "helloworld"

// test removeWhitespace
console.log(removeWhitespace("hello world")); // "helloworld"

// test isEmpty
console.log(isEmpty("")); // true
console.log(isEmpty(" ")); // false

// test isBlank
console.log(isBlank("")); // true
console.log(isBlank(" ")); // true
console.log(isBlank(" ")); // false

// test isEmail
console.log(isEmail("jKQp7@example.com")); // true

// test isUrl
console.log(isUrl("https://google.com")); // true
console.log(isUrl("google.com")); // false

// test isPhoneNumber
console.log(isPhoneNumber("1234567890")); // true
console.log(isPhoneNumber("12345678901")); // false

// test length
console.log(length("hello")); // 5

// test toArray
console.log(toArray("hello")); // ["h", "e", "l", "l", "o"]

// test fromArray
console.log(fromArray(["h", "e", "l", "l", "o"])); // "hello"

// test escapeHtml
console.log(escapeHtml("hello & world")); // "hello &amp; world"

// test unescapeHtml
console.log(unescapeHtml("hello &amp; world")); // "hello & world"

// toSlug
console.log(toSlug("Hello World")); // "hello-world"

// toSnakeCase
console.log(toSnakeCase("Hello World")); // "hello_world"

// toCamelCase
console.log(toCamelCase("hello world")); // "helloWorld"

// toPascalCase
console.log(toPascalCase("hello world")); // "HelloWorld"

// toConstantCase
console.log(toConstantCase("hello world")); // "HELLO_WORLD"

// toTitleCase
console.log(toTitleCase("hello world")); // "Hello World"

// randomString
console.log(randomString(10)); // "uhhPBgK1PE"
