/*Kodi per background color qe ndryshon gjate koheve te ndryshme te dites*/
 var t = new Date().getHours();
 if (t>5 && t <= 10 ) {
      document.body.style.backgroundColor="yellow";
 }else if (t>10 && t <= 20) {
      document.body.style.backgroundColor="orange";
 }else {
      document.body.style.backgroundColor="grey";
 }

