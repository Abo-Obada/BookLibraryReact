//This is API mimic folder for pretending that we have an Actual API but, we don't :D. 

import type { User } from "../model/bookType";

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
  {name:"دين"},
  {name:"فلسفة"},
  {name:"تاريخ"},
  {name:"روايات"},
  {name:"قصص أطفال"},
  {name:"تفسير قرأن"},
  {name:"أحاديث"},
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

export default async function User():Promise<User> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
}