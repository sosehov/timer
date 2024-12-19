const simpleTimer = function(arg) {
  // Check if no argument is provided
  if (arg.length === 0) {
    console.log('Please provide input numbers');
    process.exit();
  } 
  // Filter and map the input to positive numbers
  const filteredArgs = arg.filter(time => !isNaN(time) && time > 0);
  // Convert arguments to numbers
  const times = filteredArgs.map(el => Number(el));
  // Set the timer to beep for each time interval
  times.forEach(time => {
    const timeInMs = time * 1000;// Converts time to milliseconds
    setTimeout( () =>{
      process.stdout.write('\u0007');// Beep sound 
      console.log(`Alarm! ${time} seconds passed.`);
    }, timeInMs);
});
};

const args = process.argv.slice(2);
simpleTimer(args);