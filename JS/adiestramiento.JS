let videoList = document.querySelectorAll('.lista-videos .vid');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.videolista').src;
      let title = vid.querySelector('.title').innerHTML;
      document.querySelector('.video-principal .vprincipal').src = src;
      document.querySelector('.video-principal .vprincipal').play();
      document.querySelector('.video-principal .titleprincipal').innerHTML = title;
   };
});