const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody"),
};

refs.startBtn.addEventListener("click", onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  apdateWinnerField("");
  apdateProgresField("🤖 Заезд начался, ставки не принимаются!");
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    apdateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
      времени`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    apdateProgresField("📝 Заезд окончен, принимаются ставки.");
  });
}

function apdateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function apdateProgresField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML("beforeend", tr);
}

//console.log("🤖 Заезд начался, ставки не принимаются!");

//const promises = horses.map((horse) => run(horse)); //создаем новый массив лошадей, для каждой лошади выполняем ф-ю run
//const promises = horses.map(run);
//аналогичная запись
// console.log(promises);

// Promise.race(promises).then(({ horse, time }) => {
//   console.log(`🎉 Победил ${horse}, финишировав за ${time}
//     времени`);
// });

// Promise.all(promises).then(() => {
//   console.log("📝 Заезд окончен, принимаются ставки.");
// });

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

// run("Mango")
//   .then((x) => console.log(x))
//   .catch((e) => console.log(e));

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// '🤖 Заезд начался, ставки не принимаются!'
// '📝 Заезд окончен, принимаются ставки.'
// `🎉 Победил ${horse}, финишировав за ${time}
//    времени`
