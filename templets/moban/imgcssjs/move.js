//2016.03.11

$(document).ready(function(){
	//公告部分
	$("#ipmt_1").mouseover(function(){
		$(".sy_impt_n_a").css({"top":"-150px"});
		$("#ipmt_1_on").show();
		$("#ipmt_2_on,#ipmt_3_on").hide();
	});
	$("#ipmt_2").mouseover(function(){
		$(".sy_impt_n_a").css({"top":"-100px"});
		$("#ipmt_2_on").show();
		$("#ipmt_1_on,#ipmt_3_on").hide();
	});
	$("#ipmt_3").mouseover(function(){
		$(".sy_impt_n_a").css({"top":"-50px"});
		$("#ipmt_3_on").show();
		$("#ipmt_1_on,#ipmt_2_on").hide();
	});
	
	
	//注册登录部分
	$(".login_dl").click(function(){
        $(".sy_login_dl").show();
        $(".sy_login_zc").hide();
        $(this).css({"background":"rgba(0,0,0,0.5)"});
        $(".login_sq").css({"background":"rgba(0,0,0,0.2)"});
	});
	$(".login_sq").click(function(){
		$(".sy_login_dl").hide();
        $(".sy_login_zc").show();
        $(this).css({"background":"rgba(0,0,0,0.5)"});
        $(".login_dl").css({"background":"rgba(0,0,0,0.2)"});
	});
	

	//财经资讯
	$("#cj_wh").mouseover(function(){
		$("#cj_wh_on").show();
		$("#cj_hj_on,#cj_zj_on,#cj_gs_on,#cj_yh_on").hide();
	});
	$("#cj_hj").mouseover(function(){
		$("#cj_hj_on").show();
		$("#cj_wh_on,#cj_zj_on,#cj_gs_on,#cj_yh_on").hide();
		getNewsList('autonews2','gold','');
	});
	$("#cj_zj").mouseover(function(){
		$("#cj_zj_on").show();
		$("#cj_wh_on,#cj_hj_on,#cj_gs_on,#cj_yh_on").hide();
		getNewsList('autonews3','politics','');
	});
	$("#cj_gs").mouseover(function(){
		$("#cj_gs_on").show();
		$("#cj_wh_on,#cj_hj_on,#cj_zj_on,#cj_yh_on").hide();
		getNewsList('autonews4','stock','');
	});
	$("#cj_yh").mouseover(function(){
		$("#cj_yh_on").show();
		$("#cj_wh_on,#cj_hj_on,#cj_zj_on,#cj_gs_on").hide();
		getNewsList('autonews5','bank','');
	});

	//重要公告
	$("#gg_zy").mouseover(function(){
		$("#gg_zy_on").show();
		$("#gg_xs_on,#gg_wh_on").hide();
	});
	$("#gg_xs").mouseover(function(){
		$("#gg_xs_on").show();
		$("#gg_zy_on,#gg_wh_on").hide();
	});
	$("#gg_wh").mouseover(function(){
		$("#gg_wh_on").show();
		$("#gg_zy_on,#gg_xs_on").hide();
	});
	
	//外汇资讯
	$("#wh_oy").mouseover(function(){
		$("#wh_oy_on").show();
		$("#wh_my_on,#wh_rmb_on,#wh_ry_on,#wh_on_on").hide();
	});
	$("#wh_my").mouseover(function(){
		$("#wh_my_on").show();
		$("#wh_oy_on,#wh_rmb_on,#wh_ry_on,#wh_on_on").hide();
		getNewsList('autonews7','forex','usd');
	});
	$("#wh_rmb").mouseover(function(){
		$("#wh_rmb_on").show();
		$("#wh_oy_on,#wh_my_on,#wh_ry_on,#wh_on_on").hide();
		getNewsList('autonews8','forex','rmb');
	});
	$("#wh_ry").mouseover(function(){
		$("#wh_ry_on").show();
		$("#wh_oy_on,#wh_my_on,#wh_rmb_on,#wh_on_on").hide();
		getNewsList('autonews9','forex','jpy');
	});
	$("#wh_on").mouseover(function(){
		$("#wh_on_on").show();
		$("#wh_oy_on,#wh_my_on,#wh_rmb_on,#wh_ry_on").hide();
		getNewsList('autonews10','forex','audnzd');
	});
	
	//贵金属资讯
	$("#gjs_js").mouseover(function(){
		$("#gjs_js_on").show();
		$("#gjs_jj_on,#gjs_hj_on").hide();
	});
	$("#gjs_jj").mouseover(function(){
		$("#gjs_jj_on").show();
		$("#gjs_js_on,#gjs_hj_on").hide();
		getNewsList('autonews12','gold','news');
	});
	$("#gjs_hj").mouseover(function(){
		$("#gjs_hj_on").show();
		$("#gjs_js_on,#gjs_jj_on").hide();
		getNewsList('autonews13','gold','market');
	});
	
	//数据-左
	$("#data_whzf").mouseover(function(){
		$("#table_whzp").show();
		$("#table_whjcp,#table_flzs").hide();
	});
	$("#data_flzs").mouseover(function(){
		$("#table_flzs").show();
		$("#table_whzp,#table_whjcp").hide();
	});
	$("#data_whjc").mouseover(function(){
		$("#table_whjcp").show();
		$("#table_whzp,#table_flzs").hide();
	});
	
	
	//数据-右
	$("#data_hq").mouseover(function(){
		$("#table_jshq").show();
		$("#table_gpzs,#table_yyhq").hide();
	});
	$("#data_gp").mouseover(function(){
		$("#table_gpzs").show();
		$("#table_jshq,#table_yyhq").hide();
	});
	$("#data_yy").mouseover(function(){
		$("#table_yyhq").show();
		$("#table_jshq,#table_gpzs").hide();
	});
});

//3月23日about部分
$(function(){
	var dl1 = $(".ab-l-lan dl").eq(0);
	var dt1 = $(".ab-l-lan dl dt").eq(0);
	$(dt1).toggle(
		function(){
			$(dl1).find("dd").css("display","block");
			$(this).addClass("dt-mar dt-fa");
		},
		function(){
			$(dl1).find("dd").css("display","none");
			$(this).removeClass("dt-mar dt-fa");
		}
	);
	
	var dl2 = $(".ab-l-lan dl").eq(1);
	var dt2 = $(".ab-l-lan dl dt").eq(1);
	$(dt2).toggle(
		function(){
			$(dl2).find("dd").css("display","block");
			$(this).addClass("dt-mar dt-fa");
		},
		function(){
			$(dl2).find("dd").css("display","none");
			$(this).removeClass("dt-mar dt-fa");
		}
	);
	
	var dl3 = $(".ab-l-lan dl").eq(2);
	var dt3 = $(".ab-l-lan dl dt").eq(2);
	$(dt3).toggle(
		function(){
			$(dl3).find("dd").css("display","block");
			$(this).addClass("dt-mar dt-fa");
		},
		function(){
			$(dl3).find("dd").css("display","none");
			$(this).removeClass("dt-mar dt-fa");
		}
	);
	
	var dl4 = $(".ab-l-lan dl").eq(3);
	var dt4 = $(".ab-l-lan dl dt").eq(3);
	$(dt4).toggle(
		function(){
			$(dl4).find("dd").css("display","block");
			$(this).addClass("dt-mar dt-fa");
		},
		function(){
			$(dl4).find("dd").css("display","none");
			$(this).removeClass("dt-mar dt-fa");
		}
	);
	
	var dl5 = $(".ab-l-lan dl").eq(4);
	var dt5 = $(".ab-l-lan dl dt").eq(4);
	$(dt5).toggle(
		function(){
			$(dl5).find("dd").css("display","block");
			$(this).addClass("dt-mar dt-fa");
		},
		function(){
			$(dl5).find("dd").css("display","none");
			$(this).removeClass("dt-mar dt-fa");
		}
	);
	
	var dl6 = $(".ab-l-lan dl").eq(5);
	var dt6 = $(".ab-l-lan dl dt").eq(5);
	$(dt6).toggle(
		function(){
			$(dl6).find("dd").css("display","block");
			$(this).addClass("dt-mar dt-fa");
		},
		function(){
			$(dl6).find("dd").css("display","none");
			$(this).removeClass("dt-mar dt-fa");
		}
	);
	
	var dl7 = $(".ab-l-lan dl").eq(6);
	var dt7 = $(".ab-l-lan dl dt").eq(6);
	$(dt7).toggle(
		function(){
			$(dl7).find("dd").css("display","block");
			$(this).addClass("dt-mar dt-fa");
		},
		function(){
			$(dl7).find("dd").css("display","none");
			$(this).removeClass("dt-mar dt-fa");
		}
	);
});


//about us页面手风琴
$(function(){
	$(".au-sfq-gjs").mouseover(function(){
		$(this).css({"width":"400px"});
		$(this).find("span").removeClass("sfq-off");
		$(this).find("span").addClass("sfq-on");
		$(this).find("a").addClass("sfq-on-a");
		$(".au-sfq-gjs .sfq-zg").show();
		
		$(".au-sfq-wh,.au-sfq-ny,.au-sfq-cfd,.au-sfq-gz").css({"width":"200px"});
		$(".au-sfq-wh,.au-sfq-ny,.au-sfq-cfd,.au-sfq-gz").find("span").removeClass("sfq-on");
		$(".au-sfq-wh,.au-sfq-ny,.au-sfq-cfd,.au-sfq-gz").find("span").addClass("sfq-off");
		$(".au-sfq-wh .sfq-zg,.au-sfq-ny .sfq-zg,.au-sfq-cfd .sfq-zg,.au-sfq-gz .sfq-zg").hide();
	});
	
	$(".au-sfq-wh").mouseover(function(){
		$(this).css("width","400px");
		$(this).find("span").removeClass("sfq-off");
		$(this).find("span").addClass("sfq-on");
		$(this).find("a").addClass("sfq-on-a");
		$(".au-sfq-wh .sfq-zg").show();
		
		$(".au-sfq-gjs,.au-sfq-ny,.au-sfq-cfd,.au-sfq-gz").css({"width":"200px"});
		$(".au-sfq-gjs,.au-sfq-ny,.au-sfq-cfd,.au-sfq-gz").find("span").removeClass("sfq-on");
		$(".au-sfq-gjs,.au-sfq-ny,.au-sfq-cfd,.au-sfq-gz").find("span").addClass("sfq-off");
		$(".au-sfq-gjs .sfq-zg,.au-sfq-ny .sfq-zg,.au-sfq-cfd .sfq-zg,.au-sfq-gz .sfq-zg").hide();
	});
	
	$(".au-sfq-ny").mouseover(function(){
		$(this).css({"width":"400px"});
		$(this).find("span").removeClass("sfq-off");
		$(this).find("span").addClass("sfq-on");
		$(this).find("a").addClass("sfq-on-a");
		$(".au-sfq-ny .sfq-zg").show();
		
		$(".au-sfq-wh,.au-sfq-gjs,.au-sfq-cfd,.au-sfq-gz").css({"width":"200px"});
		$(".au-sfq-wh,.au-sfq-gjs,.au-sfq-cfd,.au-sfq-gz").find("span").removeClass("sfq-on");
		$(".au-sfq-wh,.au-sfq-gjs,.au-sfq-cfd,.au-sfq-gz").find("span").addClass("sfq-off");
		$(".au-sfq-wh .sfq-zg,.au-sfq-gjs .sfq-zg,.au-sfq-cfd .sfq-zg,.au-sfq-gz .sfq-zg").hide();
	});
	
	$(".au-sfq-cfd").mouseover(function(){
		$(this).css({"width":"400px"});
		$(this).find("span").removeClass("sfq-off");
		$(this).find("span").addClass("sfq-on");
		$(this).find("a").addClass("sfq-on-a");
		$(".au-sfq-cfd .sfq-zg").show();
		
		$(".au-sfq-wh,.au-sfq-gjs,.au-sfq-ny,.au-sfq-gz").css({"width":"200px"});
		$(".au-sfq-wh,.au-sfq-gjs,.au-sfq-ny,.au-sfq-gz").find("span").removeClass("sfq-on");
		$(".au-sfq-wh,.au-sfq-gjs,.au-sfq-ny,.au-sfq-gz").find("span").addClass("sfq-off");
		$(".au-sfq-wh .sfq-zg,.au-sfq-gjs .sfq-zg,.au-sfq-ny .sfq-zg,.au-sfq-gz .sfq-zg").hide();
	});
	
	$(".au-sfq-gz").mouseover(function(){
		$(this).css({"width":"400px"});
		$(this).find("span").removeClass("sfq-off");
		$(this).find("span").addClass("sfq-on");
		$(this).find("a").addClass("sfq-on-a");
		$(".au-sfq-gz .sfq-zg").show();
		
		$(".au-sfq-wh,.au-sfq-gjs,.au-sfq-ny,.au-sfq-cfd").css({"width":"200px"});
		$(".au-sfq-wh,.au-sfq-gjs,.au-sfq-ny,.au-sfq-cfd").find("span").removeClass("sfq-on");
		$(".au-sfq-wh,.au-sfq-gjs,.au-sfq-ny,.au-sfq-cfd").find("span").addClass("sfq-off");
		$(".au-sfq-wh .sfq-zg,.au-sfq-gjs .sfq-zg,.au-sfq-ny .sfq-zg,.au-sfq-cfd .sfq-zg").hide();
	});
});

//3.26实时行情部分
$(function(){
	$("#tab-11").mouseover(function(){
		$("#table_whzp").show();
		$("#table_whjcp,#table_flzs").hide()
	});
	$("#tab-22").mouseover(function(){
		$("#table_whjcp").show();
		$("#table_whzp,#table_flzs").hide()
	});
	$("#tab-33").mouseover(function(){
		$("#table_flzs").show();
		$("#table_whzp,#table_whjcp").hide()
	});
	
	$("#tab-44").mouseover(function(){
		$("#table_jshq").show();
		$("#table_gpzs,#table_yyhq").hide()
	});
	$("#tab-55").mouseover(function(){
		$("#table_gpzs").show();
		$("#table_jshq,#table_yyhq").hide()
	});
	$("#tab-66").mouseover(function(){
		$("#table_yyhq").show();
		$("#table_jshq,#table_gpzs").hide()
	});
});
$(function(){
	$(".ting-left,.ting-right").css({"left":"0"});	
});
//财经资讯tab
$(function(){
	var cj_li = $("#cjzx_wh .biaoqian").find("li");
	var cj_nr = $("#cjzx_wh").find(".caijing");
	
	cj_li.eq(0).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(0).show();
	});
	cj_li.eq(1).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(1).show();
	});
	cj_li.eq(2).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(2).show();
	});
	cj_li.eq(3).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(3).show();
	});
	cj_li.eq(4).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(4).show();
	});
	cj_li.eq(5).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(5).show();
	});
	cj_li.eq(6).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(6).show();
	});
	cj_li.eq(7).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(7).show();
	});
});
$(function(){
	var cj_li = $("#cjzx_hj .biaoqian").find("li");
	var cj_nr = $("#cjzx_hj").find(".caijing");
	
	cj_li.eq(0).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(0).show();
	});
	cj_li.eq(1).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(1).show();
	});
	cj_li.eq(2).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(2).show();
	});
});
$(function(){
	var cj_li = $("#cjzx_cj .biaoqian").find("li");
	var cj_nr = $("#cjzx_cj").find(".caijing");
	
	cj_li.eq(0).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(0).show();
	});
	cj_li.eq(1).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(1).show();
	});
	cj_li.eq(2).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(2).show();
	});
	cj_li.eq(3).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(3).show();
	});
	cj_li.eq(4).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(4).show();
	});
	cj_li.eq(5).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(5).show();
	});
});
$(function(){
	var cj_li = $("#cjzx_gs .biaoqian").find("li");
	var cj_nr = $("#cjzx_gs").find(".caijing");
	
	cj_li.eq(0).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(0).show();
	});
	cj_li.eq(1).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(1).show();
	});
	cj_li.eq(2).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(2).show();
	});
	cj_li.eq(3).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(3).show();
	});
	cj_li.eq(4).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(4).show();
	});
	cj_li.eq(5).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(5).show();
	});
});
$(function(){
	var cj_li = $("#cjzx_yh .biaoqian").find("li");
	var cj_nr = $("#cjzx_yh").find(".caijing");
	
	cj_li.eq(0).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(0).show();
	});
	cj_li.eq(1).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(1).show();
	});
	cj_li.eq(2).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(2).show();
	});
	cj_li.eq(3).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(3).show();
	});
	cj_li.eq(4).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(4).show();
	});
	cj_li.eq(5).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(5).show();
	});
	cj_li.eq(6).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(6).show();
	});
	cj_li.eq(7).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(7).show();
	});
});
$(function(){
	var cj_li = $("#cjzx_zs .biaoqian").find("li");
	var cj_nr = $("#cjzx_zs").find(".caijing");
	
	cj_li.eq(0).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(0).show();
	});
	cj_li.eq(1).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(1).show();
	});
	cj_li.eq(2).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(2).show();
	});
	cj_li.eq(3).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(3).show();
	});
	cj_li.eq(4).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(4).show();
	});
	cj_li.eq(5).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(5).show();
	});
});
$(function(){
	var cj_li = $("#cjzx_ny .biaoqian").find("li");
	var cj_nr = $("#cjzx_ny").find(".caijing");
	
	cj_li.eq(0).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(0).show();
	});
	cj_li.eq(1).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(1).show();
	});
	cj_li.eq(2).mouseover(function(){
		cj_nr.hide();
		cj_nr.eq(2).show();
	});

});