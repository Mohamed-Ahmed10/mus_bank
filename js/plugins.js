$('document').ready(function(){
$("html").niceScroll();


//intial accordion
$(".navbar-nav li:not('.lanuages_select')").click(function()
	{
		$(this).addClass('active').siblings().removeClass('active');
	});
$(".lanuages_select a").click(function()
	{
		$(this).css('background-color','transparent')
	});

/* sell & pay  */
$(".currencies_button").on('click',function()
{
	$(this).siblings().slideToggle(800);
	$(this).children().toggleClass('opan');
});

/* change page*/
$(".banks").children().click(function()
	{
		$(".pay").append("<p>ffffffffffff</p>");
	});
$(".header>div").click(function()
	{
		$(".blog .row").slideToggle(600);
	});
$(".pay_input").on("keyup" , function()
                                       {
                                          $(".pay_output").text(" دينار جزائرى "+$(".pay_input").val()*190);
                                       });
});




