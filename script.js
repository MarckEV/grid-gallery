document.querySelectorAll('.box').forEach(box => {box.addEventListener('click', function() 
  {
    document.querySelectorAll('.box').forEach(box =>{box.classList = "box",box.style = "grid-area:;"}); 
    box.classList.add("active"); box.style = "grid-area:2/2/4/4"
  });
});