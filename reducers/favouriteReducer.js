const initialState = [];

const favouriteReducer = (state=initialState,actions)=>{
    switch(actions.type)
    {
        case "ADDFAV":{
            return [actions.payload,...state];
        }
        case "REMFAV":{
            const id = actions.payload;
            state = state.filter((data)=>{
                console.log(data);
                return data!=id;
            })
            return state;
        }
        default :return state;
    }
}

export default favouriteReducer;