export default function createStore(reducer){
// your code here!

    const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach( listener => listener() ) 
    }

    dispatch({})
    return {
      getState: getState,   
      dispatch: dispatch,
      subscribe: subscribe     
      }
  }
