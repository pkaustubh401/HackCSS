var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});


var y=document.getElementsByClassName('btn');

for(var i=0, len=y.length|0; i<len; i=i+1|0){
    y[i].onclick = function() {
        /* Get the text field */
        
        var x=this.parentElement.parentElement.children[1];
      
        /* Select the text field */
        x.select();
        x.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + x.value);
    };
}



