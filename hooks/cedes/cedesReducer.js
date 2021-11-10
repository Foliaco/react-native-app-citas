export default (action,type)=>{
    //console.log("en reducer ",action,type)
        if(type[1]==="add"){
            return type[0];
        }
        if(type[1]==="reset"){
            console.log("reset success -",type[0])
            return type[0]
        }
}