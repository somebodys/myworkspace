/**
 * Created by Aaron on 2015/11/5.
 */
/**
 * JSONP
 * 用途：解决ajax无法跨域获取数据的问题
 * 方式：利用script标签的src属性可以跨域的原理，将要执行的函数名callback传到第三方服务器，服务器返回callback（data）的字符串，
 * 然后将字符串插入网页中，使得函数callback可以得到从服务器返回的数据并调用，但需注意安全问题
 *
 */
