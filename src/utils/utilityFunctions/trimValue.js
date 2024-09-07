export const trimValue =(values)=>{
const trimmedValues={};
for(const key in values){
    if(typeof values[key]==='string'){
        trimmedValues[key]=values[key].trim();
    }
    else{
         trimmedValues[key]=values[key];
    }
}
return trimmedValues;
}