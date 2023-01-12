<?php
$z[0]=Array("global","",264,290);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",334,361);
$z[1][4]['name']="cfg_keywords";
$z[2]=Array("global","",404,434);
$z[2][4]['name']="cfg_description";
$z[3]=Array("include","",835,871);
$z[3][4]['filename']="head.htm";
$z[4]=Array("channelartlist","\r\n<div class=\"notice\"> \r\n    <h4> <a href=\"{dede:field.typedir/}\">{dede:field.typename/}</a> \r\n     <div class=\"not-r\"> \r\n      <span></span> \r\n      <span></span> \r\n     </div> </h4> \r\n    <div class=\"conte\"> \r\n     {dede:arclist typeid='' att=''  limit='0,2'  titlelen='120' infolen=''  orderby='pubdate' }\r\n<time>[field:stime/]</time>\r\n     <h5> <a href=\"[field:arcurl/]\" target=\"_blank\" title=\"[field:title/]\">[field:title function=\"cn_substr(@me,140)\"/]</a></h5>\r\n{/dede:arclist}\r\n     <p><br /> </p> \r\n    </div> \r\n   </div>\r\n",894,1483);
$z[4][4]['typeid']="71,0";
$z[5]=Array("sql","[field:content/]",3310,3399);
$z[5][4]['sql']="Select * from dede_addon_suipian where aid=34";
$z[6]=Array("channelartlist","\r\n<div class=\"news-{dede:global name=itemindex runphp='yes'}\$a=\"left\"; \$b=\"right\";if (@me==1) @me=\$a; else @me=\$b;{/dede:global} ani               \" swiper-animate-effect=\"fadeInLeft\" swiper-animate-duration=\"0.5s\" swiper-animate-delay=\"0.3s\" swiper-animate-style-cache=\" \" style=\"visibility: hidden;\"> \r\n       <h4> {dede:field.typename/} </h4> \r\n       <ul> \r\n        <div id=\"autonews1\"> \r\n         {dede:arclist typeid='' att=''  limit='0,5'  titlelen='120' infolen=''  orderby='pubdate' }\r\n<li><a href=\"[field:arcurl/]\" target=\"\"><i class=\"fa fa-angle-double-right\"></i><h5>[field:title function=\"cn_substr(@me,140)\"/]</h5><time>[field:stime/]</time></a></li>\r\n{/dede:arclist}\r\n          \r\n        </div> \r\n       </ul> \r\n      </div>\r\n",6852,7651);
$z[6][4]['typeid']="26,27";
$z[7]=Array("sql","[field:content/]",8230,8319);
$z[7][4]['sql']="Select * from dede_addon_suipian where aid=32";
$z[8]=Array("sql","[field:content/]",8773,8862);
$z[8][4]['sql']="Select * from dede_addon_suipian where aid=30";

?>