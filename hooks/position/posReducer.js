
export default (action,a)=>{
    console.log(action)
    if(a[1]==="add"){
        return action+1;
    }
    else if(a[1]=="reset"){
        return 1;
    }

}