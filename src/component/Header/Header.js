// Header.js
import React from 'react';
import './Header.css';

function Header() {
    return ( <
        div className = "header" >
        <
        div className = "search" >
        <
        i className = "ri-search-line" > < /i> <
        input type = "text"
        placeholder = "Search" / >
        <
        /div> <
        div className = "header-content" >
        <
        i className = "ri-notification-4-line" > < /i> <
        i className = "ri-mail-unread-fill" > < /i> <
        a href = "#"
        className = "btn" >
        <
        i className = "ri-add-circle-fill" > < /i> <
        div className = "btn-text" > Add Photo < /div> <
        /a> <
        /div> <
        /div>
    );
}

export default Header;