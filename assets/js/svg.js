const anim = anime.timeline({
    loop: false,
    direction: 'alternate',
  });
  
  anim
    .add({
      targets: '#hexagon path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuart',
      duration: 2000,
      delay: function(el, i) { return i * 250 },
    })
    .add({
      targets: '#hexagon #B',
      duration: 1000,
      opacity: 1,
      easing: 'easeInOutQuart'
    })
    .add({
      targets: ['#hexagon path','#hexagon #B'],
      duration: 1000,
      opacity: 0,
      easing: 'easeInQuad'
    })
    .add({
      targets: ["#ABsvg"],
      duration: 750,
      opacity: 0,
      easing: 'easeInQuad'
    })
  setTimeout(()=>{
    document.getElementById('ABsvg').style.display = "none";
  },4800);