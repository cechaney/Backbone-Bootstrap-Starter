// This is the main entry point for the App
define(['app/routers/route'], function(router){
	var init = function(){
		this.router = new router();
	};

	return { init: init};
});