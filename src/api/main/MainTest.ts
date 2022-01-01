import axios from "axios";

import {USER_API} from "../../helpers/consts";

export class MainTest {
  getAllUser() {
    return axios.get(USER_API.GET_USERS);
  }
}
