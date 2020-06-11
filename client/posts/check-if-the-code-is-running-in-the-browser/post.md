我们可以通过检测是否存在 \`window\` 和 \`document\` 对象，来判断代码是否运行在浏览器环境中: 

~~~ javascript
const isBrowser = typeof window === 'object' && typeof document === 'object';
~~~