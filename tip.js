//是否包含中文字符串
/[\u4E00-\u9FA5]/g.test(value)

//邮箱规则
!/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(this.value)||/[\u4E00-\u9FA5]/g.test(this.value)||/\s/.test(this.value)


//禁止选中
//.cannot_select{
//    -moz-user-select:none;/*火狐*/
//    -webkit-user-select:none;/*webkit浏览器*/
//    -ms-user-select:none;/*IE10*/
//    user-select:none;
//}

//document.observe('dom:loaded', function () {console.log(1)});?????

//https://gtmetrix.com 网站性能分析