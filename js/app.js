(function(){
	function DomObject(dom){
		this.dom = dom;
	}

	DomObject.prototype.get = function(){
		return this.dom;
	};

	DomObject.prototype.on = function(eventName, eventHandler){
		this.get().addEventListener(eventName, eventHandler);
	}

	DomObject.prototype.css = function(styleKey, styleValue){
		this.get().style[styleKey] = styleValue;
	}

	function $(selector, context) {
		return new DomObject((context || document).querySelector(selector));
	}

	function startGame(){
		new Board();
	}

	function _init() {
		$('#btn-start').on('click', function(ev){
			$('.start-container').css('display', 'none');
			$('.game-container').css('display', 'block');
			startGame();
		});

		$('#btn-setting').on('click', function(ev){
			alert('You click setting btn.');
		});
	}

	document.addEventListener('DOMContentLoaded', function(e){
		_init();
	});
})(document);