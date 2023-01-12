<?php
$z[0]=Array("global","",264,290);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",334,361);
$z[1][4]['name']="cfg_keywords";
$z[2]=Array("global","",404,434);
$z[2][4]['name']="cfg_description";
$z[3]=Array("include","",835,871);
$z[3][4]['filename']="head.htm";
$z[4]=Array("sql","[field:content/]",2773,2862);
$z[4][4]['sql']="Select * from dede_addon_suipian where aid=34";
$z[5]=Array("channelartlist","\r\n<div class=\"news-{dede:global name=itemindex runphp='yes'}\$a=\"left\"; \$b=\"right\";if (@me==1) @me=\$a; else @me=\$b;{/dede:global} ani               \" swiper-animate-effect=\"fadeInLeft\" swiper-animate-duration=\"0.5s\" swiper-animate-delay=\"0.3s\" swiper-animate-style-cache=\" \" style=\"visibility: hidden;\"> \r\n       <h4> {dede:field.typename/} </h4> \r\n       <ul> \r\n        <div id=\"autonews1\"> \r\n         {dede:arclist typeid='' att=''  limit='0,5'  titlelen='120' infolen=''  orderby='pubdate' }\r\n<li><a href=\"[field:arcurl/]\" target=\"\"><i class=\"fa fa-angle-double-right\"></i><h5>[field:title function=\"cn_substr(@me,140)\"/]</h5><time>[field:stime/]</time></a></li>\r\n{/dede:arclist}\r\n          \r\n        </div> \r\n       </ul> \r\n      </div>\r\n",6314,7113);
$z[5][4]['typeid']="26,27";
$z[6]=Array("sql","[field:content/]",7692,7781);
$z[6][4]['sql']="Select * from dede_addon_suipian where aid=32";
$z[7]=Array("sql","[field:content/]",8235,8324);
$z[7][4]['sql']="Select * from dede_addon_suipian where aid=30";

?>