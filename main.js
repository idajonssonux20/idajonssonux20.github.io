function changeImage(width) {
    var image = document.getElementById("firstImage");
    var imageSrc = image.getAttribute("src");
    console.log(imageSrc)
    if (imageSrc == "images/about.jpeg") {
        image.setAttribute("src", "images/about_byt.jpeg")
    }
    else
    {
        image.setAttribute("src", "images/about.jpeg")
    }
}

