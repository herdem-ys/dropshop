function search(){
      var value = $("#searchInput").val().toLowerCase(); // Der Wert im searchInput wird zu lowercase konvertiert
      $("#myTable tr").filter(function() { 
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); // hier
      });
}

