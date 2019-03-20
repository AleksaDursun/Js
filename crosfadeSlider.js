var slideIndex = 0;
carousel();
/* Function whitch controls image change automatically bz fading from one to another */
function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) 
    {      
      x[i].style.display = "none";
      if(slideIndex!=0)
      {
        if(i==slideIndex-1)
        {
          x[i].style.display = "block";//keeps the previous image shown
          x[i].style.zIndex = "1"; //puts it infront of all images except the next one
        }
      }
      else
      {
        x[x.length-1].style.zIndex = "1";//if slide index is 0 it shows the last image in the carousel
      }
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}//reverses the slide index
    x[slideIndex-1].style.display = "block";//shows the next image 
    x[slideIndex-1].style.zIndex = "2";//puts it in front 
    x[slideIndex-1].style.animation="fade 1000ms linear 0s 1 ";//activates the animation
    setTimeout(carousel, 5000);//rince and repeat
}
