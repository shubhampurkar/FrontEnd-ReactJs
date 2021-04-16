import React, { Component } from 'react'
import './Header.css'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header className = "header">
                    <nav >
                    <div>Flight Management System</div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent