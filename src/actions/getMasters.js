import api from '../api'

export const gettingMasters = (masters) => ({
    type: "GET_MASTERS",
    masters

});


export const getMasters = () => dispatch => 
	api.masters.getMasters().then((masters) => dispatch(gettingMasters(masters)))
