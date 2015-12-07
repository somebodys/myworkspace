/**
 * Created by Aaron on 2015/12/3.
 */
define('amd_rely',['amd_mod'],function(amd_mod){
    if (amd_mod){
        console.log("amd规范有依赖模块加载成功，依赖模块为amd_mod");
        return {
            amd_rely : function(){
                console.log("amd规范有依赖模块函数调用，依赖模块为amd_mod")
            }
        }
    }
});
