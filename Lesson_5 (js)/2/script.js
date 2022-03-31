let senseOfLife = 42;

function showVariable(otherSenseOfLife) {
  otherSenseOfLife = otherSenseOfLife;
  if ((otherSenseOfLife = otherSenseOfLife)) return otherSenseOfLife;
  else return senseOfLife;
}
