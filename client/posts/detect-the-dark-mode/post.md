诸如macOS，Windows 10之类的现代操作系统能够允许用户选择他们希望在所有应用程序中看到的外观。

以下屏幕截图是从macOS的 _常规设置_ 窗格中截取的：

![在 macOS 上设置暗模式](/assets/appearance-setting.png)

可以通过查看 \`prefers-color-scheme\` 样式信息来检测该选项。

他可以是以下值之一：
* \`light\`: 用户希望以浅色模式查看页面
* \`dark\`: 用户希望以暗色模式查看页面
* \`no-preference\`: 系统未得知用户在这方面的选项

通过检测该样式值，可以确定用户的操作系统是否设置了 dark 模式：

~~~ javascript
const isDarkMode = window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches;
~~~