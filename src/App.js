// App.js
import React from 'react';
import './App.css';
import Sidebar from './component/Sidebar/Sidebar'; // Correct import
import Header from './component/Header/Header'; // Correct import
import Stories from './component/Stories/Stories'; // Correct import
import Feed from './component/Feed/Feed'; // Correct import

function App() {
    return ( <
        div className = "App" >
        <
        Sidebar / >
        <
        div className = "main-home" >
        <
        Header / >
        <
        Stories / >
        <
        Feed / >
        <
        /div> <
        /div>
    );
}

export default App;