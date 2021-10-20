import React from 'react';
import { AppHeader } from './cmps/AppHeader';
import { AppFooter } from './cmps/AppFooter';
import { HomePage } from './cmps/HomePage';


export class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <section className="app">
        <AppHeader />
        <HomePage />
        <AppFooter />
      </section>
    )
  }
}

