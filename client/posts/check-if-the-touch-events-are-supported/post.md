检查当前浏览器是否支持触摸事件:

~~~ javascript
const touchSupported = 'ontouchstart' in window || 
    (window.DocumentTouch && document instanceof DocumentTouch);
~~~