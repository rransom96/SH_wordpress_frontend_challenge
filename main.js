$(document).ready(function() {
	$(".menu-item-text").click(function(){
		if ($(this).css("background-color") != "rgb(229, 229, 229)") {
			$(this).css("background-color", "#e5e5e5");
			if ($(this).is($(".item1 span"))) {
				$(".menu1").show();
			}
			if ($(this).is($(".item2 span"))) {
				$(".menu2").show();
			}
			if ($(this).is($(".item1 span")) && $(".item2 span").css("background-color") == "rgb(229, 229, 229)") {
				$(".item2 span").css("background-color", "");
				$(".menu1").show();
				$(".menu2").hide();
			}
			if ($(this).is($(".item2 span")) && $(".item1 span").css("background-color") == "rgb(229, 229, 229)") {
				$(".item1 span").css("background-color", "");
				$(".menu2").show();
				$(".menu1").hide();
			}
		} else {
			$(this).css("background-color", "");
			if ($(this).is($(".item1 span"))) {
				$(".menu1").hide();
			}
			if ($(this).is($(".item2 span"))) {
				$(".menu2").hide();
			}
		}
	});

	var width = $(".img-wrapper").width();
	$(".img-wrapper img").imagefill();

	$(".africa-menu").click(function() {
		$(".featured").hide();
		$(".americas").hide();
		$(".oceania").hide();
		$(".europe").hide();
		$(".africa").show();
		$(".menu1").hide();
		$(".item1 span").css("background-color", "");
	});

	$(".europe-menu").click(function() {
		$(".featured").hide();
		$(".americas").hide();
		$(".oceania").hide();
		$(".africa").hide();
		$(".europe").show();
		$(".menu1").hide();
		$(".item1 span").css("background-color", "");
	});

	$(".americas-menu").click(function() {
		$(".featured").hide();
		$(".africa").hide();
		$(".oceania").hide();
		$(".europe").hide();
		$(".americas").show();
		$(".menu1").hide();
		$(".item1 span").css("background-color", "");
	});

	$(".oceania-menu").click(function() {
		$(".featured").hide();
		$(".americas").hide();
		$(".africa").hide();
		$(".europe").hide();
		$(".oceania").show();
		$(".menu1").hide();
		$(".item1 span").css("background-color", "");
	});

	$(".logo").click(function() {
		$(".oceania").hide();
		$(".americas").hide();
		$(".africa").hide();
		$(".europe").hide();
		$(".featured").show();
		$(".menu1").hide();
		$(".item1 span").css("background-color", "");
	});

	var sectionNames = ['africa', 'americas', 'europe', 'asia and oceania'];

	function searchBox() {
		for (var i in sectionNames) {
			console.log(i);
			if (sectionNames[i].includes($(".search-box").val().toLowerCase())) {
				console.log('check point 1');
				if (sectionNames[i] == "asia and oceania") {
					console.log('working');
					$(".featured").hide();
					$(".americas").hide();
					$(".africa").hide();
					$(".europe").hide();
					$(".oceania").show();
				} else {
					for (var a in sectionNames) {
						if (sectionNames[a] != sectionNames[i] && sectionNames[a] != 'asia and oceania') {
							$("." + sectionNames[a]).hide();
						} else {
							$(".oceania").hide();
						}
					$(".featured").hide();
					$("." + sectionNames[i]).show();
					}
				}
			}
		}
	}

	$(document).keypress(function(e) {
    	if(e.which == 13) {
    		searchBox();
    	}
    });

    $(".icon").click(function() {
    	searchBox();
    });
});