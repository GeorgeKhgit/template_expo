import {createContext} from "react";

import {UserStore} from "../store/UserStore";

const store = {
  userStore: new UserStore(),
};

export const storeContext = createContext(store);
