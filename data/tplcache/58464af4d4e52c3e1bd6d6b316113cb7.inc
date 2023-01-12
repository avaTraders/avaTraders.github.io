<div class="notice"> 
    <h4> <a href="{dede:field.typedir/}">{dede:field.typename/}</a> 
     <div class="not-r"> 
      <span></span> 
      <span></span> 
     </div> </h4> 
    <div class="conte"> 
     {dede:arclist typeid='' att=''  limit='0,5'  titlelen='120' infolen=''  orderby='pubdate' }
<time>[field:stime/]</time>
     <h5> <a href="[field:arcurl/]" target="_blank" title="[field:title/]">[field:title function="cn_substr(@me,140)"/]</a></h5>
{/dede:arclist}
     <p><br /> </p> 
    </div> 
   </div>