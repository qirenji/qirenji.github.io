var data=[];
var dataStr = '1、海报1<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报1<br>\
详细：海报1<br>\
时间：海报1<br>\
地点：海报1<br>\
<br>\
<br>\
2、海报2<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报2<br>\
详细：海报2<br>\
时间：海报2<br>\
地点：海报2<br>\
<br>\
<br>\
3、海报3<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报3<br>\
详细：海报3<br>\
时间：海报3<br>\
地点：海报3<br>\
<br>\
<br>\
4、海报4<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报4<br>\
详细：海报4<br>\
时间：海报4<br>\
地点：海报4<br>\
<br>\
<br>\
5、海报5<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报5<br>\
详细：海报5<br>\
时间：海报5<br>\
地点：海报5<br>\
<br>\
<br>\
6、海报6<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报6<br>\
详细：海报6<br>\
时间：海报6<br>\
地点：海报6<br>\
<br>\
<br>\
7、海报7<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报7<br>\
详细：海报7<br>\
时间：海报7<br>\
地点：海报7<br>\
<br>\
<br>\
8、海报8<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报8<br>\
详细：海报8<br>\
时间：海报8<br>\
地点：海报8<br>\
<br>\
<br>\
9、海报9<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报9<br>\
详细：海报9<br>\
时间：海报9<br>\
地点：海报9<br>\
<br>\
<br>\
10、海报10<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报10<br>\
详细：海报10<br>\
时间：海报10<br>\
地点：海报10<br>\
<br>\
<br>\
11、海报11<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报11<br>\
详细：海报11<br>\
时间：海报11<br>\
地点：海报11<br>\
<br>\
<br>\
12、海报12<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报12<br>\
详细：海报12<br>\
时间：海报12<br>\
地点：海报12<br>\
<br>\
<br>\
13、海报13<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报13<br>\
详细：海报13<br>\
时间：海报13<br>\
地点：海报13<br>\
<br>\
<br>\
14、海报14<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报14<br>\
详细：海报14<br>\
时间：海报14<br>\
地点：海报14<br>\
<br>\
<br>\
15、海报15<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报15<br>\
详细：海报15<br>\
时间：海报15<br>\
地点：海报15<br>\
<br>\
<br>\
16、海报16<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报16<br>\
详细：海报16<br>\
时间：海报16<br>\
地点：海报16<br>\
<br>\
<br>\
17、海报17<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报17<br>\
详细：海报17<br>\
时间：海报17<br>\
地点：海报17<br>\
<br>\
<br>\
18、海报18<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报18<br>\
详细：海报18<br>\
时间：海报18<br>\
地点：海报18<br>\
<br>\
<br>\
19、海报19<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报19<br>\
详细：海报19<br>\
时间：海报19<br>\
地点：海报19<br>\
<br>\
<br>\
20、海报20<br>\
<br>\
图片来源：数字驿站(http://www.k1982.com/design/568536.htm)<br>\
内容：海报20<br>\
详细：海报20<br>\
时间：海报20<br>\
地点：海报20<br>\
';
var d =dataStr.split('<br><br><br>');
for (var i = 0; i < d.length; i++) {
	var c = d[i].split('<br><br>');
	data.push({
		img: c[0].replace('、','')+'.jpg',
		caption: c[0].split('、')[1],
		desc : c[1]
	});
	// console.log(c[0].replace('、','')+'.jpg');
};