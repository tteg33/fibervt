import { Action } from './userActions'
import { GetData, PostData } from '../../src/utils'


export const SetAuthToken = async(token) => {
	if(token){
		localStorage.setItem('token', token);
	}else{
		localStorage.clear();}}


export const onSignup = ({username, email, password}) => async(dispatch) =>{
	try {

		const response = await PostData('/user/signup', {
			username, email, password
		});
		const { token } = response.data;
		await SetAuthToken(token);
		return dispatch({ type: Action.SIGNUP, payload: response.data });
	} catch (err) {
		console.log(err)
	}
};



export const onLoginUsername = ({username, password}) => async(dispatch) => {

	try {
		const response = await PostData('/user/login', {username, password});
                const { token } = response.data;
		await SetAuthToken(token);
		return dispatch({ type: Action.LOGIN, payload: response.data });} catch (err) {
			console.log(err)
		}
};



export const onLoginEmail = ({email, password}) => async(dispatch)   => {
  
          try {
                  const response = await PostData('/user/login', {email, password});
                  const { token } = response.data;
                  await SetAuthToken(token);
                  return dispatch({ type: Action.LOGIN, payload: response.data });} catch (err) {
                          console.log(err)
                  }
};



export const onViewProfile = () => async (dispatch) => {

	try{
		const response = await GetData('/user/profile');
		return dispatch({ type: Action.PROFILE, payload: response.data });
	} catch (err) {
		console.log(err)
	}
};


