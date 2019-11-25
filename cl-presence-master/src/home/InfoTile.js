import React from 'react';

const InfoTile = (props) => {
  console.log("props.footer",  props.footer);
  let footer = null;

  if(props.footer){
    footer =   (
      <a className="card-footer text-white clearfix small z-1" href="#">
        <span className="float-left">{props.footer}</span>
        <span className="float-right">
          <i className="fas fa-angle-right"></i>
        </span>
      </a>
    )
  }

  return (
    <div className="col-xl-3 col-sm-6 mb-3">
      <div className="card text-white bg-success o-hidden h-100">
        <div className="card-body">
          <div className="card-body-icon">
            <i className="fas fa-fw fa-comments"></i>
          </div>
          <div className="mr-5">{props.header}</div>
        </div>
        {footer}
      </div>
    </div>
  );
}

export default InfoTile;
