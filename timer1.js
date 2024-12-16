// Takes the command line arguments and disregards the first two elements
const args = process.argv.slice(2);
// Prints a message if no input
if (args.length === 0) {
  console.log('Please enter timer values.');
  process.exit();
}
// Filters out non-numbers and negative numbers
filteredArgs = args.filter(time => !isNaN(time) && time > 0);
// Converts arguments to number
const times = filteredArgs.map(arg => Number(arg));
// Set the timer to beep
times.forEach(time => {
  const timeInMs = time * 1000;// Converts time to milliseconds
  setTimeout( () =>{
    process.stdout.write('\u0007');// Beep sound 
    console.log(`Alarm! ${time} seconds passed.`);
  }, timeInMs);
});







  