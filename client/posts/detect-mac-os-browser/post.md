检测所使用的浏览器是否是 Mac OS浏览器：

~~~ javascript
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
~~~