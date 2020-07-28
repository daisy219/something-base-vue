const W = window;
const MAIN_CONFIG = W.MAIN_CONFIG;
if ( ! MAIN_CONFIG) { console.error('主配置文件 MAIN_CONFIG.js 不存在，请检查!'); }

// ---------------------------- 开发环境判断 ----------------------------
export const ENV = { is_dev: process.env.NODE_ENV === 'development' };
export function IS_DEV() { return MAIN_CONFIG.__DEV__; }
W.IS_DEV = IS_DEV;


// 接口地址
export const BASE_API_ROOT = MAIN_CONFIG.BASE_API_ROOT;


export const EWEBEDITOR_URL = '/ewebeditor/ewebeditor.htm';
export const EWEBEDITOR_STYLE = 'expand600';
export const EWEBEDITOR_SKIN = 'flat10';
export function create_ewebeditor_src(editor_key) {
  return `${EWEBEDITOR_URL}?id=content${editor_key}&style=${EWEBEDITOR_STYLE}&skin=${EWEBEDITOR_SKIN}`;
}