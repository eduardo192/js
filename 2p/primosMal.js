function init(){
  for (n=3;n<1000;n++){
   noFactorSoFar = true;
   let i=0;
    for (f=1;f<=n;f++){
     r = n % f;
     if (r==0){
        i++
     }
    }
    if (i==2){
      document.write(n)
      document.write("<br/>");
    }
  }
}

init();