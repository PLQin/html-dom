这是检查项目是否运行在移动端浏览器中的几种方法。
## 1. 检查 \`userAgent\` 对象（不推荐）

~~~ javascript
// 如果需要，可以添加更多
const isMobile = /Android|BlackBerry|iPad|iPod|iPhone|webOS/i
    .test(navigator.userAgent);
~~~

不推荐这种方法，因为服务器能够发送伪造的用户代理。
## 2. 使用特性检测

检测浏览器是否支持 \`pointer:coarse\` 媒体查询:

~~~ javascript
const isMobile = function() {
    const match = window.matchMedia('(pointer:coarse)');
    return (match && match.matches);
};
~~~

我们不能完全依赖屏幕大小，因为移动设备会越来越大。