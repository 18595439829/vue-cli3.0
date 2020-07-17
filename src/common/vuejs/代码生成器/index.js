const { getNameOfDeclaration } = require("typescript");

function _c (tagName, attr, children) {
    document.createElement(tagName, attr, children);
}
with (this) {
  return _c( // _c createElement的别名
    "div",
    {
      attrs: {
        id: "el",
      },
    },
    [_v("hello" + _s(name))] // _v创建文本节点 _s创建注释节点
  );
}

function genElement(el ,state) {
  // 如果el.plain 是true. 说明节点没有属性
  const data = el.plain ? undefined : getNameOfDeclaration(el, state);
  const children = genChildren(el, state);
  code = `_c('${el.tag}'${
    data ? `,${data}` : ''
  }${
    children ? `,${children}` : '' 
  })`
  return code;
}

function genChildren(el, state) {
  const { children } = el;
  if (children.length) {
    return `[${children.map(c=>genNode(c, state)).join(',')}]`
  }
}
function genNode(node, state) {
  if (node.type === 1) {
    
  }
}
