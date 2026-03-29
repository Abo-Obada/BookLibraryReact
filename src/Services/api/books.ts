import axios from "axios";
const url = "http://localhost:8000/api/";
const csrf = "http://localhost:8000/sanctum/csrf-cookie";
export const carouselSwapper = [
  {
    title: "لا تنسوا أهل غزة من صالح الدعاء",
    image: "https://www.aljazeera.com/wp-content/uploads/2025/03/AP25061511413382-1741094092.jpg",
  }
  ,
  {
    title: "رمضان كريم. ينعاد علينا و عليكم بالصحة و العافية",
    image: "https://jamalouki.net/uploads/imported_images/uploads/article/default_article/92ba20246f2f364e6907972eaac0150a.webp",
  }
  ,
  {
    title: "صبراً يا أماه صبراً و إن فاض الدمعي لسال الزبد",
    image: "https://www.aljazeera.net/wp-content/uploads/2020/09/BOOK-ARABIC-2.jpg?resize=1920%2C1280&quality=80",
    backdropColor: ""
  },
  {
    title: "جميع كتب أبن تيمية رحمه الله",
    image: "https://qawl.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-10-at-16.56.33-1024x576.jpeg",
    backdropColor: "",
  },

  {
    title: "فلنقرأ كل ما يصل إلى أيدينا بحذر وبعقل ناقد ، فما أكثر ما يدس لنا من سموم يراد بها هلاكنا",
    image: "https://www.aljazeera.net/wp-content/uploads/2022/12/256-2.jpg?resize=730%2C410&quality=80",
    backdropColor: "",
  },
];



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
