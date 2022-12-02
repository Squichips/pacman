
function initFantome(plateau) {
  do {
    xf = Math.floor(1+Math.random()*25);
    yf = Math.floor(1+Math.random()*20);
  } while (plateau[yf][xf] == "#");
}


function deplaceFantome() {
  if (mvtf==1) {  dx = 1; dy=0; }
  else if (mvtf==4) { dx = -1; dy=0; }
  else if (mvtf==3) {  dx = 0; dy=-1; }
  else { dx = 0; dy=1; }
  if (plateau[yf+dy][xf+dx]=='#')
  {
    do {
      d = Math.random()*4;
      if (d > 3)  mvtf =1; 
      else if (d > 2)  mvtf =4; 
      else if (d > 1)  mvtf =3; 
      else  mvtf =2; 
    
      if (mvtf==1) {  dx = 1; dy=0; }
      else if (mvtf==4) { dx = -1; dy=0; }
      else if (mvtf==3) {  dx = 0; dy=-1; }
      else { dx = 0; dy=1; }
  } while (plateau[yf+dy][xf+dx]=='#');
}
  yf = yf+dy;
  xf = xf+dx;
  const elem = document.getElementById("fantome");   
  elem.style.top = (20 * yf) + "px"; 
  elem.style.left = (20 * xf) + "px"; 
}
