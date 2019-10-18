import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStreams } from '../../../actions/index';
import { Link } from 'react-router-dom';

export class StreamList extends Component {

    renderList(){
        return this.props.streams.map(stream => {
            return(
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId ){
            return (
                <div className="right floated content">
                    <button className="ui button primary">Edit</button>
                    <button className="ui button negative">Delete</button>
                </div>
            );
        }
    }

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderCreateButton(){
        if(this.props.isSignedIn){
            return(
              <div style={{ textAlign: 'right'}}>
                  <Link className="ui button primary" to="/streams/new">Create Stream</Link>
              </div>  
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                { this.renderList() }
                </div>
                <div>
                        {this.renderCreateButton()}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
   return { 
       streams: Object.values(state.streams),
       currentUserId: state.auth.userId,
       isSignedIn: state.auth.isSignedIn
     }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList)
