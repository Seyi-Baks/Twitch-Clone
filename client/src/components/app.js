import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header/Header';
import StreamCreate from './streams/StreamCreate/StreamCreate';
import StreamEdit from './streams/StreamEdit/StreamEdit';
import StreamDelete from './streams/StreamDelete/StreamDelete';
import StreamList from './streams/StreamList/StreamList';
import StreamShow from './streams/StreamShow/StreamShow';

import history from '../history/history';


export class app extends Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                <div >
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
                </Router>
            </div>
        )
    }
}

export default app
 