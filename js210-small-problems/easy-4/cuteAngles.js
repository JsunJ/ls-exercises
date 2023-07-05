function dms(float) {
  let degrees = String(Math.floor(float));
  let minutes = String(Math.floor((float % 1) * 60));
  let seconds = String(Math.floor((((float % 1) * 60) % 1) * 60));

  if (minutes.length === 1) minutes = '0'.concat(minutes);
  if (seconds.length === 1) seconds = '0'.concat(seconds);

  return `${degrees}˚${minutes}'${seconds}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"