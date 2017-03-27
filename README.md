# NovicebootJs 
### 简易网页模块介绍与引导浮层构建工具

##基本介绍
通过NovicebootJs，您可以方便的在您的网页上创建引导浮层，对网页的各个部分在浮层上进行详细介绍，以便让用户了解具体的功效。

 - NovicebootJs将在您的网页中建立一个全覆盖的浮层，并将说明文字置于上面。您可以在同一个页面中建立多个浮层，他们将会按顺序先后显示。

 - NovicebootJs可以绑定dom元素，使文字显示在被绑定元素的上下左右四个方位，并且自动提供一个箭头指向该元素。


##开始使用

 - 由于NovicebootJs基于**jQuery**，您首先需要引入**jQuery**

 - 在要建立浮层的HTML中引入**Noviceboot.js**、**Noviceboot.css**

 - 将**Horizontal**和**Vertical**两张png放入您的img文件夹，并设置``NovicebootConfig``中的``pointUrl``指向存放这两张png的文件夹

 - 添加如下HTML，修改为您需要的说明文字，若您想创建不止一个浮层，应多次引入此片段，将会分层渲染

```
<div class="Noviceboot">
    <div class="novi-token">
        您可以查看曾经测试过的手机的分析结果及数据详情页
    </div>
    <div class="novi-token">
        你可以通过我们提供的远程虚拟机仿真手机环境，体验分析与测试
    </div>
    <div class="novi-token">
        通过连接手机，您可以对您的手机进行分析与测试
    </div>
    <div class="novi-ok">知道了</div>
</div>
```

 - 您应另外在需要创建引导浮层的html中引入以下js片段

```
var NovicebootConfig = {
	transparency: 0.7,
	pointWidth: 100,
	pointHeight: 50,
	pointUrl: '../img/Noviceboot/',
	tokenWidth: 200,
	tokenFontsize: 15,
	layer: [
	/* 第一层 */
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
	/* 第二层 */
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
}
```
##具体配置

 - `transparency` 浮层透明度，纯数值，可选值`0~1`

 - `pointWidth` 箭头宽度，纯数值，不加`px`

 - `pointHeight` 箭头高度，纯数值，不加`px`

 - `pointUrl` 箭头png地址，指向存放它们的目录，字符串，结尾加`/`，如`'../img/Noviceboot/'`

 - `tokenWidth` 说明文字的宽度，纯数值，不加`px`

 - `tokenFontsize` 说明文字的大小，纯数值，不加`px`

 - `layer` 浮层，您可以在每层上添加不同的说明文字，数组，每层为一个元素，将从第一个元素开始依次渲染。
	 - `tokenConfig` 说明文字，数组，您可以在一层上添加多处说明文字，每段文字为一个元素，将会自动生成一个箭头从说明文字指向绑定对象
		 - `explainObject` 绑定对象，应选择已存在的课件DOM元素，字符串，格式为jQuery选择器的语法，如`'.list-inline li:first'`

		 - `position` 说明文字在绑定对象的上下左右，字符串，可选值为`top`/`bottom`/`left`/`right`

	 - `okConfig` OK按钮配置，点击OK按钮将关闭本浮层显示下一浮层
		 - `size` OK按钮大小，字符串，可选值为`small`/`medium`/`big`/`huge`

		 -  `position` OK按钮的位置，字符串，支持左上/右上/左下/右下，可选值为`upperLeft`/`upperRight`/`lowerLeft`/`lowerRight`

##感谢
感谢@GalaxyDL 提供箭头