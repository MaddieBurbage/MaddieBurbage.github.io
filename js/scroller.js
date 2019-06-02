window.onscroll = function() {
  var heading = document.getElementsByTagName("header")[0].firstElementChild;
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    heading.style.cssFloat = "left";
    heading.innerHTML = "MB";
    heading.style.margin = "10px";
  } else {
    heading.style.cssFloat = "initial";
    heading.innerHTML = "Maddie Burbage";
    heading.style.margin = "50px";
  }
};
