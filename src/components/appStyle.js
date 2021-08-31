import React from 'react';
// import './appStyles.css';

function Style(props) {
  let primary = props.primary ? 'primary' : '';
  return (
    <div>
      {/* <h1 className="error">This is error message</h1> */}
      <h1 className="error">Style sheet</h1>
      <h1 className={`${primary} font-xl`}>Style sheet</h1>
    </div>
  );
}
export default Style;
