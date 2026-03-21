import axios from "axios";
import type { Params } from "react-router-dom";
//This is API mimic folder for pretending that we have an Actual API but, we don't :D. 
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


export const book2 = [
  {
    title: "عن الرواية",
    value: `
رواية (أو كتاب) قوة عقلك الباطن يُعد من أشهر كتب تطوير الذات التي تركز على العلاقة بين العقل الواعي والعقل الباطن.
الكتاب يطرح فكرة أساسية مفادها أن الإنسان يستطيع تغيير واقعه وحياته بالكامل من خلال تغيير طريقة تفكيره ومعتقداته الداخلية.
يعتمد الكتاب على أسلوب بسيط ومباشر، ويجمع بين الشرح النفسي والأمثلة الحياتية، مع لمسة روحانية واضحة.
    `
  },
  {
    title: "اسم الراوي / المؤلف",
    value: `
مؤلف الكتاب هو جوزيف ميرفي، وهو كاتب وباحث في مجال العقل الباطن والتنمية البشرية.
اشتهر بربطه بين علم النفس والإيمان الداخلي، وكان يرى أن الإيمان العميق بالفكرة
هو المفتاح الأساسي لتأثير العقل الباطن وتحقيق النتائج.
    `
  },
  {
    title: "فكرة الكتاب الأساسية",
    value: `
الفكرة الجوهرية للكتاب هي أن العقل الباطن لا يُميز بين الحقيقة والخيال،
بل يتعامل مع ما يتلقاه على أنه أوامر مباشرة.
لذلك، فإن الأفكار المتكررة سواء كانت إيجابية أو سلبية، تتحول مع الوقت إلى واقع يعيشه الإنسان.
    `
  },
  {
    title: "أهم المحاور التي يناقشها الكتاب",
    value: `
- الفرق بين العقل الواعي والعقل الباطن.
- قوة التكرار والتأكيدات الإيجابية.
- تأثير المعتقدات القديمة على السلوك والحياة.
- دور الإيمان والثقة في تحقيق الأهداف.
- كيفية التخلص من الخوف والقلق عبر برمجة العقل الباطن.
    `
  },
  {
    title: "أسلوب الكتاب",
    value: `
أسلوب الكتاب بسيط وسلس، موجه لعامة الناس وليس للمتخصصين فقط.
يعتمد على التكرار المقصود لترسيخ الأفكار، مع قصص وتجارب لأشخاص
يُقال إنهم غيروا حياتهم باستخدام مبادئ العقل الباطن.
قد يشعر بعض القرّاء أن الأسلوب مباشر أكثر من اللازم، أو يميل للتكرار.
    `
  },
  {
    title: "الرأي الشخصي",
    value: `
الكتاب محفز جدًا في بدايته، ويمنح القارئ شعورًا بالقوة والسيطرة على حياته.
لكن بصراحة، إذا قرأته بعقلية نقدية، ستلاحظ أن بعض الأفكار مبالغ فيها
ولا تستند دائمًا إلى أدلة علمية قوية.
هو كتاب ممتاز لبناء الدافع وتغيير طريقة التفكير، لكنه ليس حلًا سحريًا لكل المشاكل.
    `
  },
  {
    title: "مراجعة نقدية",
    value: `
من نقاط القوة في الكتاب: البساطة، التحفيز، وإيصال الفكرة بوضوح.
أما نقاط الضعف: التكرار، والمبالغة أحيانًا في ربط كل شيء بالعقل الباطن فقط.
الكتاب مناسب للمبتدئين في مجال تطوير الذات، لكنه قد يكون سطحيًا
لمن لديه خلفية عميقة في علم النفس.
    `
  },
  {
    title: "لمن يُنصح بقراءة الكتاب؟",
    value: `
- لمن يشعر بالإحباط أو فقدان الدافع.
- لمن يريد تغيير طريقة تفكيره وبناء عقلية إيجابية.
- للمبتدئين في مجال تطوير الذات.
ولا يُنصح به لمن يبحث عن محتوى علمي أكاديمي بحت.
    `
  },
  {
    title: "الخلاصة",
    value: `
قوة عقلك الباطن كتاب مؤثر ومُلهم، يترك أثرًا نفسيًا إيجابيًا لدى الكثير من القرّاء.
قد لا تتفق مع كل ما ورد فيه، لكن من الصعب أن تخرج منه دون أن تعيد التفكير
بطريقة حديثك مع نفسك وتأثير أفكارك على حياتك.
    `
  }
];
export const comments = [
  {
    id: "b1",
    comment: "الكتاب جميل وفيه أفكار تحفيزية، حسّيت إنه أعطاني دفعة نفسية.",
    date: "2024/02/15",
    rating: 4,
    username: "أحمد محمود",
    like: "14",
    profileImage: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "b2",
    comment: "صراحة الكتاب ممل، نفس الكلام مكرر بأسلوب مختلف.",
    date: "2024/02/16",
    rating: 2,
    username: "سامي العلي",
    like: "6",
    profileImage: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: "b3",
    comment: "كتاب ممتاز للي أول مرة يقرأ بهالمجال، بس مو عميق.",
    date: "2024/02/17",
    rating: 3,
    username: "ريم حسن",
    like: "11",
    profileImage: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "b4",
    comment: "ما استفدت شيء، حسّيته تنظير بدون أمثلة واقعية.",
    date: "2024/02/18",
    rating: 1,
    username: "فهد القحطاني",
    like: "9",
    profileImage: "https://i.pravatar.cc/150?img=56",
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
