$(document).ready(function(){
	var fontSize = 15;
	var lineHeightFrac = 1.2;
	var lineHeight = fontSize*lineHeightFrac;
	$("div").css("font-size", fontSize);
	$("div p").css("line-height", lineHeightFrac.toString() + 'em');
	var scrollOn = false;
	var scrollPos = 0;
	var scrollMax = 0;
	var scrollTop = $("#portrait").offset().top;

	$("#personal").height($("img").height());
	var personalHeight = $("#personal").height();

	var whichChara = 0;
	var selNum = 1;
	var display = function(whichChara) {
		var thisChara = allChara[whichChara];
		$("#nomen").text(thisChara.nomen.toUpperCase());
		$("#portrait").attr('src', 'assets/' + thisChara.img);
		$("#desc").text(thisChara.desc);
		$(".chri").text(thisChara.chri);
		$(".comb").text(thisChara.comb);
		$(".magi").text(thisChara.magi);
		$(".sanc").text(thisChara.sanc);
		$(".scou").text(thisChara.scou);
		$(".thie").text(thisChara.thie);
		$(".prof").text(thisChara.prof.toUpperCase());
		$(".stam").text(thisChara.stam);
		$(".def").text(thisChara.def);
		$(".shards").text(thisChara.shards);
		var possString = ""
		for (item in thisChara.poss) {
			possString += thisChara.poss[item];
			if(item != thisChara.poss.length - 1){
				possString += ", ";
			}
		}
		$(".poss").text(possString);
	}
	var hideShow = function(whichChara) {
		if(whichChara == 0){
			$("#2").addClass("hidden");
			if(selNum == 2){ selNum = 1; } //unselect hidden keys
		} else {
			$("#2").removeClass("hidden");
		}
		if(whichChara == 5){
			$("#1").addClass("hidden");
			if(selNum == 1){ selNum = 2; } //unselect hidden keys
		} else {
			$("#1").removeClass("hidden");
		}
	}
	var highlight = function(selNum) {
		//Highlights the currently selected key
		var zeTag = "#" + selNum.toString();
		$(".input-sel").removeClass("input-sel");
		$(zeTag).addClass("input-sel");
	}
	var numKey = function(num) {
		var zeTag = "#" + num.toString();
		if(! $(zeTag).hasClass("hidden")){ //don't run hidden keys
			selNum = num;
			runKey();
		}
	}
	var runKey = function() {
		if(selNum == 1){
			whichChara = whichChara + 1;
			if(whichChara > 5){ whichChara = 5; }
			display(whichChara);
			hideShow(whichChara);
			checkOverflow($("#desc"),$("#personal"));
		} else if (selNum == 2) {
			whichChara = whichChara - 1;
			if(whichChara < 0){ whichChara = 0; }
			display(whichChara);
			hideShow(whichChara);
			checkOverflow($("#desc"),$("#personal"));
		} else if (selNum == 3) {
			$("#desc-etc").toggleClass("hidden");
			$("#info-etc").toggleClass("hidden");
			scrollPos = 0;
			checkOverflow($("#desc"),$("#personal"));
		} else if (selNum == 4) {
			$(".input-el").addClass("hidden");
			$("#charaPrompt").removeClass("hidden");
			selNum = -1; //disable hidden keys
		}
		highlight(selNum);
	}
	var checkOverflow = function($textObj, $containerObj) {
		var $ellip = $textObj.next(".ellip");
		if($textObj.height() > $containerObj.height()){
			console.log($textObj.height().toString() + " > " + $containerObj.height().toString())
			var textOff = $textObj.offset();
			$ellip.removeClass("hidden");
			scrollOn = true;
			scrollMax = Math.floor($textObj.height() / $containerObj.height());
			scrollPos = 0;
			$textObj.offset({top:scrollTop});
			console.log("containerObj.height " + $containerObj.height().toString());
			console.log("textObj.height " + $textObj.height().toString());
			console.log("scrollMax set to " + scrollMax.toString());
		} else {
			$ellip.addClass("hidden");
			scrollOn = false;
			scrollPos = 0;
			$textObj.offset({top:scrollTop});
		}
	}
	var checkTable = function($table, $nextTable, topLimit){
		if($table.width() <= $(window).width() - 40){
			var tableTop = $table.offset().top;
			console.log("table extent:");
			console.log(tableTop + $table.height());
			console.log("window extent:");
			console.log($(window).height());
			if(tableTop + $table.height() > topLimit){
				//
				//switch stats to desc pane
				//
				$table.addClass("hidden");
			} else {
				$table.removeClass("black-out");
			}
			if(topLimit - ( tableTop + $table.height() ) > 40){
				//add breathing space
				$(".stats").css("margin-top", 25);
				$("#personal").css("margin-top", 25);
				scrollTop = $("#portrait").offset().top;
				if(topLimit - ( tableTop + $table.height() ) > 80){
					$(".stats").css("margin-top", 35);
					$("table tr td").css("padding-bottom", 20);
				}
			}
			return false; //stop checking tables
		} else {
			$table.addClass("hidden");
			$nextTable.removeClass("hidden");
			return true; //continue checking tables
		}
	}
	var statsTable = function() {
		//initialize normal breathing space
		$(".stats").css("margin-top", 10);
		$("#personal").css("margin-top", 10);
		$("table tr td").css("padding-bottom", 10);
		scrollTop = $("#portrait").offset().top;

		var inpTop = $(".input-box").offset().top + 5;
		$("table").addClass("hidden");
		$("table").addClass("black-out");
		$(".wide-6").removeClass("hidden");
		if(checkTable($(".wide-6"), $(".wide-3"), inpTop)){
			if(checkTable($(".wide-3"), $(".wide-2"), inpTop)){
				if(checkTable($(".wide-2"), $(".wide-1"), inpTop)){
					checkTable($(".wide-1"), $(".wide-1"), inpTop);	
				}	
			}
		}
	}
	var charaPromptDown = function() {
		$("#charaPrompt").addClass("hidden");
		$(".input-el").removeClass("hidden");
		if(whichChara == 5){
			selNum = 2;
		} else {
			selNum = 1;
		}
		hideShow(whichChara);
		highlight(selNum);
	}

	display(whichChara);
	checkOverflow($("#desc"), $("#personal"));
	statsTable();

	var keyRange = 4;
	$(document).on("keydown", function(event){
		console.log(event.which);

		if(event.which >= 49 && event.which < 49 + keyRange && selNum != -1){
			//numerical keys
			numKey(event.which - 48);
		} else if(event.which >= 97 && event.which < 97 + keyRange && selNum != -1){
			//numpad
			numKey(event.which - 96);
		} else if(event.which == 13 || event.which == 32 && selNum != -1){
			//enter or spacebar
			runKey();
		} else if(event.which == 78 && !($("#charaPrompt").hasClass("hidden")) ) {
			//'n'
			charaPromptDown();
		} else if(event.which == 89 && !($("#charaPrompt").hasClass("hidden")) ){
			//'y'
			alert("Adventure coming soon!");
		} else if(event.which == 39 && scrollOn && !$("#desc-etc").hasClass("hidden")){
			// right arrowkey
			var $activeEllip = $(".ellip").not(".hidden");
			var $textToMove = $activeEllip.siblings("p");
			var $ellipText = $activeEllip.children("p");
			scrollPos += 1;
			if(scrollPos > scrollMax){ scrollPos=0; }
			$textToMove.offset({top:scrollTop-personalHeight*scrollPos});
		}
		event.preventDefault();
	});
	$(".input-el p").on("click", function(){
		var selString = $(this).attr("id");
		selNum = parseInt(selString);
		runKey();
	});

	$(window).resize(function(){
		checkOverflow($("#desc"), $("#personal"));
		statsTable();
	});
});