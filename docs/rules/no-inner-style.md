# jsx render cannot write style (no-inner-style)

## Rule Details

Examples of **incorrect** code for this rule:

```js

function TestView(){
    return (
        <View style={{flex:1, width: 200}} >
        </View>
    )
}

```

Examples of **correct** code for this rule:

```js

function TestView(){
    const mode = 'dark';
    return (
        <View style={{flex: 1, width: 200, color: mode === 'dark' ? '#000' : '#fff'}}>
        </View>
    )
}
```


## When Not To Use It

规范项目的行内样式, 如果不需要可以关闭
