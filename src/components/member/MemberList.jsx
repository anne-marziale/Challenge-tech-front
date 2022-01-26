import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Member from './Member';
import './MemberList.css';

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/members')
      .then((res) => res.data)
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="Memberlist">
      <div className='form'>
      <h2>Ajouter un(e) Argonaute</h2>

      <label for="name">Nom de l&apos;Argonaute</label>
      <input id="name" name="name" type="text" placeholder="Charalampos" />
      <button type="submit">Envoyer</button>
      </div>

      <h2 className="member-title">Membres de l'équipage</h2>
      <div className="member-container">
        {members.map((member) => (
          <div key={member.id}>
            <Member member={member} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberList;
