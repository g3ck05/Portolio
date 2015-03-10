//Document ready function
$( document ).ready(function() {
	
});

//popout set to false
var popout = false;
//Checking scroll for popout
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll > 70 && popout == false)
	{
		popout = true;
		$("#popout").css("left","0");
		$("#popout").addClass("trans");
		$("#popout").css("opacity","1");
		$("#l1").css("left","0");
	}
	if(scroll < 70 && popout == true)
	{
		popout = false;
		$("#popout").css("opacity","0");
		$("#popout").css("left","-100px");
		$("#l1").css("left","-100px");
		$("#l2").css("left","-100px");
		$("#l3").css("left","-100px");
		$("#l3").css("top","-100px");
		$("#l4").css("top","-100px");
		$("#l4").css("left","-100px");
		//$("#popout").removeClass("trans");
		//alert("fgfgf");
	}
});

//Check popout for hover
function popoutHover()
{
	$("#l2").css("left","100px");
	$("#l3").css("left","100px");
	$("#l3").css("top","100px");
	$("#l4").css("top","100px");
	$("#l4").css("left","0");	
}
function popoutOut()
{
	$("#l2").css("left","-100px");
	$("#l3").css("left","-100px");
	$("#l3").css("top","-100px");
	$("#l4").css("top","-100px");
	$("#l4").css("left","-100px");
}

//Scroll to element function
function scrollToElement(box)
{
	$('html, body').animate({
            scrollTop: $("#" + box).offset().top + 'px'
        }, 500);
}


function openCar(a)
{
	switch(a)
	{
	case "car1":
	if($("#car1").css("height") == "450px")
	{
		$("#car1").css("height","70px");
		$("#car2").css("height","70px");
		$("#car3").css("height","70px");
	}
	else
	{
		$("#car1").css("height","450px");
		$("#car2").css("height","70px");
		$("#car3").css("height","70px");
	}
	
	break;
	case "car2":
	if($("#car2").css("height") == "450px")
	{
		$("#car1").css("height","70px");
		$("#car2").css("height","70px");
		$("#car3").css("height","70px");
	}
	else
	{
		$("#car1").css("height","70px");
		$("#car2").css("height","450px");
		$("#car3").css("height","70px");
	}
	break;
	case "car3":
	if($("#car3").css("height") == "450px")
	{
		$("#car1").css("height","70px");
		$("#car2").css("height","70px");
		$("#car3").css("height","70px");
	}
	else
	{
		$("#car1").css("height","70px");
		$("#car2").css("height","70px");
		$("#car3").css("height","450px");
	}
	break;
	}
}


// WORK DIV SLIDER
function workSlider(a,x)
{
	switch(a)
	{
		case "right":
			$("#hoverLinkA").attr("href", "/cat/");
			$("#work" + x).css("margin-left","-100%");
			$(".rightArrow").css("background-color","rgba(0,0,0,0.5)");
			$(".leftArrow").css("background-color","rgba(0,0,0,0.2)");
		break;
		case "left":
			if(x == 3)
			$("#work" + x).css("margin-left","12.5%");
			else
			$("#work" + x).css("margin-left","0");
			$("#hoverLinkA").attr("href", "/569/");
			$(".rightArrow").css("background-color","rgba(0,0,0,0.2)");
			$(".leftArrow").css("background-color","rgba(0,0,0,0.5)");
		break;
	}
}





