const data = process.argv.slice(2); // slice starting at 2 will discard both of those and return everything else that was typed on the command line.

let numbers = data.filter(number => { //filter/ignore/skip any numbers that are negative.  
  return number > 0;
});

const timer = function() {
  for (const num of numbers) {
    setTimeout(() => {
      console.log('beep');// for each of the alarms will display 'beep' with sound every second
      return process.stdout.write('\x07');
    }, num * 1000);
  }
};

timer(numbers);
