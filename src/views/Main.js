import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Switch, Route  } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import '../custom.css';
import Product from './Product';
import Cart from './Cart';


export default class Main extends Component {
    render() {
        // console.log(this.props.posts)
        return (
            <div>
                <header>
                    <Navbar />
                </header>

                <main>
                    <Switch className="container">
                        <Route path={'/'} render={() => <Home posts={this.props.posts}/> } />
                        <Route path= { '/profile'} render= {() =><Profile />} />
                        <Route path={'/contact'} render={() => <Contact />} />
                        <Route path={'/shop'} render={() => <Product />} />
                        <Route path={'/shop/cart'} render={() => <Cart />} />
                    </Switch>
                </main>

                <footer>

                </footer>
            </div>
        )
    }
}
