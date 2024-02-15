import { USER_SIGNIN, USER_SIGNOUT } from "../actions";

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_SIGNIN: {
        localStorage.setItem("userInfo", JSON.stringify(payload));
        return { ...state, userInfo: payload.userInfo ,myList:payload.myList};
    }
    
    case USER_SIGNOUT: {
        localStorage.removeItem("userInfo");
        return { ...state, 
        userInfo: null ,
        myList:[],
    };
    }      
    default:
      return { ...state };
  }
};
export default userReducer;
