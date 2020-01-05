//kena deklaru 1 objekt
slider = {
    //sliderElement i referencohet sliderit
    sliderElement : $('.slider'),
    //funksioni qe e inicializon sliderin
    init : function(){
        //i ka krejt eventat e sliderit
        slider.sliderEvents();
        //funksioni me e ndrru sliderin foton
        setInterval(function(){ 
            $('.arrow.next').trigger('click');
         }, 4000);
    },
    //i kemi shtu 2 funksione treja
    sliderEvents : function(){
        $('.arrow.next').on('click',function(){        
            $('.slider_box').each(function(){
                var _self = $(this);
                if(_self.hasClass('active')){
                    _self.removeClass('active');
                    if(_self.next().hasClass('slider_box')){
                        _self.next().addClass('active');
                    }else {
                        slider.sliderElement.find('.slider_box').first().addClass('active');
                    }
                    return false;
                }
            }); 
        });
        $('.arrow.prev').on('click',function(){
            $('.slider_box').each(function(){
                var _self = $(this);
                if(_self.hasClass('active')){
                    _self.removeClass('active');
                    if(_self.prev().hasClass('slider_box')){
                        _self.prev().addClass('active');
                    }else {
                        slider.sliderElement.find('.slider_box').last().addClass('active');
                    }
                    return false;
                }
            });
        });
        $('.bullet').on('click',function(){
            var _self = $(this);
            var slideNumber = _self.attr('slide-to');
            $('.slider_box').each(function(index){
                console.log(index);
                $(this).removeClass('active');
                if(index + 1 == slideNumber){
                    $(this).addClass('active');
                }
            });
        });
    },
   
}
$(document).ready(function(){
   slider.init();
 });

