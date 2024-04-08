// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling

function Sidebar() {
    return ( <
        div className = "sidebar" >
        <
        a href = "#"
        className = "logo" >
        <
        img src = "https://pngedits.com/public/uploads/preview/instagram-logo-png-image-download-11617068196c1gb8cm06w.png"
        alt = "" / >
        <
        /a>

        <
        div className = "profile" >
        <
        div className = "profile-img" >
        <
        img src = "https://aaah0mnbncqtinas.public.blob.vercel-storage.com/OPy2pNUz92-no-background-ZrOqISx32YRnwHFw2a0NT3VXYyZ0LT.png"
        alt = "" / >
        <
        /div> <
        div className = "name" >
        <
        h1 > Sakshi Rakhewar < /h1> <
        img src = "https://i.pinimg.com/736x/3d/0a/5b/3d0a5bfb42f76254b544677d8b0b91a2.jpg"
        alt = "" / >
        <
        /div> <
        span > @sakshi_ < /span> <
        /div> <
        div className = "about" >
        <
        div className = "box" >
        <
        h3 > 54 < /h3> <
        span > Posts < /span> <
        /div> <
        div className = "box" >
        <
        h3 > 14.4 k < /h3> <
        span > Followers < /span> <
        /div> <
        div className = "box" >
        <
        h3 > 14 < /h3> <
        span > Following < /span> <
        /div> <
        /div> <
        div className = "menu" >
        <
        a href = "#"
        className = "active" >
        <
        span className = "icon" >
        <
        i className = "ri-function-line" > < /i> <
        /span> Feed <
        /a> <
        a href = "#" >
        <
        span className = "icon" >
        <
        i className = "ri-search-line" > < /i> <
        /span> Explore <
        /a> <
        a href = "#" >
        <
        span className = "icon" >
        <
        i className = "ri-notification-4-line" > < /i> <
        /span> Notification <
        /a> <
        a href = "#" >
        <
        span className = "icon" >
        <
        i className = "ri-mail-unread-fill" > < /i> <
        /span> Message <
        /a> <
        a href = "#" >
        <
        span className = "icon" >
        <
        i className = "ri-send-plane-fill" > < /i> <
        /span> Direct <
        /a> <
        a href = "#" >
        <
        span className = "icon" >
        <
        i className = "ri-bar-chart-2-fill" > < /i> <
        /span> Stats <
        /a> <
        a href = "#" >
        <
        span className = "icon" >
        <
        i className = "ri-settings-5-fill" > < /i> <
        /span> Setting <
        /a> <
        a href = "#" >
        <
        span className = "icon" >
        <
        i className = "ri-logout-box-r-line" > < /i> <
        /span> Logout <
        /a> <
        /div> <
        /div>
    );
}

export default Sidebar;