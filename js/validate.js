function validate(event) {
  const  flat = document.forms["observform"]["flatitude"].value;
  const  flong = document.forms["observform"]["flongitude"].value;
  

if(isNaN(flat) || flat > 90 || flat < -90 ){
    event.preventDefault(); 
    document.getElementById("flaterror").style.display = "inline";
    }
  else { 
        document.getElementById("flaterror").style.display = "none";
    }

if(isNaN(flong) || flong > 180 || flong < -180 ){
     event.preventDefault();
     document.getElementById("flongerror").style.display = "inline";
    }
  else { 
    document.getElementById("flongerror").style.display = "none";
   }

}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
