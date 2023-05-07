/**
 * 自定义的fetch，用于返回自定义异常
 * */
export default async function nBGGFetch(url,rr){
    if(!rr){
        rr = {headers:{"DeemBear":"true"}};
    }else if(!rr.headers){
        rr.headers = {"DeemBear":"true"};
    }else {
        rr.headers['DeemBear'] = "true";
    }
   let re = await fetch(url,rr)
   if(re.headers.get('DeemBearError')){
       let json = await re.json();
       let error= new Error(json.message);
       error.value = json.value;
       error.isNewBingGoGoError = true;
       throw error;
   }
   return re;
}