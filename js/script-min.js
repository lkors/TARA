function setFooterStyle(){var o=$(window).height(),e=$("#footer").outerHeight(),t=$("#footer").position().top+e;t<o?$("#footer").css("margin-top",o-t+"px"):$("#footer").css("margin-top",""),$("#footer").removeClass("invisible")}$("#accordion div").click(function(){$(this).find("i").toggleClass("fa-chevron-down fa-chevron-up")}),$(document).ready(function(){setFooterStyle(),window.onresize=setFooterStyle}),$("#accordion").click(function(o){$(".collapse").collapse("hide")});