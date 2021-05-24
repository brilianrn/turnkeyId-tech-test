import React from 'react';
import { useSelector } from 'react-redux';

export default function Detail() {
  const person = useSelector((state) => state.peopleReducer.person);

  console.log(person)

  return (
    <div className='container'>
      <div class="card mb-3 bg-dark text-light p-3 mt-4 mb-4">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={person.picture.large} alt={person.name.first} style={{ width: '15em', borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto', display: 'flex' }} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">
                {person.name.title === 'Madame' ?
                  <h3 className="card-title">Madame {person.name.first} {person.name.last}</h3> :
                  (person.name.title === 'Miss' ?
                    <h3 className="card-title">Miss {person.name.first} {person.name.last}</h3> :
                    (person.name.title === 'Monsieur' ?
                      <h3 className="card-title">Monsieur {person.name.first} {person.name.last}</h3> :
                      <h3 className="card-title">{person.name.title}
                        <span className='h3'>
                          . {person.name.first} {person.name.last}
                        </span>
                      </h3>
                    )
                  )}
              </h3>
              <div class="card-text">
                <span>
                  <i style={{ marginRight: '60px' }}>
                    Username
                  </i>
                </span>
                : {person.login.username}
              </div>
              <div class="card-text">
                <span>
                  <i style={{ marginRight: '80px' }}>
                    Gender
                  </i>
                </span>
                : {person.gender}
              </div>
              <div class="card-text">
                <span>
                  <i style={{ marginRight: '95px' }}>
                    Email
                  </i>
                </span>
                : {person.email}
              </div>
              <div class="card-text">
                <span>
                  <i style={{ marginRight: '105px' }}>
                    Age
                  </i>
                </span>
                : {person.dob.age} year
              </div>
              <div class="card-text">
                <span>
                  <i style={{ marginRight: '72px' }}>
                    Location
                  </i>
                </span>
                : {person.location.city}, {person.location.country}
              </div>
              <div class="card-text">
                <span>
                  <i style={{ marginRight: '25px' }}>
                    Phone Number
                  </i>
                </span>
                : {person.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
