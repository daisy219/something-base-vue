export function uuid() {
  let random = 0;
  let result = '';

  for (let i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      result += '-';
    }
    result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16);
  }
  return result;
}
/** 过滤非法空格字符 */
export function filter_unvalid_space(str) {
  if (!str || !str.length) { return ''; }
  const result = [];

  for (const char of str) {
    if (char.charCodeAt(0) === 8194) {
      result.push(String.fromCharCode(32));
    } else {
      result.push(char);
    }
  }

  return result.join('');
}
/**
 * 读取Token
 */
export function Token() {
  var arr, reg = new RegExp("(^| )platform_token=([^;]*)(;|$)"); //正则匹配
  if (arr === document.cookie.match(reg)) {
    return unescape(arr[2]);
  }
  else {
    return null;
  }
}
/* istanbul ignore next */
const trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

/* istanbul ignore next */
export function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
export function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
/** 节流函数
 *  函数将每隔 n 秒执行一次，常见的场景为：
 *  DOM 元素的拖拽功能实现（mousemove）
 *  搜索联想（keyup）
 *  计算鼠标移动的距离（mousemove）
 *  Canvas 模拟画板功能（mousemove）
 *  射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
 */
export function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, 1000);
  };
}
export function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function () {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => {
      // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的
      // interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments);
    }, 500);
  };
}