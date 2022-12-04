# object-pattern-set-defalut-value

- 解构获取参数请设置默认兜底值, 防止取参数时出现crash
```js
    // 错误示例：
    const { x } = y;

    // 正确示例：
    const { x } = y || {};
```