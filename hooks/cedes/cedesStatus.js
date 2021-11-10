import React,{useReducer} from 'react';
import cedesContext from './cedesContext';
import cedesReducer from './cedesReducer';

const cedesStatus=(props)=>{
    const initialState={
        id:0,
        cede:"Seleccione una cede"
    }

    const [state, dispatch] = useReducer(cedesReducer, initialState)
    
    const addCedes=(e)=>{
        //console.log("la cede que llega ",e)
        dispatch([e,'add']);
    }

    const resetCedes=()=>{
        dispatch([initialState,"reset"])
    }
    return (
        <cedesContext.Provider value={{
            ubic:state,
            addCedes,
            resetCedes
        }}>
            {props.children}
        </cedesContext.Provider>

    )
}

export default cedesStatus;