import { Component } from "react";
import kady from '../assets/img/avatar-kady.jpg'
import aiysha from '../assets/img/avatar-aiysha.jpg'
import arthur from '../assets/img/avatar-arthur.jpg'
import person from '../assets/img/icon-person.svg'
import cog from '../assets/img/icon-cog.svg'
import chart from '../assets/img/icon-chart.svg'
import quotes from '../assets/img/icon-quotes.svg'
import bodyBottom from '../assets/img/home-body-bottom.svg'
import footerTop from '../assets/img/home-body-footer-top.svg'
import footerBottom from '../assets/img/home-body-footer-bottom.svg'
import getStartedSvg from '../assets/img/home-get-started-bottom.svg'

export class HomePage extends Component {
    render() {
        return (
            <section className="home-page">
                <div className="home-header main-layout flex">
                    <h1>
                        Find the
                        best <span>talent</span>
                    </h1>
                    <p>
                        Finding the right people and building high
                        performing teams can be hard. Most companies
                        aren’t tapping into the abundance of global talent.
                        We’re about to change that.
                    </p>
                </div>

                <div className="home-body relative">
                    <div className="home-body-content main-layout flex">
                        <div className="home-body-title">
                            <h2>
                                Build & manage distributed teams like no one else.
                            </h2>
                        </div>

                        <div className="home-body-list">
                            <ul className="flex col clean">
                                <li>
                                    <img src={person} alt="person" />
                                    <div className="flex col">
                                        <h4>Experienced Individuals</h4>
                                        <small>
                                            Our network is made up of highly experienced professionals who are passionate about what they do.
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <img src={cog} alt="cog" />
                                    <div className="flex col">
                                        <h4>Easy to Implement</h4>
                                        <small>
                                            Our processes have been refined over years of implementation meaning our teams always deliver.
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <img src={chart} alt="chart" />
                                    <div className="flex col">
                                        <h4>Enhanced Productivity</h4>
                                        <small>
                                            Our customized platform with in-built analytics helps you manage your distributed teams.
                                        </small>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <img className="absolute" style={{bottom: 0, right: -100, overflow: 'hidden'}} src={bodyBottom} alt="ftop" />

                </div>


                <div className="home-footer relative">
                    <div className="main-layout flex col center-center">
                        <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                        <aside className="flex">
                            <article className="relative">
                                <img className="quotes absolute" src={quotes} alt="quotes" />
                                <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                                <h4>Kady Baker</h4>
                                <small>Product Manager at Bookmark</small>
                                <img className="profile-photo" src={kady} alt="kady" />
                            </article>

                            <article className="relative">
                                <img className="quotes absolute" src={quotes} alt="quotes" />
                                <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                                <h4>Aiysha Reese</h4>
                                <small>Founder of Manage</small>
                                <img className="profile-photo" src={aiysha} alt="aiysha" />
                            </article>

                            <article className="relative">
                                <img className="quotes absolute" src={quotes} alt="quotes" />
                                <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                                <h4>Arthur Clarke</h4>
                                <small>Co-founder of MyPhysio</small>
                                <img className="profile-photo" src={arthur} alt="artur" />
                            </article>

                        </aside>
                    </div>
                    <img className="absolute" style={{top: 0, left: 0}} src={footerTop} alt="ftop" />
                    <img className="absolute" style={{bottom: 0, right: 0}} src={footerBottom} alt="fbottom" />
                </div>


                <div className="get-started relative">
                    <img className="absolute" style={{bottom: 0, left: 0}} src={getStartedSvg} alt="gsvg" />
                    <div className="main-layout flex align-center space-between">
                        <h2>Ready to get started?</h2>
                        <button>
                            <span>
                                contact us
                            </span>
                        </button>
                    </div>
                </div>


            </section>
        )
    }
}


