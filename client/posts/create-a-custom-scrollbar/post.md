您可以通过更改一些CSS属性来自定义浏览器滚动条的外观。
例如，我们可以在Chrome，Edge和Safari浏览器的最新版本中使用 \`:-webkit-scrollbar\` 样式：

~~~ css
body::-webkit-scrollbar {
    width: .75rem;
}
*::-webkit-scrollbar-track {
    background-color: #edf2f7;
}
*::-webkit-scrollbar-thumb {
    background-color: #718096;
    border-radius: 9999px;
}
~~~

在Firefox上，我们可以使用新的 \`scrollbar-width\` 和 \`scrollbar-color\` 样式：

~~~ css
body {
    scrollbar-width: thin;
    /* The color of thumb and track areas */
    scrollbar-color: #718096 #edf2f7;
}
~~~

不幸的是，\`-webkit-scrollbar\` 样式并不是[标准](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar) ，不推荐在的生产环境中使用。

在本文中，您将看到如何隐藏默认滚动条并创建一个假的，可定制的滚动条。

假设我们的目标是一个滚动的元素，它的 \`height\` 或 \`max-height\` 样式是固定的：

~~~ html
<div id="content" class="content" style="overflow: auto; max-height: ...;">
    ...
</div>
~~~

## 隐藏默认滚动条

我们将 \`content\` 放置在与 \`content\` 具有相同 \`height\` 或 \`max-height\` 的容器中。
而不是为 \`content\` 设置最大高度，而是采用整个高度。

~~~ html
<div id="wrapper" class="wrapper">
    <div id="content" class="content">
        ...
    </div>
</div>
~~~

我们阻止了 \`wrapper\` 中的滚动，并且仍然允许用户滚动内容：

~~~ css
.wrapper {
    max-height: 32rem;
    overflow: hidden;
}
.content {
    height: 100%;
    overflow: auto;
}
~~~
通过使用负margin可以很容易地隐藏默认滚动条：

~~~ css
.content {
    margin-right: -1rem;
    padding-right: 1rem;
}
~~~

## 放置虚拟的滚动条

在此步骤中，我们将创建一个代表虚拟滚动条的元素。它将位于 \`wrapper\` 元素的右侧，并具有与 \`wrapper\` 元素相同的高度。

为此，我们将使用文章[将一个元素绝对定位到另一个元素](/position-an-element-absolutely-to-another-element)中提到的三种方式:

~~~ html
<div id="wrapper">
    ...
</div>

<!-- 使用锚点 -->
<div id="anchor" style="left: 0; position: absolute; top: 0"></div>

<!-- 虚拟滚动条 -->
<div id="scrollbar" style="position: absolute; width: .75rem;"></div>
~~~

通过设置 \`top\` 和 \`left\` 样式，调整虚拟滚动条显示的位置：

~~~ javascript
// 查询元素
const wrapper = document.getElementById('wrapper');
const content = document.getElementById('content');
const anchor = document.getElementById('anchor');
const scrollbar = document.getElementById('scrollbar');

// 获取元素边界样式
const wrapperRect = wrapper.getBoundingClientRect();
const anchorRect = anchor.getBoundingClientRect();

// 设置 \`scrollbar\` 位置
const top = wrapperRect.top - anchorRect.top;
const left = wrapperRect.width + wrapperRect.left - anchorRect.left;
scrollbar.style.top = \`\${top}px\`;
scrollbar.style.left = \`\${left}px\`;
~~~

\`scrollbar\` 的高度与 \`wrapper\` 相同:

~~~ javascript
scrollbar.style.height = \`\${wrapperRect.height}px\`;
~~~

## 整理滚动条

滚动条包含两个部分：
* 一个 track 元素，可以让用户知道有一个滚动条。它使用滚动条的全尺寸
* 一个用户可以点击并且拖动的 thumb 元素

~~~ html
<div id="scrollbar">
    <div id="track" class="track"></div>
    <div id="thumb" class="thumb"></div>
</div>
~~~

这些元素绝对定位在滚动条上，因此需要以下样式：

~~~ css
.track {
    left: 0;
    position: absolute;
    top: 0;

    /* 全尺寸 */
    height: 100%;
    width: 100%;
}
.thumb {
    left: 0;
    position: absolute;
    
    /* 全宽 */
    width: 100%;
}
~~~

最初，thumb 元素的高度是根据内容元素的正常高度和滚动[高度](/determine-the-height-and-width-of-an-element)之间的比率计算的：

~~~ javascript
// 查询元素
const track = document.getElementById('track');
const thumb = document.getElementById('thumb');

const scrollRatio = content.clientHeight / content.scrollHeight;
thumb.style.height = \`\${scrollRatio * 100}%\`;
~~~

## 拖动 thumb 滚动

请访问[拖动滚动条](/drag-to-scroll)文章已查看详细信息。以下使我们实现的案例：

~~~ javascript
let pos = { top: 0, y: 0 };

const mouseDownThumbHandler = function(e) {
    pos = {
        // 当前滚动
        top: content.scrollTop,
        // 获取当前鼠标位置
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
    // 鼠标移动了多少距离
    const dy = e.clientY - pos.y;

    // 滚动内容
    content.scrollTop = pos.top + dy / scrollRatio;
};

// 绑定 mousedown 事件处理程序
thumb.addEventListener('mousedown', mouseDownThumbHandler);
~~~

当用户拖动thumb元素并滚动content元素时，我们必须更新thumb元素的位置。这是content元素的 \`scroll\` 事件处理程序：

~~~ javascript
const scrollContentHandler = function() {
    window.requestAnimationFrame(function() {
        thumb.style.top = \`\${content.scrollTop * 100 / content.scrollHeight}%\`;
    });
};

content.addEventListener('scroll', scrollContentHandler);
~~~

## 单击 track 元素并跳转

还有另一种滚动方式。用户可以通过单击track元素中的特定位置来滚动content元素。同样，我们必须为内容元素计算并更新 \`scrollTop\` 属性：

~~~ javascript
const trackClickHandler = function(e) {
    const bound = track.getBoundingClientRect();
    const percentage = (e.clientY - bound.top) / bound.height;
    content.scrollTop = percentage * (content.scrollHeight - content.clientHeight);
};

track.addEventListener('click', trackClickHandler);
~~~

希望这篇文章不会太长，你可以一直跟随到这里。下面是最终案例，请享受吧！
