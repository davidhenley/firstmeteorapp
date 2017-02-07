import React from 'react';

export default (props) => {
  const total = props.ups + props.downs;
  const ups = Math.floor((props.ups/total) * 100);
  const downs = 100 - ups;
  return (
    <div className="image-score">
      Ups/downs
      <div className="progress">
        <div className="progress-bar progress-bar-success progress-bar-striped" style={{ width: `${ups}%` }}>{props.ups}</div>
        <div className="progress-bar progress-bar-danger progress-bar-striped"  style={{ width: `${downs}%` }}>{props.downs}</div>
      </div>
    </div>
  );
}
