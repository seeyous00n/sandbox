// Human Readable Time
//
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// SOLUTION
/* function humanReadable(seconds) {
  let h = Math.floor(seconds / 3600);
  let floatH = (seconds / 3600);
  let m = Math.floor((floatH - h) * 60);
  let floatM = (floatH - h) * 60;
  let s = Math.round((floatM - m) * 60);

  let hR = String(h).length < 2 ? `0${h}` : h;
  let mR = String(m).length < 2 ? `0${m}` : m;
  let sR = String(s).length < 2 ? `0${s}` : s;

  return `${hR}:${mR}:${sR}`;
} */

function humanReadable(seconds) {
  let h = Math.trunc(seconds / 3600);
  let m = Math.trunc(seconds / 60) % 60;
  let s = Math.trunc(seconds % 60);

  let hR = String(h).length < 2 ? `0${h}` : h;
  let mR = String(m).length < 2 ? `0${m}` : m;
  let sR = String(s).length < 2 ? `0${s}` : s;

  return `${hR}:${mR}:${sR}`;
}
