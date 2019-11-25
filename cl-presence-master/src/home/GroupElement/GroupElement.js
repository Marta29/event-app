import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function GroupElement(props) {
  let row = (<tr></tr>)

  let deactivateBtn = props.group.active
      ?
        <a href="#" onClick={e => {e.preventDefault(); props.deactivateGroup(props.groupId)}}>Zakończ</a>
      :
        <span>Zakończona!</span>

  if(props.group) {
    row = (
    <tr>
      <td>{props.group.id}</td>
      <td>{props.group.name}</td>
      <td>{props.group.dates.start} - {props.group.dates.end}</td>
      <td>
        <span>
          <Link to={"/group/" + props.groupId}>Otwórz</Link>
        </span>
        <span>
          <Link to={"/check-presence/" + props.groupId}>Sprawdz obecnosc</Link>
        </span>
        <span>
           {deactivateBtn}
        </span>
      </td>
     </tr>
    )
  }

  return row;

}
