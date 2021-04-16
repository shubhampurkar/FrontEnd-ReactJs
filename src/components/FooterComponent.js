import React, { Component } from 'react';
import './Footer.css'

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All Rights Reserved @Flight Management System 2021</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;