import { requestApi } from "./TypesApi";

// Api este o functie in interiorul careia se afla functia care are toate tipurile de request (ca obiecte!)
export const api = () => ({
  requestApi: () => requestApi(),
});
