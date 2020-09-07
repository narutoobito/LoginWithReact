export const GET_DETAILS = 'GET_DETAILS';
export const POST_LOGIN = 'POST_LOGIN';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';


export const getDetails = () => dispatch => {
    console.log("loading")
  fetch('https://narutoobito-loginreact.herokuapp.com/read')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_DETAILS,
        payload: data
      })
    ).catch(err=>
        dispatch({
            type: LOGIN_REJECTED,
            payload: err
      }) )
};

export const login = postData => dispatch => {
   console.log("fetching")
  fetch('https://narutoobito-loginreact.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data =>{
      if(data.ok)
        {
        dispatch({
            type: POST_LOGIN,
            payload: data
      })}
      else{ throw new Error("error")}
      }
    ).catch(err=>
        dispatch({
            type: LOGIN_REJECTED,
            payload: err
      }) )
};