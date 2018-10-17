import React from 'react';

/*
    Esse é um componente Stateless, uso ele quando não preciso dos métodos de ciclo de vida do React
    ou do State
*/

const Error = () => {
    return (                         
        <div>
            <div>Something went wrong</div>
            <div>Please, try again later</div>
        </div> 
    );
}

export default Error