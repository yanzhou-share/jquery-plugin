(function($){
    var DEMO = function(options){
      
    }
    
    DEMO.prototype = {
        _init : function(){
        
        },
        
        _bind : function(){
        
        },
        
        _other : function(){
        
        },
        
        insteadOf : function(){
        
        }
    };
    
    $.fn.interface = function(options){
        var $this = $(this),
            data = $this.data('tt');
            
        if(typeof options == 'string'){
            var args = Array.prototype.slice.call(arguments, 1);
            
            if(!$.isFunction(data[options]) || options.charAt(0) === '_')   return;
            
            data[options](args);
        }
        else
        {
            $this.data('tt', (data = new DEMO(options)));
        }
        
        return this;
    }
})(jQuery);
