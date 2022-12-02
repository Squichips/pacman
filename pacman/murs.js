
function mur(i,j,h,d,b,g,nomImage) {
  if ((plateau[i-1][j]==h)&&(plateau[i][j+1]==d)&&(plateau[i+1][j]==b)&&(plateau[i][j-1]==g))
  {
    let img =document.createElement("img");
    //img.height="20px";
    //img.width="20px";
    img.style.position="absolute";
    img.style.top=(20*i)+"px";
    img.style.left=(20*j)+"px";
    img.src = nomImage;
    document.getElementById("container").appendChild(img);
  }
}

function initMurs() {
  let d="#";
  let p=".";
  for(let i=1;i<22-1;i=i+1) {
    for (let j = 0; j < 27-1; j=j+1) {
      mur(i,j,d,d,d,d,"black.png");

      mur(i,j,d,d,d,p,"1seultraitleft.png");
      mur(i,j,d,d,p,d,"1seultraitdown.png");
      mur(i,j,d,p,d,d,"1seultraitright.png");
      mur(i,j,p,d,d,d,"1seultraitup.png");

      mur(i,j,d,d,p,p,"coindownleft.png");
      mur(i,j,d,p,d,p,"pipeVertical.png");
      mur(i,j,p,d,d,p,"coinleft.png");
      mur(i,j,d,p,p,d,"coindownright.png");
      mur(i,j,p,d,p,d,"pipeHorizontal.png");
      mur(i,j,p,p,d,d,"coinright.png");

      mur(i,j,p,p,p,d,"capRight.png");
      mur(i,j,p,p,d,p,"capTop.png");
      mur(i,j,p,d,p,p,"capLeft.png");
      mur(i,j,d,p,p,p,"capBottom.png");

      mur(i,j,p,p,p,p,"block.png");
    }  
  }
}
