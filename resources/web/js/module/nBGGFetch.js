/**
 * 自定义的fetch，用于返回自定义异常
 * @param url {String} 请求的url
 * @param rr {Object,undefined} 要添加的请求头
 * @param noAddHeader {boolean,undefined} 是否不添加用于标示的请求头
 *
 * */
import RandomAddress from "./RandomAddress.js";

export default async function nBGGFetch(url,rr,noAddHeader){
    if(!noAddHeader){
        if(!rr){
            rr = {headers:{"DeemBear":"true"}};
        }else if(!rr.headers){
            rr.headers = {"DeemBear":"true"};
        }else {
            rr.headers['DeemBear'] = "true";
        }
        rr.headers['randomAddress'] = RandomAddress.randomAddress;
    }
   let re = await fetch(url,rr)
   if(re.headers.get('DeemBearError')){
       let json = await re.json();
       let error= new Error(json.message);
       error.value = json.value;
       error.isNewBingGoGoError = true;
       error.theType = json.type;// 自定义错误类型
       error.theData = json.data;// 自定义错误数据
       throw error;
   }
   return re;
}