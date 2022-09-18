import React from 'react';
import Components from "../Components";
import Context from "../Context/Context";

const Root = () => {
    return(
        <Context>
            <Components />
        </Context>
    )
}

export default Root;
