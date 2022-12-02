
function finJeu() {
  if ((yf == pcy)&&(xf==pcx)) return true;
  for (let ligne of plateau) {
    for (let c of ligne) {
      if (c==".") return false;
    }
  }
  return true;
}
