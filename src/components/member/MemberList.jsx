import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Member from './Member';
import './MemberList.css';

function MemberList() {
  const [members, setMembers] = useState([]);
  const [data, setData] = useState({
    name: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    const userData = {
      name: data.name,
    };
    axios
      .post('http://localhost:8000/api/members', userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/members')
      .then((res) => res.data)
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="Memberlist">
      <form onSubmit={handleSubmit} className="form">
        <h2>Ajouter un(e) Argonaute</h2>

        <label for="name">Nom de l&apos;Argonaute</label>
        <input
          id="name"
          className="form-name"
          name="name"
          type="text"
          placeholder="Charalampos"
          value={data.name}
          onChange={handleChange}
        />

        <button
          type="submit"
          onClick={() => alert("L'Argonaute a été ajoutée !")}
        >
          Envoyer
        </button>
      </form>

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
