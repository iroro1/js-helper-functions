// Trim whitespace from both ends of a string
const trim = (str) => str.trim();

// Trim whitespace from the start of a string
const trimStart = (str) => str.trimStart();

// Trim whitespace from the end of a string
const trimEnd = (str) => str.trimEnd();

// Convert a string to uppercase
const toUpperCase = (str) => str.toUpperCase();

// Convert a string to lowercase
const toLowerCase = (str) => str.toLowerCase();

// Capitalize the first letter of a string
const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// Convert a string to title case
const toTitleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Reverse a string
const reverseString = (str) => str.split("").reverse().join("");

// Check if a string contains another string
const contains = (str, search) => str.includes(search);

// Check if a string starts with another string
const startsWith = (str, search) => str.startsWith(search);

// Check if a string ends with another string
const endsWith = (str, search) => str.endsWith(search);

// Find the index of the first occurrence of a substring
const indexOf = (str, search) => str.indexOf(search);

// Find the index of the last occurrence of a substring
const lastIndexOf = (str, search) => str.lastIndexOf(search);

// Replace the first occurrence of a substring with another substring
const replace = (str, search, replacement) =>
  str.replace(search, replacement);

// Replace all occurrences of a substring with another substring
const replaceAll = (str, search, replacement) =>
  str.split(search).join(replacement);

// Split a string into an array of substrings
const split = (str, separator) => str.split(separator);

// Join an array of strings into a single string
const join = (arr, separator) => arr.join(separator);

// Repeat a string a given number of times
const repeat = (str, times) => str.repeat(times);

// Get a substring from a string
const substring = (str, start, end) => str.substring(start, end);

// Extract a substring from a string
const slice = (str, start, end) => str.slice(start, end);

// Pad the start of a string with another string until it reaches a specified length
const padStart = (str, length, padString = " ") =>
  str.padStart(length, padString);

// Pad the end of a string with another string until it reaches a specified length
const padEnd = (str, length, padString = " ") =>
  str.padEnd(length, padString);

// Remove all non-alphanumeric characters
const removeNonAlphanumeric = (str) => str.replace(/[^a-zA-Z0-9]/g, "");

// Remove all whitespace characters
const removeWhitespace = (str) => str.replace(/\s+/g, "");

// Check if a string is empty
const isEmpty = (str) => str.length === 0;

// Check if a string is blank (empty or only whitespace)
const isBlank = (str) => !str.trim();

// Check if a string is a valid email address
const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

// Check if a string is a valid URL
const isUrl = (str) => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(str);

// Check if a string is a valid phone number (basic validation)
const isPhoneNumber = (str) => /^\+?[1-9]\d{1,14}$/.test(str);

// Get the length of a string
const length = (str) => str.length;

// Convert a string to an array of characters
const toArray = (str) => Array.from(str);

// Convert an array of characters to a string
const fromArray = (arr) => arr.join("");

// Escape HTML special characters
const escapeHtml = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// Unescape HTML special characters
const unescapeHtml = (str) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

// Generate a random string of a given length
const randomString = (length) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Convert a string to a slug (kebab-case)
const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// Convert a string to a camel case
const toCamelCase = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, group1) => group1.toUpperCase())
    .replace(/^./, (str) => str.toLowerCase());

// Convert a string to Pascal case
const toPascalCase = (str) =>
  str
    .replace(/(^\w|-\w)/g, (match) => match.replace(/-/, "").toUpperCase())
    .replace(/-/g, "");

// Convert a string to snake case
const toSnakeCase = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9_]/g, "");

// Convert a string to export constant case (UPPER_SNAKE_CASE)
const toConstantCase = (str) =>
  str
    .toUpperCase()
    .replace(/\s+/g, "_")
    .replace(/[^A-Z0-9_]/g, "");

// Capitalize every word in a string (title case)
const capitalizeWords = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Format a date to YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = ("0" + (d.getMonth() + 1)).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

// Format a date to a custom format (e.g., 'MM/DD/YYYY')
const formatCustomDate = (date, format) => {
  const d = new Date(date);
  const map = {
    MM: ("0" + (d.getMonth() + 1)).slice(-2),
    DD: ("0" + d.getDate()).slice(-2),
    YYYY: d.getFullYear(),
    HH: ("0" + d.getHours()).slice(-2),
    mm: ("0" + d.getMinutes()).slice(-2),
    ss: ("0" + d.getSeconds()).slice(-2),
  };
  return format.replace(/MM|DD|YYYY|HH|mm|ss/gi, (matched) => map[matched]);
};

// Calculate the difference in days between two dates
const dateDiffInDays = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const timeDiff = Math.abs(d2 - d1);
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

// Calculate the difference in weeks between two dates
const dateDiffInWeeks = (date1, date2) => {
  return Math.floor(dateDiffInDays(date1, date2) / 7);
};

// Calculate the difference in months between two dates
const dateDiffInMonths = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return (
    (d2.getFullYear() - d1.getFullYear()) * 12 + d2.getMonth() - d1.getMonth()
  );
};

// Calculate the difference in years between two dates
const dateDiffInYears = (date1, date2) => {
  return new Date(date2).getFullYear() - new Date(date1).getFullYear();
};

// Add days to a date
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Add weeks to a date
const addWeeks = (date, weeks) => {
  return addDays(date, weeks * 7);
};

// Add months to a date
const addMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

// Add years to a date
const addYears = (date, years) => {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
};

// Check if a date is before another date
const isBefore = (date1, date2) => {
  return new Date(date1) < new Date(date2);
};

// Check if a date is after another date
const isAfter = (date1, date2) => {
  return new Date(date1) > new Date(date2);
};

// Check if a date is the same as another date
const isSameDay = (date1, date2) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

// Get the start of the day for a date
const startOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

// Get the end of the day for a date
const endOfDay = (date) => {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
};

// Get the start of the week for a date
const startOfWeek = (date, startOfWeekDay = 0) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : startOfWeekDay);
  return new Date(d.setDate(diff));
};

// Get the end of the week for a date
const endOfWeek = (date, startOfWeekDay = 0) => {
  const start = startOfWeek(date, startOfWeekDay);
  return addDays(start, 6);
};

// Get the start of the month for a date
const startOfMonth = (date) => {
  const d = new Date(date);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
};

// Get the end of the month for a date
const endOfMonth = (date) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  d.setHours(23, 59, 59, 999);
  return d;
};

// Get the start of the year for a date
const startOfYear = (date) => {
  const d = new Date(date);
  d.setMonth(0, 1);
  d.setHours(0, 0, 0, 0);
  return d;
};

// Get the end of the year for a date
const endOfYear = (date) => {
  const d = new Date(date);
  d.setMonth(11, 31);
  d.setHours(23, 59, 59, 999);
  return d;
};

// Check if an array is empty
const isEmptyArray = (arr) => arr.length === 0;

// Remove duplicates from an array
const removeDuplicates = (arr) => [...new Set(arr)];

// Flatten a nested array
const flattenArray = (arr) => arr.flat(Infinity);

// Get the first element of an array
const first = (arr) => arr[0];

// Get the last element of an array
const last = (arr) => arr[arr.length - 1];

// Check if an array contains a value
const containsValue = (arr, value) => arr.includes(value);

// Find the index of a value in an array
const findIndex = (arr, value) => arr.indexOf(value);

// Find the last index of a value in an array
const findLastIndex = (arr, value) => arr.lastIndexOf(value);

// Remove the first element of an array
const removeFirst = (arr) => arr.slice(1);

// Remove the last element of an array
const removeLast = (arr) => arr.slice(0, -1);

// Get a slice of an array
const sliceArray = (arr, start, end) => arr.slice(start, end);

// Check if all elements in an array pass a test
const all = (arr, test) => arr.every(test);

// Check if any element in an array passes a test
const any = (arr, test) => arr.some(test);

// Map an array to a new array with the results of a function
const mapArray = (arr, func) => arr.map(func);

// Filter an array to only include elements that pass a test
const filterArray = (arr, test) => arr.filter(test);

// Reduce an array to a single value using a function
const reduceArray = (arr, func, initialValue) =>
  arr.reduce(func, initialValue);

// Find an element in an array that passes a test
const findElement = (arr, test) => arr.find(test);

// Find all elements in an array that pass a test
const findAllElements = (arr, test) => arr.filter(test);

// Remove all occurrences of a value from an array
const removeValue = (arr, value) => arr.filter((item) => item !== value);

// Group array elements by a property or function
const groupBy = (arr, keyOrFunc) =>
  arr.reduce((acc, item) => {
    const key =
      typeof keyOrFunc === "function" ? keyOrFunc(item) : item[keyOrFunc];
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});

// Find the minimum value in an array
const min = (arr) => Math.min(...arr);

// Find the maximum value in an array
const max = (arr) => Math.max(...arr);

// Calculate the sum of all elements in an array
const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);

// Calculate the average of all elements in an array
const average = (arr) => sum(arr) / arr.length;

// Shuffle an array randomly
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

// Sort an array in ascending order
const sortAsc = (arr) => [...arr].sort((a, b) => a - b);

// Sort an array in descending order
const sortDesc = (arr) => [...arr].sort((a, b) => b - a);

// Check if an array is sorted in ascending order
const isSortedAsc = (arr) =>
  arr.every((val, i, arr) => !i || arr[i - 1] <= val);

// Check if an array is sorted in descending order
const isSortedDesc = (arr) =>
  arr.every((val, i, arr) => !i || arr[i - 1] >= val);

// Merge multiple arrays into one
const mergeArrays = (...arrays) => arrays.flat();

// Check if an object is empty
const isEmptyObject = (obj) => Object.keys(obj).length === 0;

// Merge two or more objects
const mergeObjects = (...objects) => Object.assign({}, ...objects);

// Deep merge two or more objects
const deepMerge = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();
  if (Object(source) !== source) return target;
  Object.keys(source).forEach((key) => {
    if (Object(source[key]) === source[key]) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      deepMerge(target[key], source[key]);
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  });
  return deepMerge(target, ...sources);
};

// Get a value from an object by a path (e.g., 'a.b.c')
const getValueByPath = (obj, path) =>
  path.split(".").reduce((acc, key) => acc && acc[key], obj);

// Set a value in an object by a path (e.g., 'a.b.c')
const setValueByPath = (obj, path, value) => {
  path.split(".").reduce((acc, key, i, arr) => {
    if (i === arr.length - 1) {
      acc[key] = value;
    } else {
      if (!acc[key]) acc[key] = {};
    }
    return acc[key];
  }, obj);
};

// Delete a key from an object by a path (e.g., 'a.b.c')
const deleteByPath = (obj, path) => {
  const keys = path.split(".");
  keys.reduce((acc, key, i) => {
    if (i === keys.length - 1) {
      delete acc[key];
    }
    return acc[key];
  }, obj);
};

// Clone an object
const cloneObject = (obj) => JSON.parse(JSON.stringify(obj));

// Check if an object has a specific key
const hasKey = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

// Get all values from an object
const values = (obj) => Object.values(obj);

// Get all keys from an object
const keys = (obj) => Object.keys(obj);

// Get all entries (key-value pairs) from an object
const entries = (obj) => Object.entries(obj);

// Convert an object to an array of key-value pairs
const toArrayOfEntries = (obj) => Object.entries(obj);

// Convert an array of key-value pairs to an object
const fromArrayOfEntries = (arr) => Object.fromEntries(arr);

// Pick specific keys from an object
const pick = (obj, ...keys) =>
  keys.reduce((acc, key) => {
    if (obj[key] !== undefined) acc[key] = obj[key];
    return acc;
  }, {});

// Omit specific keys from an object
const omit = (obj, ...keys) =>
  Object.keys(obj).reduce((acc, key) => {
    if (!keys.includes(key)) acc[key] = obj[key];
    return acc;
  }, {});

// Get the number of keys in an object
const countKeys = (obj) => Object.keys(obj).length;

// Check if all values in an object pass a test
const allValues = (obj, test) => Object.values(obj).every(test);

// Check if any value in an object passes a test
const anyValue = (obj, test) => Object.values(obj).some(test);

// Transform the keys of an object using a function
const transformKeys = (obj, func) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [func(key), value])
  );

// Transform the values of an object using a function
const transformValues = (obj, func) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, func(value)])
  );

// Check if an object is a plain object (not an array or other type)
const isPlainObject = (obj) =>
  Object.prototype.toString.call(obj) === "[object Object]";

export { addDays, addMonths, addWeeks, addYears, all, allValues, any, anyValue, average, capitalize, capitalizeWords, cloneObject, contains, containsValue, countKeys, dateDiffInDays, dateDiffInMonths, dateDiffInWeeks, dateDiffInYears, deepMerge, deleteByPath, endOfDay, endOfMonth, endOfWeek, endOfYear, endsWith, entries, escapeHtml, filterArray, findAllElements, findElement, findIndex, findLastIndex, first, flattenArray, formatCustomDate, formatDate, fromArray, fromArrayOfEntries, getValueByPath, groupBy, hasKey, indexOf, isAfter, isBefore, isBlank, isEmail, isEmpty, isEmptyArray, isEmptyObject, isPhoneNumber, isPlainObject, isSameDay, isSortedAsc, isSortedDesc, isUrl, join, keys, last, lastIndexOf, length, mapArray, max, mergeArrays, mergeObjects, min, omit, padEnd, padStart, pick, randomString, reduceArray, removeDuplicates, removeFirst, removeLast, removeNonAlphanumeric, removeValue, removeWhitespace, repeat, replace, replaceAll, reverseString, setValueByPath, shuffle, slice, sliceArray, sortAsc, sortDesc, split, startOfDay, startOfMonth, startOfWeek, startOfYear, startsWith, substring, sum, toArray, toArrayOfEntries, toCamelCase, toConstantCase, toLowerCase, toPascalCase, toSlug, toSnakeCase, toTitleCase, toUpperCase, transformKeys, transformValues, trim, trimEnd, trimStart, unescapeHtml, values };
