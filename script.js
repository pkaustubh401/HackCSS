var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});


document.getElementById('copy_button').onclick = function() {
    /* Get the text field */
    
    var x=this.parentElement.parentElement.children[1];
  
    /* Select the text field */
    x.select();
    x.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    //alert("Copied the text: " + x.value);
};

