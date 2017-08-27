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
			.replace('',s)
			.replace('',data[s].img)
			.replace('',data[s].caption)
			.replace('',data[s].desc);
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
	for(var s=0;s