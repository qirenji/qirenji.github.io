class	Select {
		constructor(parent='body',data='default_data',text=['省','市','区']) {
			this.parent = document.querySelector(parent);
			//获取数据
			this.data = data;
			//获取标题
			this.text = text;
			//获取每级的父元素
			this.preEle = null;
			this.cityEle = null;
			this.areaEle = null;
			//获取每级的数据
			this.pres = data.province;
			// console.log(data[0])
			this.cities = data.city;
			this.areas = data.county;
			//默认状态
			this.pIndex = -1;
			//自动初始化
			this.init();
		}
		//初始化
		init() {
			//添加html模版
			let _html = `<span>${this.text[0]}</span>:
        <select style="width:100px;" id="pre">
            <option value="-1">请选择</option>
        </select>
        <span>${this.text[1]}</span>:
        <select style="width: 100px;" id="city"></select>
        <span>${this.text[2]}</span>:
        <select style="width: 100px;" id="area"></select>`;
      this.parent.innerHTML = _html;
      this.preEle = this.parent.querySelector('#pre');
      this.cityEle = this.parent.querySelector('#city');
      this.areaEle = this.parent.querySelector('#area');
      for(let i=0; i