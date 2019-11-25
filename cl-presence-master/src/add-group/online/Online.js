import React, {Component} from 'react';
import MeetingDate from './MeetingDate';

export class Online extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: [],
    };
  }

  addNewDate = (e) => {
    const { anyDateChange } = this.props;
    const { counter } = this.state;
    e.preventDefault();
    this.setState({
      counter: [...this.state.counter, <MeetingDate key={counter} counter={counter} anyDatechange={anyDateChange} />]
    })


    // setDate({ dates: [...dates.dates, <MeetingDate key={counter} counter={counter} anyDatechange={e => anyDatechange(e)}/>] })
  };

  render() {
    const { anyDateChange } = this.props;
    const { counter } = this.state;

    return (
        <div className="online-container">
          <h4>Wybierz daty spotkań kursu online:</h4>
          <MeetingDate key={counter} counter={counter} anyDatechange={anyDateChange}/>
          {counter}
          <button onClick={this.addNewDate}>Nowa data</button>
        </div>
    );
  };
}

export default Online;
