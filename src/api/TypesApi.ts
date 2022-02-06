import { Instance } from "./Instance";
import { Props } from "./Types";

export const requestApi = () => ({
  // 1 object registration
  registration: async (parameters: Props) => {
    const { data, status } = await Instance({
      url: "/register",
      method: "POST",
      data: parameters,
    });
    return { data, status };
  },
  // 2 object Login

  login: async (parameters: Props) => {
    const { data, status } = await Instance({
      url: "/login",
      method: "POST",
      data: parameters,
    });

    return { data, status };
  },

  getData: async () => {
    const { data } = await Instance({
      url: "./users?page",
      method: "GET",
    });
    return data;
  },

  listUsers: async () => {
    const { data } = await Instance({
      url: "/uses?/page=2",
      method: "GET",
    });

    return data;
  },
});
