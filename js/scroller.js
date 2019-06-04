window.onscroll = function() {
  var heading = document.getElementsByTagName("header")[0].firstElementChild;
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    heading.innerHTML = "MB";
    heading.style.margin = "20px";
  } else {
    heading.innerHTML = "Maddie Burbage";
    heading.style.margin = "40px";
    heading.style.marginLeft = "60px";
  }
};

window.onresize = resizeHeader;
window.onload = resizeHeader;


function resizeHeader() {
    var headSize = document.getElementsByTagName("header")[0].clientHeight;
    document.getElementsByClassName("container")[0].style.marginTop = headSize + "px";
}
