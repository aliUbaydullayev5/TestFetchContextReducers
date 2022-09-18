import React, {useContext} from 'react';
import {Block} from "./style";
import {MainContext} from "../Context/Context";


const Components = () => {

    const [state, dispatch] = useContext(MainContext);


    return(
        <Block>
            <table border={'1'}>
                {state?.map((value, id)=> (
                    <tr key={id}>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.address.street}</td>
                        <td><button onClick={()=> dispatch({type: 'remove', payload: value.id})}>Remove Item</button></td>
                    </tr>
                ))}
            </table>
        </Block>
    )
}

export default Components;