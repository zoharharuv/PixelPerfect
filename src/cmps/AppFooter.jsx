import { Component } from "react";
import facebook from '../assets/img/icon-facebook.svg'
import pinterest from '../assets/img/icon-pinterest.svg'
import twitter from '../assets/img/icon-twitter.svg'

export class AppFooter extends Component {
    render() {
        return (
            <section className="app-footer">
                <div className="footer-content main-layout flex align-center space-between">

                    <div className="footer-left flex align-center">

                        <div className="footer-links flex align-center col">
                            <h3>myteam</h3>
                            <nav className="flex">
                                <span>home</span>
                                <span>about</span>
                            </nav>
                        </div>

                        <div className="flex col">
                            <span className="dark-text">987  Hillcrest Lane</span>
                            <span className="dark-text">Irvine, CA</span>
                            <span className="dark-text">California 92714</span>
                            <span className="dark-text">Call Us : 949-833-7432</span>
                        </div>

                    </div>

                    <div className="footer-right flex col align-center">

                        <div className="footer-links flex align-center">
                            <span><img src={facebook} alt="facebook" /></span>
                            <span><img src={pinterest} alt="pinterest" /></span>
                            <span><img src={twitter} alt="facebook" /></span>
                        </div>

                        <div className="footer-copyright flex align-center">
                            <span className="dark-text">Copyright 2020. All Rights Reserved</span>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}