import React from 'react';

/*
    Esse é um componente Stateless, uso ele quando não preciso dos métodos de ciclo de vida do React
    ou do State
*/

const Loading = () => {
    return (                         
        <div>
            <div>Loading...</div>
            <div>Please, wait while the data is loading</div>
        </div> 
    );
}

export default Loading