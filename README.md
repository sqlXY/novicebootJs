# NovicebootJs 
### 简易网页模块介绍与引导构建工具

通过NovicebootJs，您可以方便的在您的网页上创建引导浮层，介绍您网页的各个部分，以便让用户了解具体的功效。

> 导入**Noviceboot.js**、**Noviceboot.css**及**Horizontal**和**Vertical**两张png即可开始使用

您应另外在需要创建引导浮层的html中引入以下js片段

```
var NovicebootConfig = {
	//蒙层透明度，范围0~1
	transparency: 0.7,
	//箭头预留的宽，纯数值
	pointWidth: 100,
	//箭头预留的高，纯数值
	pointHeight: 50,
	/*箭头文件夹的路径，即Horizontal和Vertical两张png存放的位置，应以/作为结束*/
	pointUrl: '../img/Noviceboot/',
	//token(详细介绍文字)的宽，纯数值
	tokenWidth: 200,
	//token(详细介绍文字)字体大小
	tokenFontsize: 15,
	/* tokenConfig:
	 * 每个token(详细介绍文字)具体的参考对象及方位
	 * explainObject 代表参考元素
	 * position 代表token(详细介绍文字)元素在参考元素的上/下/左/右(top/bottom/left/right)
	 * okCongig:
	 * 每个ok按钮的配置
	 * size 按钮预置大小(small/medium/big/huge)
	 * position ok按钮所在方位，左上/右上/左下/右下(upperLeft/upperRight/lowerLeft/lowerRight)
	 */
	layer: [
	//第一层
	{
		tokenConfig: [
		{
			explainObject : '.list-inline li:eq(1)',
			position : 'top'
		}],
		okConfig: {
			size: 'medium',
			position: 'lowerRight'
		}
	},
	//第二层
	{
		tokenConfig: [
		{
			explainObject : '.list-inline li:first',
			position : 'left'
		},{
			explainObject : '.list-inline li:eq(1)',
			position : 'bottom'
		},{
			explainObject : '.list-inline li:last',
			position : 'right'
		}],
		okConfig: {
			size: 'medium',
			position: 'lowerRight'
		}
	}]
	//第n层
	//...
}
```
