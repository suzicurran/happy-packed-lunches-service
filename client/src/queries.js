// replace with real fetches
const mockData = n => `{ "streak": ${n} }`;
const fetchStreakData = () =>
  fetch("/streak")
    .then(response => response.json())
    .catch(err => console.log(err));

const postStreakUpdate = () => Promise.resolve(mockData(2));
const postStreakReset = () => Promise.resolve(mockData(0));
const fetchTest = () => fetch("/test");

export { fetchStreakData, postStreakReset, postStreakUpdate, fetchTest };
