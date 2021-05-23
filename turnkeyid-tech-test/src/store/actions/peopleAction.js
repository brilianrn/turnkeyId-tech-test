import axios from '../../api';
import swal from 'sweetalert';

export function setPeople(payload) {
  return { type: 'people/setPeople', payload };
}

export function setPeopleAsync(setLoading) {
  return ((dispatch) => {
    axios({
      url: '/?results=20',
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