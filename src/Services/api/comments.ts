import axios from "axios";
import type { CommentPost } from "../model/commentModel";

const url = "http://localhost:8000/api/";
const csrf = "http://localhost:8000/sanctum/csrf-cookie";
export const api =
{

    comments : {
        get:  async function getComment(page:string,uuid:string | undefined) {
      axios.defaults.withCredentials = true;
      axios.defaults.withXSRFToken = true;
      await axios.get(csrf);
      try {
        const res = await axios.get(url + `comments/${uuid}/?page=${page}`);
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

    post:  async function postComment(comment:CommentPost) {
      axios.defaults.withCredentials = true;
      axios.defaults.withXSRFToken = true;
      await axios.get(csrf);
      try {
        const res = await axios.post(url + `createcomment/${comment.uuid}`,comment);
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