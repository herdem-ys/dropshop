function search(){
      var value = $("#searchInput").val().toLowerCase(); // Der Wert im searchInput wird zu lowercase konvertiert
      $("#myTable tr").filter(function() { 
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); // hier
      });
}


window.onload = function() {
  NProgress.start();
}


$(function (){
  NProgress.done();
  searchEnter();
});


function searchEnter() {
  var input = $("#searchInput");
  $(input).on("keyup",function(event) {
    if(event.keyCode === 13){
      event.preventDefault();
      $("#knopf").click();
    }
  });
}