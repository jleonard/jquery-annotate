(function($){ "use strict";

  $.fn.annotate = function(option){

  	return this.each(function(){
  		var $this = $(this);
      console.log($this);

      var atr = $this.attr('annotate');
      if(atr.length === 0){ return; }

      var annotatedEvents = atr.split(',');

      var len = annotatedEvents.length;
      for (var i = 0; i < len; i++) {
        var cur = annotatedEvents[i];
        $this.on(cur,function(e){
          console.log('on happned ',e.type);
          $(window).trigger('annotate',[{event:e.type,element:$this}]);
          //$.publish(('annotate'),[{event:e.type,element:$this}]);
        });
      }

  	});
  }

  $(function(){
    $('[annotate]').annotate();
  });

})(window.jQuery);