import React from 'react';
import firebase from '../firebase.js'
import ScrumPresence from './scrum/ScrumPresence.js';
import { MDBBtn } from 'mdbreact';

export class CheckPresence extends React.Component {

  constructor(props) {
    super(props);

    this.checkBoxValueChange = this.checkBoxValueChange.bind(this);
    this.state = {
      group: {
        name: "",
        members: "",
        meetings: {},
        dates: {
          start:"",
          end: ""
        },
        type: ""
      }
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this._isMounted = true;

    console.log("componentDidMount", this)

    const itemsRef = firebase.database().ref('groups').child(params.groupId);
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = items;

      if(this._isMounted){
        this.setState({group: {...newState}});
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  checkBoxValueChange(e) {
    let newState = {
      ...this.state,
      group: {
        ...this.state.group,
        meetings: {
          ...this.state.group.meetings,
          [e.target.name]: {
            ...this.state.group.meetings[e.target.name],
            attendends: {
              ...this.state.group.meetings[e.target.name].attendends,
              [e.target.dataset.person]: !this.state.group.meetings[e.target.name].attendends[e.target.dataset.person]
            }
          }
        }
      }
    }

    this.setState(newState);
  }

  handleSave(_) {
    const { match: { params } } = this.props;
    firebase.database().ref('groups').child(params.groupId)
      .update(this.state.group);
  }

  render() {
    let renderObj = (<h1>Ładowanie...</h1>);

    if(this.state.group.type === 'scrum') {
      renderObj = (<ScrumPresence state={this.state.group} checkBoxValueChange={this.checkBoxValueChange} />);
    } else if(this.state.group.type === 'online') {
      renderObj = (<h1>Prace nad kursem online trwają</h1>);
    }

    return (
      <div>
       {renderObj}

       <div className="text-center mt-4">
          <MDBBtn color="indigo" type="submit" onClick={_=> this.handleSave(_)}>Zapisz!</MDBBtn>
       </div>

      </div>
    );
  }
}
