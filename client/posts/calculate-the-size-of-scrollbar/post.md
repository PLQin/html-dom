## 1. 使用 \`offsetWidth\` 减去 \`clientWidth\`

\`clientWidth\` 属性表示没有滚动条的宽度。另一方面，\`offsetWidth\` 属性包含滚动条(如果有)。

这是获得滚动条最简单的方式: 

~~~ javascript
const scrollbarWidth = document.body.offsetWidth - document.body.clientWidth;
~~~

## 2. 使用虚拟元素

我们创建两个虚拟 \`div\` 元素，其中一个是另一个的子元素。然后计算他们的宽度差。

~~~ javascript
const calculateScrollbarWidth = function() {
    // 创建父元素
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    
    // 添加到 \`body\` 元素中
    document.body.appendChild(outer);

    // 创建子元素
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // 计算他们的宽度差
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // 删除父元素
    document.body.removeChild(outer);

    return scrollbarWidth;
};
~~~

如果将"显示滚动条"选项设置为"基于鼠标或触控板自动"或"滚动时"，这个方法在 macOS 上不起作用。

![在 macOS上 显示滚动条选项](/assets/scroll-macos.png)