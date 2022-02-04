import React from 'react';
import './Member.css';

function Member({ member, deleteMember }) {
  return (
    <div className="Member">
      <div className="member-container">
      <button className="btn-member" onClick={() => deleteMember(member.id)}>
           × 
        </button>
        <div className="member-name">{member.name}</div>
        
      </div>
    </div>
  );
}

export default Member;
