import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, People } from '../components';
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
      <h2 className="text-light">People List</h2>
      {loading ? <Loading /> :
        <>
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
            {people.map((person, i) => {
              return (
                <People person={person} key={i} />
              )
            })}
          </div>
        </>
      }
    </div>
  )
}
