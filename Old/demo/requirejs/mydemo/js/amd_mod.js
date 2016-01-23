/**
 * Created by Aaron on 2015/12/3.
 */
define("amd_mod",function(){
    console.log("amd规范无依赖模块加载成功");
    return {
        amd:function(){
            console.log("amd规范无依赖模块函数调用")
        }
    }
});