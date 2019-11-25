import React, { Component } from 'react'

import firebase from '../firebase.js'
import Scrum from './scrum/Scrum.js';
import Online from './online/Online.js';

export class AddGroup extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      members: "",
      meetings: {
      },
      startDate: "",
      endDate: "",
      type: "online"
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    // const itemsRef = firebase.database().ref('groups');
    console.log(this.state, 'gruoppppppp');
    // const newGroup = {
    //   id: 1,
    //   name: group.name,
    //   meetings: group.meetings,
    //   members: group.members,
    //   dates: {
    //     start: "2019-10-31",
    //     end: "2019-10-31"
    //   },
    //   type: group.type,
    //   active: true
    // };
    //
    // //TODO walidacja
    //
    // console.log("n", newGroup);
    // itemsRef.push(newGroup);
    // console.log(emptyGroup, newGroup, 'tutaj??')
    // setGroup(emptyGroup);
    // props.history.push('/');
  };

  changeDateValue = e => {
    const targetValue = e.target.value;
    e.target.id === 'date-start-group' ?
        this.setState({startDate: targetValue}) :
        this.setState({endDate: targetValue});
  };

  changeTextValue = e => {
    const targetValue = e.target.value;
    const targetId = e.target.id;

      switch (targetId) {
        case 'type-group':
          this.setState({type: targetValue});
          break;
        case 'name-group':
          this.setState({name: targetValue});
          break;
        case 'members-group':
          this.setState({members: targetValue});
          break;
      }
  };

  anyDateChange = e => {
    const {members} = this.state;
    const attendendsObj = {};
    console.log("e", e, members);

    members.split(",").forEach(at => {
      attendendsObj[at] = false
    });

    // const updatedGroup = {
    //   ...group,
    //   meetings: {
    //     ...group.meetings,
    //     [e.target.name]: {
    //       date: e.target.value,
    //       attendends: attendendsObj
    //     }
    //   }
    // };
    //
    // setGroup(updatedGroup);
  };

  // const anyOnlineDateChange = (e) => {
  //   console.log("anyOnlineDateChange", e);

  //   const attendendsObj = {};
  //   console.log("group", group);

  //   group.members.split(",").forEach(at => {
  //     attendendsObj[at] = false
  //   })

  //   const updatedGroup = {
  //     ...group,
  //     meetings: {
  //       ...group.meetings,
  //       [e.name]: {
  //         date: e.value,
  //         attendends: attendendsObj
  //       }
  //     }
  //   };

  //   // setGroup(updatedGroup);

  // }


  render () {
    const { name, members, startDate, endDate, type } = this.state;

    return (
      <div className="add-group-container">
        <h3>Dodaj nową grupę</h3>
        <div className="container">
          <div className="row">
            <div className='col col-md-3'></div>
            <div className='col col-md-6'>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="type-group" className="grey-text">
                    Rodzaj zajęć
                  </label>
                  <select id="type-group" className="browser-default custom-select form-control"
                    value={type} onChange={this.changeTextValue}>
                    <option value="scrum">Scrum Lab</option>
                    <option value="online">Online</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="name-group" className="grey-text">
                    Name
                  </label>
                  <input type="text" id="name-group" className="form-control" value={name}
                    onChange={this.changeTextValue}/>
                </div>

                <div className="form-group">
                  <label htmlFor="members-group" className="grey-text">
                    Uczestnicy (po przecinku)
                  </label>
                  <input type="text" id="members-group" className="form-control" value={members}
                    onChange={this.changeTextValue}/>
                </div>

                <div className="form-group">
                  <label htmlFor="date-start-group" className="grey-text">
                    Data rozpoczęcia
                  </label>
                  <input type="date" id="date-start-group" className="form-control" name="start-date"
                    value={startDate} onChange={this.changeDateValue}/>
                </div>

                <div className="form-group">
                  <label htmlFor="date-end-group" className="grey-text">
                    Data zakończenia
                  </label>
                  <input type="date" id="date-end-group" className="form-control" name="end-date"
                    value={endDate} onChange={this.changeDateValue}/>
                </div>

                {type === "online" ?
                    <Online anyDatechange={this.anyDateChange}/> :
                    <Scrum anyDatechange={this.anyDateChange}/>
                }

                <div className="form-group">
                  <button color="indigo" className="btn btn-primary" type="submit">Zapisz!</button>
                </div>

              </form>
            </div>
            <div className='col col-md-3'></div>
          </div>
        </div>
      </div>
    )
  }
}


