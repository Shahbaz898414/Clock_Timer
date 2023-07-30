function timer(){
  let now=new Date();

  let h=now.getHours();
  let m=now.getMinutes();
  let s=now.getSeconds();

  h=h<10?'0'+h:h;
  m=m<10?'0'+m:m;
  s=s<10?'0'+s:s;
  const str=h+":"+m+":"+s;

  const tm=document.querySelector('.timer');

  tm.innerHTML=str;
}

setInterval(timer,1000);