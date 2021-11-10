export default (action,type)=>{
    //console.log("en reducer ",action,type)
        if(type[1]==="add"){
            return type[0];
        }
        if(type[1]==="reset"){
            return type[0]
        }
}