import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
// export const FetchEventSource = fetchEventSource;

export const jzAxios = axios.create({
    timeout: 20000, // 设置请求超时时间
    headers: {common: {"Cache-control": "no-cache"}}
    // headers: {common: {Authorization: useTokenStore().token}}
})


export const UUID = () => {
    return uuidv4()
}


// 缺点：只能get、无法添加header、body
// 放弃
// export function SSE(url, callback) {
//     const eventSource = new EventSource(url);
//     eventSource.onopen = (event) => {
//         console.log("Connection opened:", event);
//     }
//     eventSource.onmessage = (event) => {
//         callback(event.data);
//     }
//     eventSource.onerror = (event) => {
//         if (event.readyState === eventSource.CLOSED) {
//             console.log("Connection closed");
//         } else {
//             console.log("Error:", event);
//         }
//     }
//     return true;
// }

// 示例用法
// const apiUrl = 'https://example.com/api';
// const postData = { key: 'value' };
//
// postRequest(apiUrl, postData)
//     .then((result) => {
//         // 处理成功的结果
//     })
//     .catch((error) => {
//         // 处理错误
//     });
