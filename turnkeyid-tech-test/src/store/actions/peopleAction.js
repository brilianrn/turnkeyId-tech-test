import axios from '../../api';
import swal from 'sweetalert';

export function setPeople(payload) {
  return { type: 'people/setPeople', payload };
}

export function setPeopleAsync(setLoading) {
  return ((dispatch) => {
    axios({
      url: '/?results=50',
      method: 'GET'
    })
      .then(({ data }) => {
        swal({
          title: "Welcome to People Gathering!",
          text: "Happy explore :))",
          icon: "success",
          button: "Aww yiss!",
        });
        setLoading(false);
        dispatch(setPeople(data.results));
      })
      .catch(err => {
        console.log(err)
      })
  })
}

export function setPerson(payload) {
  return { type: 'person/setPerson', payload };
}

export function serPersonAsync({ id, setLoading }) {
  return ((dispatch) => {
    axios({
      url: '/?gender=male&results=25',
      method: 'GET'
    })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      })
  })
}