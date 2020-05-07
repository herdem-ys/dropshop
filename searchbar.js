function search(){
   NProgress.start();
      var value = $("#searchInput").val().toLowerCase(); // Der Wert im searchInput wird zu lowercase konvertiert
      $("#myTable tr").filter(function() { 
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); // hier
      });
      NProgress.done();
}


window.onload = function() {
  NProgress.start();
  searchEnter();
}




$(function (){ // Macht natürlich keinen Sinn...
  NProgress.done();
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