window.onload = function(){
	var game;
	var container = document.getElementById('div2048');
	var startBtn = document.getElementById('start');
	// startBtn.onclick = function(){
	// 	console.log(this);
	// 	this.style.display = 'none';
		//创建游戏
		game = game || new game2048(container);
		game.init();
	// }
	// 获取键盘值
	document.onkeydown = function(ev){
		var keynum, keychar;
		if(window.event){
			keynum = ev.keyCode;
		}
		else if(ev.which){
			keynum = ev.which;
		}
		keychar = String.fromCharCode(keynum);
		console.log(keychar);
		if(['W','S','A','D'].indexOf(keychar) > -1){
			if(game.over()){
				if(confirm('游戏结束！是否重新开始～')){
					window.location.reload();
				}
			}
			game.move(keychar);
			game.win();
		}

	}
}

function game2048(container){
	this.container = container;
	this.tiles = new Array(16);
}

game2048.prototype = {
	// 游戏初始化
	init: function(){
		var allTile = '';
		for(var i=0, len = this.tiles.length; i < len;i++){
			var tile = this.newTile(0);
			tile.setAttribute('index',i);
			this.container.appendChild(tile);
      this.tiles[i] = tile;
		}
		this.randomTile();
		this.randomTile();
	},
	// 某个格子生成数字
	newTile: function(val){
		var tile = document.createElement('div');
		this.setTileVal(tile,val);
		return tile;
	},
	// 设置格子的值
	setTileVal: function(tile,val){
		tile.className = 'tile tile'+ val;
		tile.setAttribute('val',val);
		tile.innerHTML = val>0 ? val : '';
	},
	// 随机格子
	randomTile: function() {
		var zeroTiles = [];
		for(var i=0,len=this.tiles.length;i<len;i++){ if(this.tiles[i].getattribute('val')="=" 0){="" zerotiles.push(this.tiles[i]);="" }="" var="" rtile="zeroTiles[Math.floor(Math.random()" *="" zerotiles.length)];="" this.settileval(rtile,math.random()="" <="" 0.8="" ?="" 2:4);="" },="" 游戏结束="" over:="" function(){="" for(var="" i="0,len=this.tiles.length;i<len;i++){" return="" false;="" if(i%4="" !="3){" if(this.equal(this.tiles[i],this.tiles[i+1])){="" if(i<12){="" if(this.equal(this.tiles[i],this.tiles[i+4])){="" true;="" 移动键盘的响应="" move:="" function(direction){="" j;="" switch(direction){="" 上="" case="" 'w':="" j="i;" while(j="">=4){
						this.merge(this.tiles[j-4],this.tiles[j]);
						j -= 4;
					}
				}
				break;
			// 下
			case 'S':
				for(var i=11;i>=0;i--){
					j = i;
					while(j <= 11){="" this.merge(this.tiles[j+4],this.tiles[j]);="" j="" +="4;" }="" break;="" 左="" case="" 'a':="" for(var="" i="1,len=this.tiles.length;i<len;i++){" while(j%4="" !="0){" console.log(this.tiles[j-1],this.tiles[j])="" this.merge(this.tiles[j-1],this.tiles[j]);="" -="1;" 右="" 'd':="">=0;i--){
					j = i;
					while(j%4 != 3){
						this.merge(this.tiles[j+1],this.tiles[j]);
						j += 1;
					}
				}
				break;
		}
		// 判断是非有空位置
		var full = true;
		for (var i = 0; i</=></len;i++){>