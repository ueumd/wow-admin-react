// @see: https://www.prettier.cn
module.exports = {
  printWidth: 160,
  // 缩进字节数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行
  useTabs: true,
  // 结尾不用分号(true有，false没有)
  semi: false,
  // 使用单引号(true单双引号，false双引号)
  // singleQuote: false,
  // 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
  quoteProps: "as-needed",
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
  trailingComma: "none",
  // 在JSX中使用单引号而不是双引号
  jsxSingleQuote: false,
  //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
  arrowParens: "avoid",
  // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
  rangeStart: 0,
  rangeEnd: Infinity,
};
