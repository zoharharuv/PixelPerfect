import { Component } from "react";

export class AppHeader extends Component {
    render() {
        return (
            <section className="app-header flex align-center space-between main-layout">
                <div className="flex align-center">
                    <h3>myteam</h3>
                    <nav className="flex">
                        <span>home</span>
                        <span>about</span>
                    </nav>
                </div>
                <button>
                    <span>
                        contact us
                    </span>
                </button>
            </section>
        )
    }
}