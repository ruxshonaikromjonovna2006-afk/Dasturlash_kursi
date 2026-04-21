// ===== BilTech MA'LUMOTLAR =====
const BILTECH_DATA = {
  courses: [
    {
      id: 1, emoji: "🌐", title: "Web Dasturlash (Full Stack)",
      desc: "HTML, CSS, JavaScript, React, Node.js, MongoDB. Noldan professional veb-dasturchi bo'ling.",
      level: "beginner", levelText: "Boshlang'ich",
      duration: "6 oy", lessons: "180 dars", students: "234",
      price: "1,200,000", priceNote: "so'm / oy"
    },
    {
      id: 2, emoji: "📱", title: "Mobile App (Flutter)",
      desc: "Flutter va Dart yordamida iOS va Android uchun zamonaviy mobil ilovalar yarating.",
      level: "middle", levelText: "O'rta",
      duration: "5 oy", lessons: "150 dars", students: "189",
      price: "1,400,000", priceNote: "so'm / oy"
    },
    {
      id: 3, emoji: "🤖", title: "AI & Machine Learning",
      desc: "Python, TensorFlow, PyTorch. Sun'iy intellekt va mashinali o'rganishning zamonaviy usullari.",
      level: "advanced", levelText: "Ilg'or",
      duration: "8 oy", lessons: "240 dars", students: "98",
      price: "1,800,000", priceNote: "so'm / oy"
    },
    {
      id: 4, emoji: "🔒", title: "Kiberxavfsizlik",
      desc: "Ethical hacking, network security, penetration testing. Raqamli himoyani professional o'rganing.",
      level: "middle", levelText: "O'rta",
      duration: "6 oy", lessons: "180 dars", students: "76",
      price: "1,500,000", priceNote: "so'm / oy"
    },
    {
      id: 5, emoji: "📊", title: "Data Science",
      desc: "Python, Pandas, Power BI, SQL. Ma'lumotlardan qimmatli xulosalar chiqarishni o'rganing.",
      level: "middle", levelText: "O'rta",
      duration: "5 oy", lessons: "150 dars", students: "142",
      price: "1,300,000", priceNote: "so'm / oy"
    },
    {
      id: 6, emoji: "☁️", title: "DevOps & Cloud",
      desc: "Docker, Kubernetes, AWS, CI/CD pipeline. Zamonaviy IT infratuzilmasini boshqaring.",
      level: "advanced", levelText: "Ilg'or",
      duration: "5 oy", lessons: "160 dars", students: "64",
      price: "1,600,000", priceNote: "so'm / oy"
    }
  ],

  teachers: [
    {
      emoji: "👨‍💻", name: "Sardor Toshmatov", role: "Full Stack Mentor",
      exp: "8 yil tajriba • Google sertifikati", tags: ["React", "Node.js", "MongoDB"]
    },
    {
      emoji: "👩‍💻", name: "Malika Yusupova", role: "Mobile Dev Mentor",
      exp: "6 yil tajriba • Flutter Expert", tags: ["Flutter", "Dart", "Firebase"]
    },
    {
      emoji: "👨‍🔬", name: "Otabek Rahimov", role: "AI/ML Mentor",
      exp: "7 yil tajriba • PhD Matematika", tags: ["Python", "TensorFlow", "ML"]
    },
    {
      emoji: "👩‍🔧", name: "Dilnoza Hamidova", role: "Cybersecurity Mentor",
      exp: "5 yil tajriba • CEH Sertifikati", tags: ["Pentest", "Linux", "Security"]
    }
  ],

  testimonials: [
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "BilTechda o'qib Web dasturlashni o'rgandim. 6 oy kursdan so'ng Toshkentdagi yetakchi IT kompaniyaga ishga kirdim. O'qituvchilar juda professional va har doim yordam berishga tayyor.",
      emoji: "👨", name: "Jasur Mirzayev", job: "Frontend Developer @ TechUz", course: "Web Dasturlash"
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "Flutter kursini tugatgach, o'z mobil ilovamni yaratdim va Google Play'ga joylashtirdim. BilTech menga nafaqat kod, balki real loyiha qilish tajribasini ham berdi.",
      emoji: "👩", name: "Shaxlo Ergasheva", job: "Mobile Developer (Freelancer)", course: "Mobile App"
    },
    {
      stars: "⭐⭐⭐⭐⭐",
      text: "Data Science kursidan keyin AI loyihasida ishtirok eta boshladim. O'qituvchi Otabek aka nazariy bilimni amaliyot bilan ajoyib bog'lab o'rgatadi. Juda tavsiya qilaman!",
      emoji: "👦", name: "Bobur Hasanov", job: "Data Analyst @ Uzcard", course: "Data Science"
    }
  ]
};
