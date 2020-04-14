

function search(){
      var value = $("#searchInput").val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
}

