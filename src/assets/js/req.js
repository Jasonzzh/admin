import axios from 'axios';

const env = 'prod';

const urlBase = {
  dev: 'localhost:8080',
  prod: 'http://www.zhangqinblog.com/smartApi/'
}

axios.defaults.timeout = 5000
axios.defaults.responseType = 'json'

// get请求封装
const get = (url, params) => {    
  return new Promise((resolve, reject) =>{        
    axios.get(urlBase[env] + url, {            
      params: params        
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)        
    })    
  })
}

// post请求封装
const req = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(urlBase[env] + url, JSON.stringify(params))
    .then(res => {
      resolve(res.data);
    })
    .catch(err =>{
      reject(err.data)
    })
  })
}

export {
  req,
  get,
}