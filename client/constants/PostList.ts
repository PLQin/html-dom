interface Post {
    level: 'Basic' | 'Intermediate' | 'Advanced';
    zh?: string,
    slug: string;
    zhLevel?: '基础' | '中级' | '高级';
}

const PostList: Post[] = [
    { slug: 'add-or-remove-class-from-an-element', zh: '向元素添加或是删除 class 属性', level: 'Basic', zhLevel: '基础' },
    { slug: 'allow-to-enter-particular-characters-only', zh: '只允许输入特定字符', level: 'Intermediate', zhLevel: '中级' },
    { slug: 'append-to-an-element', zh: "将内容附加到一个元素中", level: 'Basic', zhLevel: '基础' },
    { slug: 'attach-or-detach-an-event-handler', zh: "创建和删除一个事件处理", level: 'Basic', zhLevel: '基础' },
    { slug: 'calculate-the-mouse-position-relative-to-an-element', zh: "计算鼠标指正相对于元素的位置", level: 'Basic', zhLevel: '基础' },
    { slug: 'calculate-the-size-of-scrollbar', zh: "计算滚动条尺寸", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'change-the-website-favicon', zh: "改变网站的 favicon 图标", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'check-an-element-against-a-selector', zh: "根据选择器检查元素是否存在", level: 'Basic', zhLevel: '基础' },
    { slug: 'check-if-an-element-has-given-class', zh: '检查元素是否有指定的 class 属性值', level: 'Basic', zhLevel: '基础' },
    { slug: 'check-if-an-element-is-a-descendant-of-another', zh: '检查一个元素是否是另一个元素的子元素(后代)', level: 'Basic', zhLevel: '基础' },
    { slug: 'check-if-an-element-is-in-the-viewport', zh: "检查元素是否在可是界面中", level: 'Basic', zhLevel: '基础' },
    { slug: 'check-if-an-element-is-scrollable', zh: "检查元素是否能够滚动", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'check-if-the-native-date-input-is-supported', zh: "检查浏览器是否支持 H5 input 的 date 类型", level: 'Basic', zhLevel: '基础' },
    { slug: 'clone-an-element', zh: "复制元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'communication-between-an-iframe-and-its-parent-window', zh: "iframe 与父级 window 之间的通信", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'copy-text-to-the-clipboard', zh: "将文字复制到粘贴板上", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'count-the-number-of-characters-of-a-textarea', zh: "计算文本区域(textarea)的字符数", level: 'Basic', zhLevel: '基础' },
    { slug: 'create-an-element', zh: "创建一个元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'create-one-time-event-handler', zh: "创建一次性的事件处理", level: 'Basic', zhLevel: '基础' },
    { slug: 'detect-clicks-outside-of-an-element', zh: "检测是否在元素外部的点击", level: 'Basic', zhLevel: '基础' },
    { slug: 'detect-if-an-element-is-focused', zh: "检测元素是否获得焦点", level: 'Basic', zhLevel: '基础' },
    { slug: 'detect-if-the-caps-lock-is-on', zh: "检测是否在元素外部的点击", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'detect-mac-os-browser', zh: "检测所使用的浏览器是否是 Mac OS浏览器", level: 'Basic', zhLevel: '基础' },
    { slug: 'determine-the-height-and-width-of-an-element', zh: "获取一个元素的宽高", level: 'Basic', zhLevel: '基础' },
    { slug: 'distinguish-between-left-and-right-mouse-clicks', zh: "区分鼠标左键和右键", level: 'Basic', zhLevel: '基础' },
    { slug: 'download-a-file', zh: "下载一个文件", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'drag-and-drop-element-in-a-list', zh: "将元素拖拽到列表中", level: 'Advanced', zhLevel: '高级', },
    { slug: 'execute-code-when-the-document-is-ready', zh: "等 HTML 元素(document 对象)准备好之后再运行代码", level: 'Basic', zhLevel: '基础' },
    { slug: 'export-a-table-to-csv', zh: "将表格导出为CSV文件", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'get-css-styles-of-an-element', zh: "获取元素的 CSS 样式", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-or-set-the-document-title', zh: "获取或是修改文档的标题(title 标签)", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-or-set-the-html-of-an-element', zh: "获取一个元素的 HTML 内容", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-set-and-remove-attributes', zh: "设置或是删除一个元素的属性(attribute)", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-set-and-remove-data-attributes', zh: "设置或是删除一个元素的属性(attribute)数据", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-siblings-of-an-element', zh: "获取一个元素的兄弟节点", level: 'Basic', zhLevel: '基础', },
    { slug: 'get-size-of-the-selected-file', zh: "获取上传文件的大小", level: 'Basic', zhLevel: '基础', },
    { slug: 'get-the-closest-element-by-given-selector', zh: "通过给定 CSS 选择器获取最匹配的元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-the-default-value-of-a-css-property', zh: "获取 CSS 属性的默认值", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'get-the-document-height-and-width', zh: "获取文档(document 对象)的宽高", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-the-first-scrollable-parent-of-an-element', zh: "获取元素的第一个可滚动父元素", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'get-the-parent-node-of-an-element', zh: "获取元素的父级节点", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-the-position-of-an-element-relative-to-another', zh: "获取一个元素相对于另一个元素的位置", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-the-position-of-an-element-relative-to-the-document', zh: "获取一个元素相对于文档(document 对象)的位置", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-the-size-of-an-image', zh: "获取图片的大小", level: 'Basic', zhLevel: '基础' },
    { slug: 'get-the-text-content-of-an-element', zh: "获取元素的文本内容", level: 'Basic', zhLevel: '基础' },
    { slug: 'go-back-to-the-previous-page', zh: "返回上一个页面", level: 'Basic', zhLevel: '基础' },
    { slug: 'highlight-an-element-when-dragging-a-file-over-it', zh: "在进行文件拖动上传是高亮显示放置元素", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'insert-an-element-after-or-before-other-element', zh: "在其他元素之前或之后插入一个元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'insert-given-html-after-or-before-an-element', zh: "在其他元素之前或之后插入给定的 HTML 元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'load-a-css-file-dynamically', zh: "动态添加 CSS 样式文件", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'load-a-javascript-file-dynamically', zh: "动态添加 JavaScript 文件", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'loop-over-a-nodelist', zh: "历遍节点列表", level: 'Basic', zhLevel: '基础' },
    { slug: 'make-a-draggable-element', zh: "制作一个可拖动元素", level: 'Advanced', zhLevel: '高级', },
    { slug: 'make-a-resizable-element', zh: "制作一个调整大小元素", level: 'Advanced', zhLevel: '高级', },
    { slug: 'measure-the-width-of-given-text-of-given-font', zh: "测量给定字体的给定文本的宽度", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'paste-an-image-from-the-clipboard', zh: "从粘贴板粘贴图像", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'paste-as-plain-text', zh: "粘贴为纯文本", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'placeholder-for-a-contenteditable-element', zh: "一个可编辑元素的占位符", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'prepend-to-an-element', zh: "置顶某个元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'press-shift-and-enter-for-a-new-line', zh: "实现按 Shift + Enter 键换行效果", level: 'Basic', zhLevel: '基础' },
    { slug: 'prevent-the-default-action-of-an-event', zh: "阻止事件默认操作", level: 'Basic', zhLevel: '基础' },
    { slug: 'preview-an-image-before-uploading-it', zh: "上传前预览图片", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'put-cursor-at-the-end-of-an-input', zh: "将光标放置在输入的末尾", level: 'Basic', zhLevel: '基础' },
    { slug: 'redirect-to-another-page', zh: "重定向到另一个页面", level: 'Basic', zhLevel: '基础' },
    { slug: 'reload-the-current-page', zh: "重新加载当前页面", level: 'Basic', zhLevel: '基础' },
    { slug: 'remove-all-children-of-a-node', zh: "删除元素所有的子元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'remove-an-element', zh: "删除元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'replace-an-element', zh: "替换元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'replace-broken-images', zh: "替换损坏的图片", level: 'Basic', zhLevel: '基础' },
    { slug: 'resize-an-iframe-to-fit-its-content', zh: "调整 iframe 大小以适应内容", level: 'Basic', zhLevel: '基础' },
    { slug: 'resize-an-image', zh: "调整图片大小", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'resize-columns-of-a-table', zh: "调整表格列的大小", level: 'Advanced', zhLevel: '高级', },
    { slug: 'resize-the-width-of-a-text-box-to-fit-its-content-automatically', zh: "根据内容自动调整文本框的大小", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'scale-a-text-to-fit-inside-of-an-element', zh: "根据可视内容大小调整文本缩放", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'scroll-to-top-of-the-page', zh: "滚动到页面顶部", level: 'Basic', zhLevel: '基础' },
    { slug: 'select-an-element-or-list-of-elements', zh: "选择一个元素或一个元素集合", level: 'Basic', zhLevel: '基础' },
    { slug: 'select-the-children-of-an-element', zh: "选择元素的子元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'select-the-text-of-a-textarea-automatically', zh: "自动选择文本区域的文本", level: 'Basic', zhLevel: '基础' },
    { slug: 'serialize-form-data-into-a-query-string', zh: "将表单元素序列化为可查询字符串", level: 'Basic', zhLevel: '基础' },
    { slug: 'set-css-style-for-an-element', zh: "为元素设置内联 CSS 样式", level: 'Basic', zhLevel: '基础' },
    { slug: 'show-a-ghost-element-when-dragging-an-element', zh: "拖动一些元素时显示替换元素", level: 'Intermediate', zhLevel: '中级' },
    { slug: 'show-or-hide-an-element', zh: "显示或隐藏元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'sort-a-table-by-clicking-its-headers', zh: "通过点击表头对表格进行排序", level: 'Advanced', zhLevel: '高级', },
    { slug: 'strip-html-from-a-given-text', zh: "从给定文本中删除 HTML 标签", level: 'Basic', zhLevel: '基础' },
    { slug: 'submit-a-form-with-ajax', zh: "使用 Ajax 提交表单", level: 'Basic', zhLevel: '基础' },
    { slug: 'swap-two-nodes', zh: "交换两个节点元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'toggle-an-element', zh: "切换元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'toggle-password-visibility', zh: "切换密码是否可见", level: 'Basic', zhLevel: '基础' },
    { slug: 'trigger-an-event', zh: "触发事件", level: 'Basic', zhLevel: '基础' },
    { slug: 'unwrap-an-element', zh: "移动元素的子元素并删除该元素", level: 'Basic', zhLevel: '基础' },
    { slug: 'upload-files-with-ajax', zh: "使用 Ajax 上传文件", level: 'Basic', zhLevel: '基础' },
    { slug: 'wrap-an-element-around-a-given-element', zh: "将已存在元素放置在给定元素中", level: 'Basic', zhLevel: '基础' },
];

export default PostList;
