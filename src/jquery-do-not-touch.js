(function($){ "use strict";

  $.fn.doNot = function(option){

  	return this.each(function(){
  		var $this = $(this);

      var atr = $this.attr('do-not');
      if(atr.length === 0){ return; }

      var bannedEvents = atr.split(',');

      var len = bannedEvents.length;
      for (var i = 0; i < len; i++) {
        var cur = bannedEvents[i];
        $this.on(cur,function(e){
          $.publish(('doNot'),[{event:e.type,element:$this}]);
        });
      }

  	});
  }

  $(function(){
    $('[do-not]').doNot();
  });

})(window.jQuery);