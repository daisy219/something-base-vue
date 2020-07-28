import { http_get } from './index.js';

export async function get_down_upload_info(params) {
  const result = await http_get('http://10.10.10.116:9002/auth/api/user/wk-info', {params: params});
  return result.data
}