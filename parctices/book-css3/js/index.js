var books = document.querySelectorAll('.bookPage');
// 设置书页
for(var i=0; i<books.length; i++){="" settransform(books[i],'translate3d(0px,="" 0px,="" '+(-i)+'px)')="" }="" transform属性兼容="" function="" settransform(e,v){="" var="" s="e.style;" s.webkittransform="s.MozTransform" =="" s.mstransform="s.Otransform" s.transform="v;" window.onload="function(){" books="document.querySelectorAll('.bookPage');" bookwrap="document.querySelector('.book');" currentpage="0;" roty="0;" flag="true;" timer;="" 鼠标摁下="" bookwrap.onmousedown="function(ev){" cx="ev.clientX;" cy="ev.clientY;" 点击标志位="" timer="setTimeout(function(){" },200);="" 鼠标移动="" document.onmousemove="function(ev){" x="ev.clientX;" y="ev.clientY;" disx="x-cx;" -="disX/2;" settransform(bookwrap,'rotatey('+roty+'deg)');="" 鼠标抬起="" document.onmouseup="function(ev){" =null;="" cleartimeout(timer);="" console.log(flag);="" 点击执行操作="" if(flag){="" bookwrap.offsetleft;="" if(x<math.floor(bookwrap.offsetwidth="" 2)){="" previouspage();="" }else{="" nextpage();="" ev.preventdefault();="" 前一页="" previouspage(){="" if(currentpage="">0){
			currentPage--;
			setTransform(books[currentPage],'translate3d(0px,0px,'+(-currentPage)+'px) rotateY(0deg)')
		}
	}

	// 后一页
	function nextPage(){
		if(currentPage < books.length){
			setTransform(books[currentPage],'translate3d(0px,0px,'+currentPage+'px) rotateY(-170deg)');
			currentPage++;
		}
	}
}




</books.length;>