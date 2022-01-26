import React from 'react';
import './Member.css';

function Member({ member }) {
  return (
    <div className="Member">
      <div className="member-container">
        <div className="member-name">{member.name}</div>
      </div>
    </div>
  );
}

export default Member;
