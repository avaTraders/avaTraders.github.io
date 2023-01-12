<div class="news-[field:global runphp='yes' name=autoindex]$a="right"; $b="left";if ((@me%2)==0) @me=$a; else @me=$b;[/field:global] ani               " swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" swiper-animate-style-cache=" " style="visibility: hidden;"> 
       <h4> {dede:field.typename/} </h4> 
       <ul> 
        <div id="autonews1"> 
         {dede:arclist typeid='' att=''  limit='0,5'  titlelen='120' infolen=''  orderby='pubdate' }
<li><a href="[field:arcurl/]" target=""><i class="fa fa-angle-double-right"></i><h5>[field:title function="cn_substr(@me,140)"/]</h5><time>[field:stime/]</time></a></li>
{/dede:arclist}
          
        </div> 
       </ul> 
      </div>