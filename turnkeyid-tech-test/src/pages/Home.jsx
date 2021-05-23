import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components';
import { setPeopleAsync } from '../store/actions/peopleAction';

export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const people = useSelector((state) => state.peopleReducer.people);

  useEffect(() => {
    dispatch(setPeopleAsync(setLoading));
  }, []);

  loading ? console.log('loading') : console.log(people)

  return (
    <div className='container'>
      <h2>People List</h2>
      {loading ? <Loading /> :
        <>
          <div class="row row-cols-1 row-cols-md-4 g-4 mt-1">
            {people.map(person => {
              return (
                <div class="col shadow">
                  <div class="card h-100 bg-dark text-light">
                    <a href="#">
                      <img src={person.picture.large} class="card-img-top" alt="..." />
                    </a>
                    <div class="card-body">
                      <a href="#" className='text-light' style={{ textDecoration: 'none' }}>
                        <h5 class="card-title">Card title</h5>
                      </a>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      }
    </div>
  )
}
