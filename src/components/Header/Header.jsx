import React from "react";


const styles= {
    headerStyle : {
        background: {
            background: "neonyellow"
        },
        headingStyle: {
            fontSize: 100
        }
    }
}
function Header() {
    return (

    <header style={styles.headerStyle} className="header">
        <h1>Let's Get Clicky!</h1>
        <p></p>
    </header>
    

    )
}
export default Header;
