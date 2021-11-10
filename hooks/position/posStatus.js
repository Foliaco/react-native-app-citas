import React,{useReducer} from 'react'
import PosReducer from './posReducer'
import PosContext from './posContext';

//recuerda que son las cedes, hazla mamahuevo>:v

const PosState=(props)=>{
    const initialState=1;

    const [state, dispatch] = useReducer(PosReducer, initialState)

    const addPos=()=>{

        dispatch([state,"add"])
    }
    const resetPos=()=>{
        console.log('se reinicia las posiciones')
        dispatch([state,"reset"])
    }
    return(
        <PosContext.Provider value={{
            position:state,
            addPos,
            resetPos
            }}>
            {props.children}
        </PosContext.Provider>
    )
}

export default PosState;