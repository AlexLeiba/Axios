import axios from "axios";

// returneazaun obiect cu url-ul de baza si cu tipul contentului
export const Instance = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 10000,
  headers: { "Content-type": "application/json" },
});
