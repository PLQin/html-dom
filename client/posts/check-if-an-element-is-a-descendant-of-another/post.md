假设我们想知道 \`child\` 元素是否是 \`parent\` 元素的后代。

## 1. 使用 contains() 方法

~~~ javascript
const isDescendant = parent.contains(child);
~~~

## 2. 从子元素开始一直向上查找父元素

~~~ javascript
// 检查 \`child\` 元素是否是 \`parent\` 元素的后代
const isDescendant = function(parent, child) {
    let node = child.parentNode;
    while (node) {
        if (node === parent) {
            return true;
        }

        // 遍历父元素
        node = node.parentNode;
    }

    // 一直遍历到根元素，但还没有遍历到指定的父元素
    return false;
};
~~~

相关链接: [Node.contains](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/contains "Node.contains")
