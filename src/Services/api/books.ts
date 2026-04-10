import axios from "axios";
const url = import.meta.env.VITE_API_USER_URL;
const csrf = import.meta.env.VITE_CSRF_URL;


export const api = {
  //get books only without categorization.
  bookCover: {
    get: async function get(page:string) {
      axios.defaults.withCredentials = true;
      axios.defaults.withXSRFToken = true;
      await axios.get(csrf);
      try {
        const res = await axios.get(url + `bookcover?page=${page}`);
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const status = error.response?.status ?? 0;
          const err = new Error(error.message) as Error & { status: number };
          err.status = status;
          throw err;
        }
        throw error;
      }
    },
    //get books with pagination and categorization.
    getCategorized: async function getCategorized(page:string,category:string) {
      axios.defaults.withCredentials = true;
      axios.defaults.withXSRFToken = true;
      await axios.get(csrf);
      try {
        const res = await axios.get(url + `bookcategory?cq=${category}&page=${page}`);
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const status = error.response?.status ?? 0;
          const err = new Error(error.message) as Error & { status: number };
          err.status = status;
          throw err;
        }
        throw error;
      }
    }
  },
  bookContent:{
    get: async function get(uuid:string | undefined){
      await axios.get(csrf);
       try {
        const res = await axios.get(url + `showBook/${uuid}`);
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const status = error.response?.status ?? 0;
          const err = new Error(error.message) as Error & { status: number };
          err.status = status;
          throw err;
        }
        throw error;
      }
    }
  } 
}
