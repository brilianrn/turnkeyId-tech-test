import React from 'react';
import { getDateRegistered } from '../helper';

export default function People({ person }) {
  return (
    <div className="col">
      <div className="card h-100 text-light btn-outline-primary card-people" style={{ backgroundColor: '#292E35' }}>
        <a href="#">
          <img src={person.picture.large} className="card-img-top" alt={person.name.first} />
        </a>
        <div className="card-body">
          {person.name.title === 'Madame' ?
            <a href="#" className='text-light' style={{ textDecoration: 'none' }}>
              <h5 className="card-title">Madame {person.name.first}</h5>
            </a> : (
              person.name.title === 'Miss' ?
                <a href="#" className='text-light' style={{ textDecoration: 'none' }}>
                  <h5 className="card-title">Miss {person.name.first}</h5>
                </a> :
                <a href="#" className='text-light' style={{ textDecoration: 'none' }}>
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
