//获取元素
function g(selector){
	var method = selector.substr(0,1) == '.' ? 'getElementsByClassName' : 'getElementById'
		return document[method](selector.substr(1));
}
//随机数字
function random(range){
	var max = Math.max(range[0],range[1]);
	var min = Math.min(range[0],range[1]);
	var diff = max-min;

	var number = Math.floor(Math.random()*diff + min);
	return number;
}

//控制翻面
function turn(elem){
	var cls = elem.className;
	var n = elem.id.split('_')[1];
	// console.log(/photo_center/.test(cls));
	if(!/photo_center/.test(cls)){
		return rsort(n);
	}
	// console.log(/photo_front/.test(cls));
	if(/photo_front/.test(cls)){
		cls = cls.replace(/photo_front/,'photo_back');
		g('#nav_'+n).className += ' i_back ';
	}else{
		cls = cls.replace(/photo_back/,'photo_front');
		g('#nav_'+n).className = g('#nav_'+n).className.replace(/\s*i_back/,'');
	}
	return elem.className = cls;
}

//输出所有海报
var data = data;
function addPhotos(){
	var template = g('#wrap').innerHTML;
	var html = [];
	var nav = [];
	for(var s in data){
		var _html = template
			.replace('{{index}}',s)
			.replace('{{img}}',data[s].img)
			.replace('{{caption}}',data[s].caption)
			.replace('{{desc}}',data[s].desc);
		html.push(_html);
		nav.push('<span id="nav_'+s+'" onclick="turn(g(\'#photo_'+s+'\'))" class="i">&nbsp;</span>');
	}
	html.push('<div class="nav">'+nav.join('')+'</div>')
	g('#wrap').innerHTML = html.join('');
	rsort(random([0,data.length-1]));
}
addPhotos();

//排序海报
function rsort(n){
	var _photo = g('.photo');
	// console.log(_photo);
	var photos = [];
	for(var s=0;s<_photo.length;s++){
		_photo[s].className = _photo[s].className.replace(/\s*photo_center/,'');
		_photo[s].className = _photo[s].className.replace(/\s*photo_front/,'');
		_photo[s].className = _photo[s].className.replace(/\s*photo_back/,'');
		_photo[s].className += ' photo_front';
		_photo[s].style.left='';
		_photo[s].style.top='';
		_photo[s].style['transform']=_photo[s].style['-webkit-transform']
										=_photo[s].style['-moz-transform']
										=_photo[s].style['-ms-transform']
										=_photo[s].style['-o-transform']
										='rotate(360deg) scale(1.3)';
		photos.push(_photo[s]);
	}
	var photo_center = g('#photo_'+n);
	photo_center.className += ' photo_center ';
	photo_center = photos.splice(n,1)[0];

	var photos_left = photos.splice(0,photos.length/2);
	var photos_right = photos;
	var ranges = range();
	// console.log(photos_left);
	for(s in photos_left){
		var photo = photos_left[s];
		photo.style.left = random(ranges.left.x)+'px';
		photo.style.top = random(ranges.left.y)+'px';
		photo.style['transform']=photo.style['-webkit-transform']
					=photo.style['-moz-transform']
					=photo.style['-ms-transform']
					=photo.style['-o-transform']
					='rotate('+random([-150,150])+'deg) scale(1)';
	}
	for(s in photos_right){
		var photo = photos_right[s];
		photo.style.left = random(ranges.right.x)+'px';
		photo.style.top = random(ranges.right.y)+'px';
		photo.style['transform']=photo.style['-webkit-transform']
					=photo.style['-moz-transform']
					=photo.style['-ms-transform']
					=photo.style['-o-transform']
					='rotate('+random([-150,150])+'deg) scale(1)';
	}
	var navs = g('.i');
		for (var s = 0; s < navs.length; s++) {
		 	navs[s].className = navs[s].className.replace(/\s*i_current/,'');
		 	navs[s].className = navs[s].className.replace(/\s*i_back/,'');
		 }; 
		g('#nav_'+n).className += ' i_current ';
}
//计算作用分区的范围
function range() {
	var range = {left:{x:[],y:[]} , right:{x:[],y:[]}};
	var wrap = {w:g('#wrap').clientWidth,h:g('#wrap').clientHeight};
	var photo ={w:g('.photo')[0].clientWidth,h:g('.photo')[0].clientHeight};
	range.wrap = wrap;
	range.photo = photo;
	range.left.x = [0 , wrap.w/2-photo.w];
	range.left.y = [0 , wrap.h];
	range.right.x = [wrap.w/2+photo.w , wrap.w];
	range.right.y = range.left.y;
	return range;
}

window.onresize = function(){
	// location.reload();
}