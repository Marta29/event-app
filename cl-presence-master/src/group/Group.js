import React from 'react';
import firebase from '../firebase.js'

class Group extends React.Component {

  constructor(props) {
    super(props);
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

  updateField(field, value) {
    this.setState({group: {...this.state.group, [field]: value}})
  }

  handleSubmit(_){
    const { match: { params } } = this.props;
    firebase.database().ref('groups').child(params.groupId)
      .update(this.state.group);
  }

  render() {
    return (
      <div className="group-info-container">
        <h1>Grupa: {this.state.group.name} </h1>

          <div className="container">
          <div className="row">
            <div className='col col-md-3'></div>
            <div className='col col-md-6'>
              <form onSubmit={_ => this.handleSubmit(_)}>
                <label htmlFor="type-group" className="grey-text">
                  Rodzaj zajęć
                </label>
                <select id="type-group"
                    className="browser-default custom-select"
                    value={this.state.group.type}
                    onChange={e => this.updateField("type", e.target.value)}
                    disabled={!this.state.group.active}>
                  <option value="scrum">Scrum Lab</option>
                  <option value="online">Online</option>
                </select>

                <label htmlFor="name-group" className="grey-text">
                  Name
                </label>
                <input type="text"
                  id="name-group"
                  value={this.state.group.name}
                  onChange={e => this.updateField("name", e.target.value)}
                  className="form-control"
                  disabled={!this.state.group.active}/>

                <br />

                <label htmlFor="members-group" className="grey-text">
                  Uczestnicy (po przecinku)
                </label>
                <input type="text"
                  id="members-group"
                  value={this.state.group.members}
                  onChange={e => this.updateField("members", e.target.value)}
                  className="form-control"
                  disabled={!this.state.group.active}/>

                <div className="text-center mt-4">
                  <label htmlFor="date-start-group" className="grey-text">
                    Data rozpoczęcia
                  </label>
                  <input type="date"
                    id="date-start-group"
                    className="form-control"
                    name="start-date"
                    value={this.state.group.dates.start}
                    onChange={e => this.setState({group: {...this.state.group, dates: { ...this.state.group.dates, start: e.target.value } }})}
                    disabled={!this.state.group.active}/>
                </div>

                <div className="text-center mt-4">
                  <label htmlFor="date-end-group" className="grey-text">
                    Data zakończenia
                  </label>
                  <input type="date"
                    id="date-end-group"
                    className='form-control'
                    name="end-date"
                    value={this.state.group.dates.end}
                    onChange={e => this.setState({group: {...this.state.group, dates: { ...this.state.group.dates, end: e.target.value } }})}
                    disabled={!this.state.group.active}/>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary" disabled={!this.state.group.active}>Zapisz!</button>
                </div>

              </form>
            </div>
            <div className='col col-md-3'></div>
          </div>
          </div>
      </div>
      );
  }
}

export default Group;
