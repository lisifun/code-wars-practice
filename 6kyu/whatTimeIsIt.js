/*
Due to lack of maintenance the minute-hand has fallen off 
Town Hall clock face.

And because the local council has lost most of our tax money 
to an elaborate email scam there are no funds to fix the clock 
properly.

Instead, they are asking for volunteer programmers to write some 
code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it?

Examples

12:00 = 0 degrees

03:00 = 90 degrees

06:00 = 180 degrees

09:00 = 270 degrees

12:00 = 360 degrees
*/

var whatTimeIsIt = function (angle) {
  // Your code here
  let hour = angle / 30;
  let minutes = (hour - Math.floor(hour)) * 60;

  let currentHour = Math.floor(hour);
  let currentMinutes = Math.floor(minutes.toFixed(2));

  if (currentHour === 0) {
    currentHour = 12;
  }

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  return `${currentHour}:${currentMinutes}`;
};
