import React from 'react';
import './Home.scss';
import firebase from '../firebase.js'
import { GroupElement } from './GroupElement/GroupElement';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import InfoTile from './InfoTile';
export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      groups: {}
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.deactivateGroup = this.deactivateGroup.bind(this);

    const itemsRef = firebase.database().ref('groups');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = items;

      if(this._isMounted) {
        this.setState({
          groups: newState
        });
      }
    });
  }

  deactivateGroup(groupId) {
    this.setState({
      groups: {
        ...this.state.groups,
        [groupId]: {
          ...this.state.groups[groupId],
          active: !this.state.groups[groupId].active
        }
      }
    }, () => {
      firebase.database().ref('groups').child(groupId)
        .update(this.state.groups[groupId]);
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const activeGroups = [],
          unactiveGroups = []
    let view = <h2>Nie masz żadnych grup</h2>;
    let active = {}, unactive = {};
    console.log(this.state.groups)
    for (const key in this.state.groups) {
      if(this.state.groups[key].active) {
        active[key] = this.state.groups[key];
      } else {
        unactive[key] = this.state.groups[key];
      }
    }

    console.log("Active", active, "Unactive", unactive);

    for (const key in active) {
      activeGroups.push(<GroupElement key={key} groupId={key} deactivateGroup={this.deactivateGroup} group={this.state.groups[key]}/>)
    }

    for (const key in unactive) {
      unactiveGroups.push(<GroupElement key={key} groupId={key} deactivateGroup={this.deactivateGroup} group={this.state.groups[key]}/>)
    }

    if(activeGroups.length > 0 || unactiveGroups.length > 0) {
      view = (

        <div className="groups">
          <div className="row">
            <InfoTile header={Object.keys(active).length + " aktywnych grup"}/>
            <InfoTile header={Object.keys(unactive).length + " nieaktywnych grup"}/>

            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-comments"></i>
                  </div>
                  <div className="mr-5">Dodaj nową grupę</div>
                </div>
                <Link to="/add-group" className="card-footer text-white clearfix small z-1">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-table"></i>
              Twoje aktywne grupy
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                  <div className="row dataRow">
                    <div className="col-sm-12">
                      <table className="table dataTable">
                        <thead>
                          <tr>
                            <th>numer</th>
                            <th>nazwa</th>
                            <th>daty</th>
                            <th>akcje</th>
                          </tr>
                        </thead>
                        <tbody>
                          {activeGroups}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>

          <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-table"></i>
              Twoje nieaktywne grupy</div>
            <div className="card-body">
              <div className="table-responsive">
                <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">

                  <div className="row dataRow">
                    <div className="col-sm-12">
                    <table className="table dataTable">
                      <thead>
                        <tr>
                          <th>numer</th>
                          <th>nazwa</th>
                          <th>daty</th>
                          <th>akcje</th>
                        </tr>
                      </thead>
                      <tbody>
                        {unactiveGroups}
                      </tbody>
                    </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
        </div>
      );
    }

    return (
      <div className="home-container">
        <h1>Home</h1>
        {view}
      </div>
    );
  }

}
