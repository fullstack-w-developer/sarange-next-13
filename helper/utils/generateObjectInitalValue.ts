export const generateObjectInitailValue = (name:string,edit:any[],create:any[])=>{
    if(name === "ویرایش" && edit){
       return edit?.reduce((acc, item) => { acc[item.Value] = ""; return acc; }, {})
    }
    if(name === "ایجاد" && create){
       return create?.reduce((acc, item) => { acc[item.Value] = ""; return acc; }, {})
    }

    return {}

}