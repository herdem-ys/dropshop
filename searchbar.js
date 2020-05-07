function search(){
      var value = $("#searchInput").val().toLowerCase(); // Der Wert im searchInput wird zu lowercase konvertiert
      $("#myTable tr").filter(function() { 
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); // hier
      });
}


window.onload = function() {
//   (function( d ) {
//     'use strict';
//      d.addEventListener( 'contextmenu', function(e) { // Verhindert die Öffnung vom Kontextmenü
//            e.preventDefault();
//           }, false);
//  }( document ));
NProgress.start();
NProgress.done();

}




$(function (){ // Macht natürlich keinen Sinn...
  // NProgress.start();
  searchEnter();
});


function searchEnter() {
  var input = $("#searchInput");
  $(input).on("keyup",function(event) {
    if(event.keyCode === 13){
      event.preventDefault();
      $("#knopf").click();
      search();
    }
  });
}