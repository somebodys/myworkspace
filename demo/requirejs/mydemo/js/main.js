/**
 * Created by Aaron on 2015/12/2.
 */
require.config({
    paths: {
        jquery:"jquery-1.7.min",
        amd_mod:"amd_mod",
        amd_rely:"amd_rely",
        mix_mod:"mix_mod",
        bad_mod:"bad_mod",
        jq_plu:"jq_plu"
    },
    shim:{
        "non_standard_plu":{
            exports:"NON",
            deps:"jquery"
        }
    }
});
//require(['amd_mod'], function (amd_mod){
//    console.log("开始加载amd规范无依赖模块");
//    amd_mod.amd();
//});
//require(['amd_rely'],function(amd_rely){
//    console.log("开始加载amd规范有依赖模块");
//    amd_rely.amd_rely();
//});
//require(['mix_mod'],function(){
//    console.log("开始加载不规范有闭包js文件");
//});
//require(['bad_mod'],function(){
//    console.log("开始加载不规范无闭包js文件");
//    bad_mod1();
//});
//require(['jquery','jq_plu'],function(jQuery,jq_plu){
//    console.log("加载jQuery符合AMD规范插件");
//    jQuery.plu();
//    jQuery().fn_plu();
//});
require(["non_standard_plu"],function(non_stand){
    console.log("开始加载不规范模块");
    non_stand.non();
});