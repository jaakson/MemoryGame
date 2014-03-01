Array.prototype.randomize = function()
{
	var i = this.length, j, temp;
	while ( --i )
	{
		j = Math.floor( Math.random() * (i - 1) );
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
}

var card_list = ["glyphicon glyphicon-heart", "glyphicon glyphicon-heart",
"glyphicon glyphicon-tint", "glyphicon glyphicon-tint",
"glyphicon glyphicon-fire", "glyphicon glyphicon-fire",
"glyphicon glyphicon-tree-conifer", "glyphicon glyphicon-cloud",
"glyphicon glyphicon-music", "glyphicon glyphicon-tree-conifer",
"glyphicon glyphicon-cloud", "glyphicon glyphicon-music"];

// randomizes the list and populates the board with glyphs.
card_list.randomize();
$(document).ready(function(){
	for (var i = 1; i <= 12; i++) {
		var glyph_string = card_list[i-1];
		var num = i;
		var id = "#d"+num;
		$(id).find("span").addClass(glyph_string);
	};
});




var evenClick = true;
var first_card = undefined;
var second_card = undefined;


var points = 0; // stores points so far.

$(".inner").on("click", function() {

	if (evenClick) {
		first_card = $(this);
		evenClick = false;
		var glyph1 = first_card.find("span");		
		glyph1.fadeIn();
	}

	else {
		second_card = $(this);
		var id1 = first_card.attr("id");
		var id2 = second_card.attr("id");

		if (id1 !== id2) {
			evenClick = true;
			var glyph2 = second_card.find("span");
			glyph2.fadeIn();
			var glyph1 = first_card.find("span");
			var class1 = glyph1.attr("class");
			var class2 = glyph2.attr("class");
			if (class1 == class2) {
				first_card.addClass("winner").removeClass("inner").off();
				second_card.addClass("winner").removeClass("inner").off();
				points = points + 10;
				$("#points").text(points.toString());
			}
			else {
			glyph1.fadeOut();
			glyph2.fadeOut();
			points = points - 2;
			$("#points").text(points.toString());

			}
		}
		else {
			$("h4").fadeIn();
			$("h4").text("That's cheating, you know.");
			$("h4").delay(1600).fadeOut();
			points = points - 10;
			$("#points").text(points.toString());

		}
}
});






