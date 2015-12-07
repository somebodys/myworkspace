/**
 * Created by Aaron on 2015/12/3.
 */
define('jq_plu',['jquery'],function($){
    $.extend({
        plu:function(){
            console.log("jQuery插件函数调用")
        }
    });
    $.fn.extend({
        fn_plu:function(){
            console.log("jQuery原形插件函数调用");
        }
    })
    console.log("加载jQuery符合AMD规范插件成功");
    return $;
});