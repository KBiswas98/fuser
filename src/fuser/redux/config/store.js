import React from "react";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Home from '../../screens/Home/Home'
import AllReducer from '../reducers'


const pConfig = {
      key: "root",
      storage
};

const pReducer = persistReducer(pConfig, AllReducer);
const store = createStore(pReducer, applyMiddleware(thunk, logger));
const pStore = persistStore(store);

export default function Store() {
      return (
            <Provider store={store}>
                  <PersistGate loading={null} persistor={pStore}>
                    <Home/>
                  </PersistGate>
            </Provider>
      );
}