import React from 'react';
import { getDateRegistered } from '../helper';
import { useSelector, useDispatch } from 'react-redux';
import { setPerson } from '../store/actions/peopleAction';
import { useHistory } from 'react-router-dom';

export default function People({ person }) {
  const people = useSelector((state) => state.peopleReducer.people);
  const dispatch = useDispatch();
  const history = useHistory();

  function personDetail({ event, id }) {
    event.preventDefault();
    people.map(e => {
      if (e.login.uuid == id) {
        dispatch(setPerson(e));
      }
    })
    history.push('/person-detail/' + id);
  }

  return (
    <div className="col">
      <div className="card h-100 text-light btn-outline-primary card-people" style={{ backgroundColor: '#292E35' }}>
        <a href="#" onClick={(event) => { personDetail({ event, id: person.login.uuid }) }}>
          <img src={person.picture.large} className="card-img-top" alt={person.name.first} />
        </a>
        <div className="card-body">
          {person.name.title === 'Madame' ?
            <a href="#" onClick={(event) => { personDetail({ event, id: person.login.uuid }) }} className='text-light' style={{ textDecoration: 'none' }}>
              <h5 className="card-title">Madame {person.name.first}</h5>
            </a> : (
              person.name.title === 'Miss' ?
                <a href="#" onClick={(event) => { personDetail({ event, id: person.login.uuid }) }} className='text-light' style={{ textDecoration: 'none' }}>
                  <h5 className="card-title">Miss {person.name.first}</h5>
                </a> :
                <a href="#" onClick={(event) => { personDetail({ event, id: person.login.uuid }) }} className='text-light' style={{ textDecoration: 'none' }}>
                  <h5 className="card-title">{person.name.title}
                    <span className='h5'>
                      . {person.name.first}
                    </span>
                  </h5>
                </a>
            )}
        </div>
        <div className="card-footer">
          <small className="text-muted">Joined at {getDateRegistered(person.registered.date)}</small>
        </div>
      </div>
    </div>
  )
}
