/**
 * Created by Aaron on 2015/12/3.
 */
console.log("不规范有依赖库加载");
!function() {
    if (jQuery) {
        window.NON = {
            non: function () {
                console.log("不规范库函数调用")
            }
        };
        console.log("不规范库加载完毕");
    }
}();
