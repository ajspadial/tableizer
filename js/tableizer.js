$(document).on("ready", function(){

	$("#btia").click( function() {
		// textarea content
		var $table = $("<table/>");
		var content = $("#excel").val();
		var rows = content.split("\n");
		rows.forEach(function(row) {
		     var $row = $("<tr/>");
		     var cells = row.split("\t");
		     cells.forEach(function(cell) {
			  var $cell = $("<td/>").text(cell);
			  $row.append($cell);
			  });
		     $table.append($row);
		     });
		$("#render-area").html($table);
	     });

	  });
