假设 \`ele\` 元素代表要计算大小的元素的DOM。

~~~ javascript
// 获取样式
const styles = window.getComputedStyle(ele);

// 不包含 padding 和 border
const height = ele.clientHeight - parseFloat(styles.paddingTop) 
                                - parseFloat(styles.paddingBottom);
const width = ele.clientWidth - parseFloat(styles.paddingLeft) 
                              - parseFloat(styles.paddingRight);

// 包含 padding
const clientHeight = ele.clientHeight;
const clientWidth = ele.clientWidth;

// 包含 padding 和 border
const offsetHeight = ele.offsetHeight;
const offsetWidth = ele.offsetWidth;

// 包含 padding，border 和 margin
const heightWithMargin = ele.offsetHeight + parseFloat(styles.marginTop)
                                          + parseFloat(styles.marginBottom);
const widthWithMargin = ele.offsetWidth + parseFloat(styles.marginLeft)
                                        + parseFloat(styles.marginRight);
~~~