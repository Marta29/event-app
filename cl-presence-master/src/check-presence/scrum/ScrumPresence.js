import React from 'react';

const ScrumPresence = (props) => {
  const rows = []
  const header = [(<th key={1}>Imie</th>)];
  const meetings = {...props.state.meetings};

  if(meetings.planning) {
    header.push((<th key='planning'><strong>{meetings['planning'].date}(planning)</strong></th>))
    delete meetings.planning;
  }

  for (const key in meetings) {
    if (meetings.hasOwnProperty(key)) {
      header.push((
        <th key={key}><strong>{meetings[key].date}({key})</strong></th>
      ));
    }
  }

  props.state.members.split(",").forEach((item, i) => {
    rows.push((
      <tr key={i}>
        <td>{item}</td>
        <td><input type="checkbox" disabled={!props.state.active}  checked={props.state.meetings['planning'].attendends[item]} name="planning" id="" data-person={item} onChange={e => props.checkBoxValueChange(e)} /></td>
        <td><input type="checkbox" disabled={!props.state.active}  checked={props.state.meetings['dayli1'].attendends[item]} name="dayli1" id="" data-person={item} onChange={e => props.checkBoxValueChange(e)}/></td>
        <td><input type="checkbox" disabled={!props.state.active}  checked={props.state.meetings['dayli2'].attendends[item]} name="dayli2" id="" data-person={item} onChange={e => props.checkBoxValueChange(e)}/></td>
        <td><input type="checkbox" disabled={!props.state.active}  checked={props.state.meetings['dayli3'].attendends[item]} name="dayli3" id="" data-person={item} onChange={e => props.checkBoxValueChange(e)}/></td>
        <td><input type="checkbox" disabled={!props.state.active}  checked={props.state.meetings['dayli4'].attendends[item]} name="dayli4" id="" data-person={item} onChange={e => props.checkBoxValueChange(e)}/></td>
        <td><input type="checkbox" disabled={!props.state.active}  checked={props.state.meetings['dayli5'].attendends[item]} name="dayli5" id="" data-person={item} onChange={e => props.checkBoxValueChange(e)}/></td>
        <td><input type="checkbox" disabled={!props.state.active}  checked={props.state.meetings['retro'].attendends[item]} name="retro" id="" data-person={item} onChange={e => props.checkBoxValueChange(e)}/></td>
      </tr>
    ));
  });

  return (
    <div className="presence-container">
      <h3>Sprawdzanie obecnosci dla grupy:</h3>
      <h5>{props.state.name}</h5>

      <div className="groups">
        <table>
          <thead>
            <tr>
              {header}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScrumPresence;
