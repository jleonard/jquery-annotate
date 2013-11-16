(function($){ "use strict";

  $.fn.annotate = function(option){

  	return this.each(function(){
  		var $this = $(this);

      var atr = $this.attr('annotate');
      if(atr.length === 0){ return; }

      var annotation = $this.attr('annotation');

      var annotatedEvents = atr.split(',');

      var len = annotatedEvents.length;
      for (var i = 0; i < len; i++) {
        var cur = annotatedEvents[i];
        var message = annotation.length > 0 ? annotation : null;
        $this.on(cur,function(e){
          $(window).trigger('annotate',[{event:e.type,element:$this,message:message}]);
        });
      }

  	});
  }

  $(function(){
    $('[annotate]').annotate();
  });

})(window.jQuery);