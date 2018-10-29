//Script for accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
// Script for side navigation
function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "300px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
}

function open_modal(url){
  var frame = document.getElementById('frame');
  frame.setAttribute("src",url);
  document.getElementById('id01').style.display='block';

}

//function to see more
function see_more(project){
  var detalles = document.getElementById('txt-sm-'+project);
  var vermas = document.getElementById('see-more-'+project);
  var vermenos = document.getElementById('see-less-'+project);
   if(detalles.style.display == 'none'){
        vermas.style.display = 'none'
        detalles.style.display = 'inline'
        vermenos.style.display = 'inline'
   }
   else{
        detalles.style.display = 'none'
        vermas.style.display = 'inline'
        vermenos.style.display = 'none'
   }

}

// Close side navigation
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
