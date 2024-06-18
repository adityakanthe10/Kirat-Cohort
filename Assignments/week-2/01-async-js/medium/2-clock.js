let counter = 0;

function Counter() {
  counter++;
  displayTime();
}

function timeFormat(date) {
  const hours24 = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const hours12 = hours24 % 12 || 12;
  const amPm = hours24 >= 12 ? "PM" : "AM";

  const time24 = `${String(hours24).padStart(2, "0")}:${minutes}:${seconds}`;
  const time12 = `${String(hours12).padStart(2, "0")}:${minutes}:${seconds}`;

  return { time24, time12 };
}

function displayTime() {
  const d = new Date();
  const { time24, time12 } = timeFormat(d);

  console.log(`24-hour format:${time24}`);
  console.log(`12-hour format:${time12}`);
}

setInterval(Counter, 1000);
