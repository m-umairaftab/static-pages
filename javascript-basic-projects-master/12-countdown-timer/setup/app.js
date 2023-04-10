const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveway = document.querySelector('.giveway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')
// console.log(items);

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDay()
// let futureDate = new Date(2023, 3, 26, 11, 30, 0)
// console.log(futureDate);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10,
11, 30, 0)
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]

giveway.textContent = `giveway ends on ${weekday}, ${date} 
${month} ${year} ${hours}:${minutes}am`
// future time in ms
const futureTime = futureDate.getTime()
// console.log(futureTime)
function getRemainingTime() {
  const today = new Date().getTime()
  const t = futureTime - today
  // console.log(t);
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  // calculate all values
  let days = t / oneDay
  days = Math.floor(days)
  let hours = (t % oneDay) / oneHour

  hours = Math.floor(hours)
  // console.log(hours);
  let minutes = (t % oneHour) / oneMinute

  minutes = Math.floor(minutes)
  let seconds = (t % oneMinute) / 1000

  seconds = Math.floor(seconds)

  // set values here
  const values = [days, hours, minutes, seconds]
  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class = "expired">sorry, this
    giveway has expired</h4>`
  }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()