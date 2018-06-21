// import React from 'react';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import styles from './header.css'

export class Header extends React.Component {
    render() {
        return (
                <html>
                    <body>
                    <span className="acme">Acme Ltd.</span>
                <div className="globe_div"><img src="/assets/globe.png" className="globe_img" hegith="250" width="180"></img></div>
                <div className="text_div">
                    <a className="text">Bacon ipsum dolor amet capicola spare ribs turkey prosciutto brisket tongue pork chop pork fatback pork loin porchetta pancetta. Beef ribs chuck leberkas fatback biltong sausage. Doner brisket tail ball tip tri-tip. Ball tip tongue kevin, jowl pork belly chicken sirloin alcatra salami boudin kielbasa tail buffalo strip steak porchetta. Picanha biltong ham, meatloaf alcatra leberkas jowl.
                    <br></br>
                    Leberkas corned beef pig beef kielbasa ham hock jerky shoulder ham rump porchetta. Chuck turkey tongue cupim, corned beef boudin drumstick shank biltong ham hock ground round sirloin. </a>
                </div>
                </body>
                </html>
        );
    }
}

export default Header;