import React,{useReducer} from 'react';
import ProfeContext from './ProfeContex';
import ProfeReducer from './ProfeReducer';

const ProfeState=(props)=>{

    const initialState={
        id:0,
        name:"Seleccione un profesional",
        gen:null,
        prof:"nothing"
    }

    const [state, dispatch] = useReducer(ProfeReducer, initialState)

    const addProfe=(p)=>{
        dispatch([p,'add'])
    }
    const resetProfe=()=>{
        dispatch([initialState,"reset"])
    }
    return(
        <ProfeContext.Provider value={{
            profe:state,
            addProfe,
            resetProfe
        }}>
            {props.children}
        </ProfeContext.Provider>
    )
}

export default ProfeState;