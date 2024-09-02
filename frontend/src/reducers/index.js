import { combineReducers } from "redux";
import auth from "./auth";
import learningMode from "./learningMode";
import message from "./message";
import dogReducer from "./dogReducer";
import dogUploaded from "./dogUploaded";
import userDoggyDex from "./userDoggyDex";

const rootReducer =  combineReducers({
  auth,
  message,
  learningMode,
  dogReducer,
  dogUploaded,
  userDoggyDex,
});

export default rootReducer;