$(function() { 
	if (NovicebootConfig) {
		var transparency = NovicebootConfig.transparency;
		var tokenConfig = NovicebootConfig.layer[0].tokenConfig;
		var tokenWidth = NovicebootConfig.tokenWidth;
		var tokenFontsize = NovicebootConfig.tokenFontsize;
		var pointWidth = NovicebootConfig.pointWidth;
		var pointHeight = NovicebootConfig.pointHeight;
		var pointUrl = NovicebootConfig.pointUrl;
		var okConfig = NovicebootConfig.layer[0].okConfig;
		var Tokens = $('.Noviceboot:first .novi-token');
		var noviOk = $('.Noviceboot:first .novi-ok');
		
		//设置基本样式
		$(function() {
			$('.Noviceboot:first').css('display','block');
			$('.Noviceboot').css('backgroundColor', 'rgba(0, 0, 0, ' + transparency + ')');
			$('.novi-token').css({
				'width': tokenWidth + 'px',
				'fontSize': tokenFontsize + 'px'
			});
		});

		//渲染novi-token
		var renderToken = function() {
			for (var i = 0; i < tokenConfig.length; i++) {
				var explainObject = $(tokenConfig[i].explainObject);
				switch(tokenConfig[i].position) {
					case 'left':
						$(Tokens[i]).css({
							'left' : explainObject.offset().left - tokenWidth - pointWidth + 'px',
							'top' : explainObject.offset().top + 'px'
						});
						var pImg = '<img class="novi-point" src="' + pointUrl + 'Horizontal.png">';
						var point = $(pImg).css({
							'left' : explainObject.offset().left - pointWidth + 'px',
							'top' : explainObject.offset().top + 'px',
							'width': pointWidth + 'px'
						});
						$(Tokens[i]).after(point);
						break;
					case 'right':
						$(Tokens[i]).css({
							'left' : explainObject.offset().left + explainObject.width() + pointWidth + 'px',
							'top' : explainObject.offset().top + 'px'
						});
						var pImg = '<img class="novi-point novi-flipx" src="' + pointUrl + 'Horizontal.png">';
						var point = $(pImg).css({
							'left' : explainObject.offset().left + explainObject.width() + 'px',
							'top' : explainObject.offset().top + 'px',
							'width': pointWidth + 'px'
						});
						$(Tokens[i]).after(point);
						break;
					case 'top':
						var tokenHeight = $(Tokens[i]).height();
						$(Tokens[i]).css({
							'top' : explainObject.offset().top - tokenHeight - pointHeight + 'px',
							'left' : explainObject.offset().left + 'px'
						});
						var pImg = '<img class="novi-point" src="' + pointUrl + 'Vertical.png">';
						var point = $(pImg).css({
							'top' : explainObject.offset().top - pointHeight + 'px',
							'left' : explainObject.offset().left + 'px',
							'height': pointHeight + 'px'
						});
						$(Tokens[i]).after(point);
						break;
					case 'bottom':
						$(Tokens[i]).css({
							'top' : explainObject.offset().top + explainObject.height() + pointHeight + 'px',
							'left' : explainObject.offset().left + 'px'
						});
						var pImg = '<img class="novi-point novi-flipy" src="' + pointUrl + 'Vertical.png">';
						var point = $(pImg).css({
							'top' : explainObject.offset().top + explainObject.height() + 'px',
							'left' : explainObject.offset().left + 'px',
							'height': pointHeight + 'px'
						});
						$(Tokens[i]).after(point);
						break;
				}
			}
		}

		//渲染novi-ok
		var renderOk = function() {
			switch(okConfig.size) {
				case 'small': okConfig.size = '8px 15px'; break;
				case 'medium': okConfig.size = '12px 20px'; break;
				case 'big': okConfig.size = '15px 28px;'; break;
				case 'huge': okConfig.size = '18px 38px'; break;
			}
			switch(okConfig.position) {
				case 'lowerRight': okConfig.position = {
					right: '100px',
					bottom: '80px' 
				}; break;
				case 'lowerLeft': okConfig.position = {
					left: '100px',
					bottom: '80px' 
				}; break;
				case 'upperRight': okConfig.position = {
					right: '100px',
					top: '80px' 
				}; break;
				case 'upperLeft': okConfig.position = {
					left: '100px',
					top: '80px' 
				}; break;
			}
			$(noviOk).css('padding', okConfig.size);
			$(noviOk).css(okConfig.position);
		}

		$(function() {
			var layer = 0;
			renderToken();
			renderOk();
			$('.novi-ok').click(function (){
				$('.Noviceboot').css('display', 'none');
				if (layer++ < NovicebootConfig.layer.length) {
					$('.Noviceboot:eq(' + layer + ')').css('display', 'block');
					tokenConfig = NovicebootConfig.layer[layer].tokenConfig;
					okConfig = NovicebootConfig.layer[layer].okConfig;
					Tokens = $('.Noviceboot:eq(' + layer + ') .novi-token');
					noviOk = $('.Noviceboot:eq(' + layer + ') .novi-ok');
					renderToken();
					renderOk();
				}
			});
		});
	}
}); 