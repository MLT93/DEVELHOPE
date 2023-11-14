/* Exercise 10 - Await the lucky draw results

Create a getResults function that uses async and await. Inside of the function, call the luckyDraw function for each of the players: Tina, Jorge, Julien

Log out the resolved value for each promise and handle any promise rejections. */

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win === true) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
  const arr = ["Tina", "Jorge", "Julien", "Manuel"];

  try {
    for (const element of arr) {
      try {
        const result = await luckyDraw(element);
        console.log(result);
      } catch (err) {
        console.error(err.message, 'Try again!');
      }
    }
  } finally {
    console.log(`The game has finished.`);
  }
}

getResults();
