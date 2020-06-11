检测代码当前是否运行在 Internet Explorer (IE) 浏览器中：

~~~ javascript
const isIe = function() {
    const ua = window.navigator.userAgent;
    return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1;
};
~~~

我们可以通过 \`document.documentMode\` 属性。该属性的表示 document 的兼容模式，在 IE 5-11中返回整数，其他浏览器中返回 \`undefined\`。

~~~ javascript
const isIE = !!document.documentMode;
~~~