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
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  }
  else {
    return null;
  }
}