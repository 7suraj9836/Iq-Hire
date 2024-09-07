import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import  {thunk}  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authenticationReducer } from "./reducer/authReducer";
import { jobDescriptionFileUploadReducer } from "./reducer/chatbotReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { profileReducer } from './reducer/profileReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    authenticationReducer: authenticationReducer,
    profileReducer:profileReducer,
    jobDescriptionFileUploadReducer:jobDescriptionFileUploadReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(persistedReducer,applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };