import React from 'react';
import '../App.css';
import MainIntroHeader from './MainIntroHeader'
import MainIntro from './MainIntro'
const Main = () => {
    return(
        <div className="Main">
            <MainIntroHeader/>
            <MainIntro/>
        </div>
    )
}

export default Main;