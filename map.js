mapSize();
//Function which makes google map responsive
function mapSize()
{
    if(window.innerWidth>1470)
    {
        var map=document.getElementById("map");
        map.removeAttribute("width");
        map.removeAttribute("height");
        map.setAttribute("width","600");
        map.setAttribute("height","500");
    }
    else
    {
        var map=document.getElementById("map");
        map.removeAttribute("width");
        map.removeAttribute("height");
        map.setAttribute("width","300");
        map.setAttribute("height","250");
    }
    //This setTimeout() is just for testing 
    //setTimeout(mapSize,200);
}