//This is API mimic folder for pretending that we have an Actual API but, we don't :D. 
const url: string = "http://localhost:8000/api/"
export const recentBooks = [
  {
    bookName: "قوة عقلك الباطن",
    bookAuthor: "جوزيف ميرفي",
    views: 9999999999999,
    rating: 5,
    imageLink: "https://m.media-amazon.com/images/I/61PqMZ0L85L.jpg",
    description: "كتاب يشرح كيفية استخدام العقل الباطن للتأثير على السلوك وتحقيق النجاح والسلام الداخلي."
  },
  {
    bookName: "1984",
    bookAuthor: "جورج أورويل",
    views: 22115,
    rating: 5,
    imageLink: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    description: "رواية ديستوبية تصور عالمًا شموليًا يسيطر فيه النظام على الفكر والحرية."
  },
  {
    bookName: "الخيميائي",
    bookAuthor: "باولو كويلو",
    views: 845123,
    rating: 4,
    imageLink: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
    description: "رحلة رمزية عن الأحلام والمعنى الحقيقي للحياة والسعي وراء القدر."
  },
  {
    bookName: "رجال في الشمس",
    bookAuthor: "غسان كنفاني",
    views: 334221,
    rating: 5,
    imageLink: "https://www.kutubna.ae/cdn/shop/files/OIP_2f93509f-9aaa-4fd0-af56-9085b64a321f.jpg?v=1731501170",
    description: "رواية قصيرة تجسد معاناة اللاجئين الفلسطينيين بأسلوب رمزي قاسٍ."
  },
  {
    bookName: "عائد إلى حيفا",
    bookAuthor: "غسان كنفاني",
    views: 298115,
    rating: 5,
    imageLink: "https://diwanegypt.com/wp-content/uploads/2025/03/9789779613048.jpg",
    description: "قصة إنسانية عن الهوية والفقد والعودة بعد سنوات من الغياب."
  },
  {
    bookName: "يوتوبيا",
    bookAuthor: "أحمد خالد توفيق",
    views: 388771,
    rating: 4,
    imageLink: "https://m.media-amazon.com/images/I/41omJqSEUYL._AC_UF1000,1000_QL80_.jpg",
    description: "رواية سوداء تتنبأ بمستقبل منقسم طبقيًا بشكل مرعب."
  },
  {
    bookName: "أرض زيكولا",
    bookAuthor: "عمرو عبد الحميد",
    views: 902114,
    rating: 5,
    imageLink: "https://upload.wikimedia.org/wikipedia/ar/0/00/%D8%BA%D9%84%D8%A7%D9%81_%D8%B1%D9%88%D8%A7%D9%8A%D8%A9_%D8%A3%D9%85%D8%A7%D8%B1%D9%8A%D8%AA%D8%A7.jpeg",
    description: "فانتازيا عربية تدور في عالم تُقاس فيه قيمة الإنسان بالذكاء."
  },
  {
    bookName: "الفيل الأزرق",
    bookAuthor: "أحمد مراد",
    views: 564252,
    rating: 5,
    imageLink: "https://online.fliphtml5.com/ktqzg/udma/files/large/1.webp?1568076316",
    description: "رواية نفسية غامضة تمزج بين الطب النفسي والرعب."
  },
  {
    bookName: "ذاكرة الجسد",
    bookAuthor: "أحلام مستغانمي",
    views: 510334,
    rating: 5,
    imageLink: "https://shaqhaf.com/storage/media/imgs/books/book16-06-2020-07-53-35.jpg",
    description: "رواية رومانسية شاعرية عن الحب والذاكرة والوطن."
  },
  {
    bookName: "قواعد العشق الأربعون",
    bookAuthor: "إليف شافاق",
    views: 912553,
    rating: 4,
    imageLink: "https://covers.openlibrary.org/b/isbn/9780241972939-L.jpg",
    description: "رواية روحانية تربط بين التصوف والحب والتحول الداخلي."
  }
];
export const bookCategory = [
  { name: "دين" },
  { name: "فلسفة" },
  { name: "تاريخ" },
  { name: "روايات" },
  { name: "قصص أطفال" },
  { name: "تفسير قرأن" },
  { name: "أحاديث" },
];
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
export const book = {
  bookName: "قوة عقلك الباطن",
  bookAuthor: "جوزيف ميرفي",
  authorNationality: "إيرلاندي",
  releaseDate: "غير معروف",
  views: 242452,
  rating: 5,
  imageLink: "https://m.media-amazon.com/images/I/61PqMZ0L85L.jpg",
};
export const bookInfo = [
  { label: "أمازون", value: book.bookName },
  { label: "أسم الراوي", value: book.bookAuthor },
  { label: "جنسية الراوي", value: book.authorNationality },
  { label: "تاريخ إصدار الكتاب", value: book.releaseDate },
  { label: "عدد المشاهدات", value: book.views },
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


// axios.defaults.withCredentials = true;
//         axios.defaults.withXSRFToken = true;

//         try {
//             await axios.get('http://localhost:8000/sanctum/csrf-cookie');
//             const resp = await axios.post('http://localhost:8000/api/login', {
//                 "email": email,
//                 "password": password
//             });
//         } catch (error) {
//             console.log(error);
//         }