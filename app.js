
(function($){

        $('input.round').wrap('<div class="round" />').each(function(){
                var $input = $(this);
                var $div = $input.parent();
                var min= $input.data('min');
                var max= $input.data('max');

                var ratio = ($input.val()-min)/(max - min);

                var $circle = $('<canvas width="200px" height="200px" />');
                var $color = $('<canvas width="200px" height="200px" />');

                $div.append($circle);
                var ctx = $circle[0].getContext('2d');

                ctx.beginPath();

                ctx.arc(100, 100, 75, 0, 2*Math.PI );
                ctx.lineWidth = 20;
                ctx.strokeStyle = "#FFF";
                ctx.shadowOffsetX = 2;
                ctx.shadowBlur = 5;
                ctx.shadowColor = "rgba(0,0,0,0,3";
                ctx.stroke();


                var ctx = $color[0].getContext('2d');
                ctx.arc(100, 100, 75, -1/2*Math.PI, ratio*2*Math.PI -1/2*Math.PI);
                ctx.lineWidth = 20;
                ctx.strokeStyle = "#91c2ff";
                ctx.stroke();

        })



})(jQuery);
