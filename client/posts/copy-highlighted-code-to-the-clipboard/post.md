如今，允许用户复制示例代码是Web开发中的常见现象。为了演示案例，我们需要创建两个元素：

~~~ html
<pre id="sampleCode"><code>...</code></pre>
<button id="copyButton">复制</button>
~~~
这个 \`sampleCode\` 元素包含已经突出显示的示例代码。

将示例代码复制到剪贴板可能包括三个步骤：

* [**选择**](/select-the-text-content-of-an-element) 选择包含代码元素的文本
* [**复制**](/copy-text-to-the-clipboard) 使用 \`document.execCommand('copy')\` 方法将文本复制到剪切板上
* 最后也是最重要的一点，以上两个步骤都对文本选择产生影响。因此，我们必须在复制之前备份当前选定的文本，并在最后将其[**还原**](/save-and-restore-the-text-selection)。

您可以在下面的演示中查看代码。请使用！
