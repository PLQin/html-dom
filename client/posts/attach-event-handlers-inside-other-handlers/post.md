通常，有许多事件处理程序可以为不同的元素处理不同的事件，它们可能会相互依赖

让我们看一个常见的案例。当用户点击一个按钮时，可以在屏幕中间弹出一个模态框，当用户按下键盘的 **Escape** 键时关闭模态框。

这里有两个事件处理程序: 
* 第一个处理程序是按钮的 \`click\` 事件
* 第二个处理程序是 \`document\` 的 \`keydown\` 事件

我们通常会创建两个相互分离的处理程序: 

~~~ javascript
const handleClick = function() {
    // 打开模态框
};

const handleKeydown = function(e) {
    // 通过按下键盘的 Escape 键关闭模态框
};

// 假设 \`buttonEle\` 是按钮的代替元素
buttonEle.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeydown);
~~~

\`handleKeydown\` 处理程序是依赖于 \`handleClick\` 处理程序的，因为我们仅会在模态框打开的情况下才会检查按键。

这是添加标记以跟踪是否打开的常见方式: 

~~~ javascript
let isModalOpened = false;

const handleClick = function() {
    // 将标记设置为 true
    isModalOpened = true;
    // 打开模态框
};

const handleKeydown = function(e) {
    // 检测模态框是否已经打开
    if (isModalOpened) {
        // 检测按下的键
    }
};
~~~

更多元素，更多依赖事件和更多标志！结果，使得维护代码变得更加困难。

而不是首先单独添加事件，我们在它依赖的另一个事件处理程序中添加一个事件处理程序。

下面是技巧:

~~~ javascript
const handleClick = function() {
    document.addEventListener('keydown', handleKeydown);  
};
~~~

根本没有标记！代码更具可读性，更易于理解。