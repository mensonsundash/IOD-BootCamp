// // Simulate fetching external data, which can be slow
// function fetchExternalData(id) {
// console.log(`Fetching data for ID: ${id}`);
// const data = `Data for ID: ${id}`; // Simulated data
// return data;
// }
// // Create a Map for caching
// const cache = new Map();
// function getCachedData(id) {
// // Check if data is already in the cache
// if (cache.has(id)) {
// return cache.get(id); // return cached value, no expensive lookup
// }
// // If not in cache, fetch "external" data and store in cache for next time
// const data = fetchExternalData(id);
// cache.set(id, data);
// return data;
// }
// // Example usage
// console.log('#1: ' + getCachedData(1)); // First time: fetches "external" data and caches result
// console.log('#2: ' + getCachedData(1)); // Other times: can fetch result from cache, much faster


// let { width = 200, height = 100, title} = { title: 'My Component' }
// console.log(width, height, title) // 200 100 My Component

let today = new Date("2023-12-25");
console.log(today.toLocaleString("ko-KR", {timeZone: "Asia/Seoul"}));

const nyeLocal = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
console.log( nyeLocal.toLocaleString() ) // 31/12/2023, 11:59:59 pm - default to local TZ