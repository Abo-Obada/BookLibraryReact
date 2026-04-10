import axios from "axios";

const url = import.meta.env.VITE_API_USER_URL;
const csrf = import.meta.env.VITE_CSRF_URL;

export const api = {
  carousel: {
        get: async function get() {
      axios.defaults.withCredentials = true;
      axios.defaults.withXSRFToken = true;
      await axios.get(csrf);
      try {
        const res = await axios.get(url + `carousel`);
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
  }}}