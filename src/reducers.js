import { combineReducers } from 'redux';
import { reducer as userReducer } from './features/User/actions';
import { reducer as postReducer } from './features/Post/actions';
import { reducer as commentsReducer } from './features/Comment/actions';
import { reducer as appReducer } from './features/App/actions';
import { reducer as walletReducer } from './features/Wallet/actions';

export default combineReducers({
  app: appReducer,
  user: userReducer,
  post: postReducer,
  comments: commentsReducer,
  wallet: walletReducer,
});
