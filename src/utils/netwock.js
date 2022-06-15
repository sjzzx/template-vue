import axios from 'axios';


//  ----- 自己方法 环境切换  -----
axios.defaults.baseURL = 'https://www.zjnydsj.com/ydxsApi/';

if (process.env.NODE_ENV == 'development') {
  // axios.defaults.baseURL = '/baseUrl';//本地跨域用
  axios.defaults.baseURL = 'http://172.16.2.51:8089/ydxsApi';//孟金良
  // axios.defaults.baseURL = 'http://172.16.2.84:8089/ydxsApi';//严帅
}

axios.defaults.withCredentials = true; //axios 默认不发送cookie，需要全局设置true发送cookie

// 原文链接：https://blog.csdn.net/weixin_44258359/article/details/108086172

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // dd.ready((res) => {
    //   // dd.showLoading({
    //   //   text: '加载中', //提示信息
    //   // }).then();
    // });
    // 发送请求之前可以在这里写一些东西

    // console.log('发送请求之前', config);
    if (config.postType == 'form') {
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      config.data = new URLSearchParams(config.data);
    } else if (
      (config.method == 'post' || config.method == 'POST') &&
      config.headers['Content-Type']
    ) {
      let flag = config.headers['Content-Type'].indexOf(
        'x-www-form-urlencoded'
      );
      if (flag != -1) {
        config.data = new URLSearchParams(config.data);
      }
    }
    // console.log('处理data之后', config);
    return config;
  },
  (error) => {
    // 请求报错的时候做一些事情

    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做一些事情

    // console.log('响应拦截器', response);
    if (response.data.code == 407) {
      router.push('/error407');
    }

    return response;
  },
  (error) => {
    console.log('响应拦截器', error);
    // 请求错误时做些事
    let status = '';
    if (error.request) {
      status = error.request;
    } else if (error.response) {
      status = error.response;
    }

    if (status) {
      switch (status.status) {
        case 407:
          error.message = '登录超时 cookie过期';
          router.push('/407');
          break;
        default:
          error.message = `连接出错(${error.response.status})!`;
      }
    } else {
      error.message = '连接服务器失败!';
    }
    return Promise.reject(error);
  }
);


export default axios;
