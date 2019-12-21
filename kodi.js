<script>
         slider = {
            sliderElement : $('.slider'),
            init : function(){
                slider.sliderEvents();
            },
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

        nextSlide : function(){
         },
        prevSlide : function(){}
        }
        $(document).ready(function(){
           slider.init();
          });
        /*Kodi per background color qe ndryshon gjate koheve te ndryshme te dites*/
         var t = new Date().getHours();
         if (t>5 && t <= 10 ) {
             document.body.style.backgroundColor="yellow";
         }else if (t>10 && t <= 20) {
             document.body.style.backgroundColor="orange";
         }else {
             document.body.style.backgroundColor="grey";
         }
    </script>
