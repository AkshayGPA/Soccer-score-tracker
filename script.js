let score_MU = document.getElementById("ManUtd-score");
let score_Ars = document.getElementById("Arsenal-score");

let goal_MU = 0;
let goal_Ars = 0;

function MU_score() {
  goal_MU++;
  score_MU.textContent = goal_MU;
}

function Ars_score() {
  goal_Ars++;
  score_Ars.textContent = goal_Ars;
}

// ****************************************** //

// Capturing all the text content values from the various stats
let foul_MU = document.getElementById("ManUtd-foul");
let corner_MU = document.getElementById("ManUtd-corner");
let freeKick_MU = document.getElementById("ManUtd-freeKick");
let pen_MU = document.getElementById("ManUtd-pen");

let MU_foul_count = 0;
let MU_corner_count = 0;
let MU_freeKick_count = 0;
let MU_pen_count = 0;


function MU_foul() {
  MU_foul_count++;
  foul_MU.textContent = MU_foul_count;
}

function MU_corner() {
  MU_corner_count++;
  corner_MU.textContent = MU_corner_count;
}

function MU_freeKick() {
  MU_freeKick_count++;
  freeKick_MU.textContent = MU_freeKick_count;
}

function MU_pen() {
  MU_pen_count++;
  pen_MU.textContent = MU_pen_count;
}

// ********************************************* //


let foul_Ars = document.getElementById("Ars-foul");
let corner_Ars = document.getElementById("Ars-corner");
let freeKick_Ars = document.getElementById("Ars-freeKick");
let pen_Ars = document.getElementById("Ars-pen");

let Ars_foul_count = 0;
let Ars_corner_count = 0;
let Ars_freeKick_count = 0;
let Ars_pen_count = 0;


function Ars_foul() {
  Ars_foul_count++;
  foul_Ars.textContent = Ars_foul_count;
}

function Ars_corner() {
  Ars_corner_count++;
  corner_Ars.textContent = Ars_corner_count;
}

function Ars_freeKick() {
  Ars_freeKick_count++;
  freeKick_Ars.textContent = Ars_freeKick_count;
}

function Ars_pen() {
  Ars_pen_count++;
  pen_Ars.textContent = Ars_pen_count;
}

// ********************************************* //

function new_game() {
  goal_MU = 0;
  score_MU.textContent = 0;

  goal_Ars = 0;
  score_Ars.textContent = 0;

  MU_foul_count = 0;
  foul_MU.textContent = 0;

  MU_corner_count = 0;
  corner_MU.textContent = 0;

  MU_freeKick_count = 0;
  freeKick_MU.textContent = 0;

  MU_pen_count = 0;
  pen_MU.textContent = 0;

  Ars_foul_count = 0;
  foul_Ars.textContent = 0;

  Ars_corner_count = 0;
  corner_Ars.textContent = 0;

  Ars_freeKick_count = 0;
  freeKick_Ars.textContent = 0;

  Ars_pen_count = 0;
  pen_Ars.textContent = 0;
}

// ************************************** //

if (goal_MU > goal_Ars) {
  document.getElementById("ManUtd-score").style.textShadow = "2px 2px 3px #ffdd00";
}

