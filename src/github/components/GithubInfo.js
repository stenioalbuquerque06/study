import React from 'react';
import  Profile  from './Profile';
import Repos from './Repos';

const GithubInfo = () => {
    return (
        <div className="App">
            <Profile />
            <Repos />
        </div>
    );
}

export default GithubInfo;