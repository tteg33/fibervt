import { DeleteData, GetData, PostData, PutData } from '../../src/utils'
import { Action } from 'redux'

export const onGetModels= (payload) => async(dispatch) => {

	try {
		const response = await GetData('/');
		dispatch({type: Action.LANDING_MODELS, payload: response.data });

	} catch (err) {
		console.log(err)
	}

};


export const onGetModelDetails= (id) => async(dispatch) => { 

	try{
		const response = await GetData('/' + id);

		dispatch({ type: Action.MODEL_DETAILS, payload: response.data});}
	catch (err) {
		console.log(err)
	}

};


export const onAddModel= (id) =>
async(dispatch) => {
	try{
		const response = await PostData('/');
		dispatch({type: Action.ADD_MODEL, payload: response.data });
	} catch (err) {
		console.log(err)
	}
};


export const onDownloadModel= (id) =>
  async(dispatch) => {
          try{
                  const response = await PostData('/');
                  dispatch({type: Action.DOWNLOAD_MODEL, payload: response.data });
          } catch (err) {
                  console.log(err)
          }
};



export const onUploadModel = (id) =>
  async(dispatch) => {
          try{
                  const response = await PostData('/');
                  dispatch({type: Action.ADD_MODEL, payload: response.data });
          } catch (err) {
                  console.log(err)
          }
};


export const onDeleteModel= (id) =>
  async(dispatch) => {
          try{
                  const response = await PostData('/');
                  dispatch({type: Action.DELETE_MODEL, payload: response.data });
          } catch (err) {
                  console.log(err)
          }
  };

