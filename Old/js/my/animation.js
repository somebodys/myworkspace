/**
 * Created by Aaron on 2015/11/11.
 */
(function(jQuery){

    // requestAnimationFrame 降级兼容
    var lastTime = 0;
    var H_rAF,H_cAF;
    H_rAF = window.requestAnimationFrame;
    H_cAF = window.cancelAnimationFrame;
    if (!H_rAF)
        H_rAF = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id
        };

    if (!H_cAF){
        H_cAF = function(id) {
            clearTimeout(id);
        };
    }

    //转数字
    var to_num = function(str){
        var type,num,unit;
        type = typeof str;
        switch (type){
            case 'number':{
                num = str;
                unit = "";
                break
            }
            case "string":{
                var r = str.match(/-{0,1}\d\d*\.{0,1}\d*/);
                if (r){
                    num = Number(r[0]);
                    unit = str.split(/-{0,1}\d\d*\.{0,1}\d*/)[1]||"";
                }
                break
            }
            case 'object':{return {num:null,unit:null}}
        }
        return {
            num: num,
            unit: unit
        }
    };

    jQuery.fn.extend({
        rAF_animate:function(prarms,frame,call_back){
            var handle,step,i_val,n_val,t_prarms,$this;
            //参数处理
            if (typeof arguments[0] != 'object'){return;}
            if (typeof arguments[1] == 'function'){
                call_back = arguments[1];
            }
            frame = Number(frame)||100;

            $this = this;
            handle = {};
            i_val = {};
            step = 1;
            t_prarms = {};
            for (var key in prarms){
                prarms[key] = to_num(prarms[key]);
                i_val[key] = to_num(this.css(key));
            }
            handle.id = H_rAF(function(time){
                for (var k in prarms){
                    t_prarms[k] = ((prarms[k].num - i_val[k].num)*step/frame + i_val[k].num) + prarms[k].unit
                }
                $this.css(t_prarms);
                step += 1;
                if (step <= frame){
                    handle.id = H_rAF(arguments.callee);
                }else{
                    if (call_back){
                        call_back();
                    }
                }
            });
            return handle;
        }
    });
    jQuery.extend({
        rAF_canimate:function(handle){
            if(handle && handle.id){
                H_cAF(handle.id)
            }
        }
    })
}(jQuery));


//window.onload = function(){
//    var stop_handle = $("#animate").rAF_animate({width:'900px',opacity:0.5});
//    $("#stop").click(function(){
//        console.log(stop_handle);
//        $().rAF_canimate(stop_handle);
//    })
//};
