/* 优先读取 data/data.json；直接打开 index.html 且浏览器限制本地读取时，使用构建时嵌入的兜底数据。 */
const fallbackData = [
  {
    "id": 1,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "海南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "综合改革",
    "majorName": "计算机类（软件）",
    "minScore": 511,
    "minRank": 34386,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_553_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 2,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "海南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "综合改革",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 507,
    "minRank": 35551,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_553_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 3,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "海南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "综合改革",
    "majorName": "电子信息类",
    "minScore": 507,
    "minRank": 35551,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_553_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 4,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "海南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "综合改革",
    "majorName": "自动化类",
    "minScore": 505,
    "minRank": 36110,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_553_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 5,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "海南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "综合改革",
    "majorName": "智能制造工程",
    "minScore": 511,
    "minRank": 34386,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_553_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 6,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "海南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "综合改革",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_553_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 7,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "海南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "综合改革",
    "majorName": "数字经济",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_553_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 8,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "海南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "综合改革",
    "majorName": "网络与新媒体",
    "minScore": 549,
    "minRank": 23760,
    "subjectRequirement": "不限",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_553_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 9,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "海南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "综合改革",
    "majorName": "工商管理类",
    "minScore": 549,
    "minRank": 23760,
    "subjectRequirement": "不限",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_553_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 10,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "安徽",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 496,
    "minRank": 35339,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_554_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 11,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "安徽",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_554_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 12,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "安徽",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 499,
    "minRank": 33914,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_554_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 13,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "安徽",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 495,
    "minRank": 142426,
    "subjectRequirement": "物理、化学",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_554_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 14,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "安徽",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 492,
    "minRank": 146903,
    "subjectRequirement": "物理、化学",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_554_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 15,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "安徽",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 494,
    "minRank": 143937,
    "subjectRequirement": "物理、化学",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_554_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 16,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "安徽",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 491,
    "minRank": 148355,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_554_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 17,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "安徽",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_554_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 18,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "安徽",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "大数据管理与应用",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627210958_554_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 19,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 467,
    "minRank": 21665,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 20,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": 465,
    "minRank": 22150,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 21,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 466,
    "minRank": 21897,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 22,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 490,
    "minRank": 77780,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 23,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 489,
    "minRank": 78616,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 24,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 496,
    "minRank": 72818,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 25,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 491,
    "minRank": 76979,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 26,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 27,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 492,
    "minRank": 76112,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 28,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 489,
    "minRank": 78616,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 29,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "福建",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "数字经济",
    "minScore": 490,
    "minRank": 77780,
    "subjectRequirement": "物理",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211000_556_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 30,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": 435,
    "minRank": 20327,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 31,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 433,
    "minRank": 20759,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 32,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 439,
    "minRank": 19497,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 33,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 417,
    "minRank": 71049,
    "subjectRequirement": "物理、化学",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 34,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 417,
    "minRank": 71049,
    "subjectRequirement": "物理、化学",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 35,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 419,
    "minRank": 69952,
    "subjectRequirement": "物理、化学",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 36,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 37,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 38,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 415,
    "minRank": 72176,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 39,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 40,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能建造",
    "minScore": 416,
    "minRank": 71627,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 41,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "数字经济",
    "minScore": 398,
    "minRank": 81669,
    "subjectRequirement": "物理",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 42,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "甘肃",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "工程造价",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_557_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 43,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广东",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 511,
    "minRank": 49666,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_558_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 44,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广东",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 512,
    "minRank": 48883,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_558_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 45,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广东",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 492,
    "minRank": 180224,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_558_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 46,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广东",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 491,
    "minRank": 181971,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_558_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 47,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广东",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 496,
    "minRank": 173027,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_558_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 48,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广东",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 492,
    "minRank": 180224,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_558_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 49,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广东",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "数字经济",
    "minScore": 492,
    "minRank": 180224,
    "subjectRequirement": "物理",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211001_558_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 50,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": 431,
    "minRank": 40357,
    "subjectRequirement": "历史",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 51,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 428,
    "minRank": 41669,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 52,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "供应链管理",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 53,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 428,
    "minRank": 41669,
    "subjectRequirement": "历史",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 54,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 407,
    "minRank": 138410,
    "subjectRequirement": "物理、化学",
    "planCount": 16,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 55,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 412,
    "minRank": 133471,
    "subjectRequirement": "物理、化学",
    "planCount": 13,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 56,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 407,
    "minRank": 138410,
    "subjectRequirement": "物理、化学",
    "planCount": 13,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 57,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "大数据管理与应用",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 58,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 409,
    "minRank": 136424,
    "subjectRequirement": "物理、化学",
    "planCount": 11,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 59,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "区块链工程",
    "minScore": 406,
    "minRank": 139395,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 60,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 406,
    "minRank": 139395,
    "subjectRequirement": "物理、化学",
    "planCount": 12,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 61,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电影制作",
    "minScore": 408,
    "minRank": 137473,
    "subjectRequirement": "物理、化学",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 62,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "工程造价",
    "minScore": 380,
    "minRank": 165558,
    "subjectRequirement": "物理",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 63,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "土木工程",
    "minScore": 377,
    "minRank": 168584,
    "subjectRequirement": "物理、化学",
    "planCount": 8,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 64,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "广西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能建造",
    "minScore": 392,
    "minRank": 153683,
    "subjectRequirement": "物理、化学",
    "planCount": 8,
    "batch": "",
    "sourceImage": "微信图片_20260627211002_559_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 65,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 489,
    "minRank": 26151,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 66,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 489,
    "minRank": 26151,
    "subjectRequirement": "历史",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 67,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "历史",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 68,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 479,
    "minRank": 69406,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 69,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 70,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 485,
    "minRank": 64257,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 71,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 485,
    "minRank": 64257,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 72,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 73,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 74,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 75,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "大数据管理与应用",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 76,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "贵州",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能建造",
    "minScore": 475,
    "minRank": 72987,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211003_560_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 77,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": 512,
    "minRank": 52832,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 78,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 510,
    "minRank": 54420,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 79,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "供应链管理",
    "minScore": 509,
    "minRank": 55195,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 80,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 509,
    "minRank": 55195,
    "subjectRequirement": "历史",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 81,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 496,
    "minRank": 217439,
    "subjectRequirement": "物理、化学",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 82,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 494,
    "minRank": 221305,
    "subjectRequirement": "物理、化学",
    "planCount": 8,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 83,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 491,
    "minRank": 227136,
    "subjectRequirement": "物理、化学",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 84,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "大数据管理与应用",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 85,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 493,
    "minRank": 223265,
    "subjectRequirement": "物理、化学",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 86,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "区块链工程",
    "minScore": 490,
    "minRank": 229094,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 87,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 490,
    "minRank": 229094,
    "subjectRequirement": "物理、化学",
    "planCount": 8,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 88,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 495,
    "minRank": 219377,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 89,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电影制作",
    "minScore": 489,
    "minRank": 231000,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 90,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 91,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能建造",
    "minScore": 442,
    "minRank": 321305,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 92,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "土木工程",
    "minScore": 441,
    "minRank": 323149,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 93,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "数字经济",
    "minScore": 474,
    "minRank": 260370,
    "subjectRequirement": "物理",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 94,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "工程造价",
    "minScore": 466,
    "minRank": 275961,
    "subjectRequirement": "物理",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 95,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "河南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "工商管理类",
    "minScore": 476,
    "minRank": 256447,
    "subjectRequirement": "物理",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_561_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 96,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "供应链管理",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 97,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 430,
    "minRank": 18361,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 98,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "大数据管理与应用",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 99,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 417,
    "minRank": 62893,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 100,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 408,
    "minRank": 66529,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 101,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 400,
    "minRank": 69792,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 102,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 399,
    "minRank": 70212,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 103,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 104,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "数字经济",
    "minScore": 399,
    "minRank": 70212,
    "subjectRequirement": "物理",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 105,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "黑龙江",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "工程造价",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211004_562_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 106,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 501,
    "minRank": 28478,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 107,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 505,
    "minRank": 27147,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 108,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 475,
    "minRank": 108619,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 109,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 475,
    "minRank": 108619,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 110,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 474,
    "minRank": 109513,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 111,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "大数据管理与应用",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 112,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 476,
    "minRank": 107761,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 113,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 114,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 475,
    "minRank": 108619,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 115,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "湖北",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211005_563_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 116,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "江西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 511,
    "minRank": 31293,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_564_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 117,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "江西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 509,
    "minRank": 32473,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_564_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 118,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "江西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 499,
    "minRank": 85623,
    "subjectRequirement": "物理、化学",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_564_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 119,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "江西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 495,
    "minRank": 90756,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_564_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 120,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "江西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 493,
    "minRank": 93255,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_564_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 121,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "江西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 488,
    "minRank": 99653,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_564_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 122,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "江西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_564_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 123,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "江西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 491,
    "minRank": 95753,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_564_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 124,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "江西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 485,
    "minRank": 103528,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_564_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 125,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "宁夏",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": 446,
    "minRank": 5785,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_565_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 126,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "宁夏",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 441,
    "minRank": 6179,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_565_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 127,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "宁夏",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 417,
    "minRank": 20929,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_565_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 128,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "宁夏",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 421,
    "minRank": 20127,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_565_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 129,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "宁夏",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 417,
    "minRank": 20929,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_565_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 130,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "宁夏",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 415,
    "minRank": 21343,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_565_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 131,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "宁夏",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_565_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 132,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "宁夏",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_565_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 133,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "宁夏",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211006_565_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 134,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 469,
    "minRank": 25701,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 135,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "供应链管理",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 136,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 468,
    "minRank": 25991,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 137,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 455,
    "minRank": 87056,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 138,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 456,
    "minRank": 86326,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 139,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 458,
    "minRank": 84818,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 140,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 459,
    "minRank": 84115,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 141,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 142,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 458,
    "minRank": 84818,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 143,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 444,
    "minRank": 95089,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 144,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 145,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电影制作",
    "minScore": 429,
    "minRank": 105751,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 146,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "数字经济",
    "minScore": 447,
    "minRank": 92962,
    "subjectRequirement": "物理",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 147,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "陕西",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能建造",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211007_566_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 148,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": 499,
    "minRank": 48590,
    "subjectRequirement": "历史",
    "planCount": 20,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 149,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 495,
    "minRank": 51298,
    "subjectRequirement": "历史",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 150,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "供应链管理",
    "minScore": 498,
    "minRank": 49287,
    "subjectRequirement": "历史",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 151,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 495,
    "minRank": 51298,
    "subjectRequirement": "历史",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 152,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 486,
    "minRank": 146356,
    "subjectRequirement": "物理、化学",
    "planCount": 90,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 153,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 485,
    "minRank": 147761,
    "subjectRequirement": "物理、化学",
    "planCount": 50,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 154,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 486,
    "minRank": 146356,
    "subjectRequirement": "物理、化学",
    "planCount": 50,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 155,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "大数据管理与应用",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 156,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 479,
    "minRank": 156077,
    "subjectRequirement": "物理、化学",
    "planCount": 40,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 157,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 14,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 158,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 483,
    "minRank": 150538,
    "subjectRequirement": "物理、化学",
    "planCount": 56,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 159,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 479,
    "minRank": 156077,
    "subjectRequirement": "物理、化学",
    "planCount": 19,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 160,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 161,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "区块链工程",
    "minScore": 485,
    "minRank": 147761,
    "subjectRequirement": "物理、化学",
    "planCount": 15,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 162,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电影制作",
    "minScore": 475,
    "minRank": 161520,
    "subjectRequirement": "物理、化学",
    "planCount": 15,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 163,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能建造",
    "minScore": 476,
    "minRank": 160168,
    "subjectRequirement": "物理、化学",
    "planCount": 15,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 164,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "土木工程",
    "minScore": 475,
    "minRank": 161520,
    "subjectRequirement": "物理、化学",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 165,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "工程造价",
    "minScore": 477,
    "minRank": 158786,
    "subjectRequirement": "物理",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 166,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "数字经济",
    "minScore": 474,
    "minRank": 162900,
    "subjectRequirement": "物理",
    "planCount": 20,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 167,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子商务",
    "minScore": 476,
    "minRank": 160168,
    "subjectRequirement": "物理",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 168,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "供应链管理",
    "minScore": 475,
    "minRank": 161520,
    "subjectRequirement": "物理",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 169,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "工商管理类",
    "minScore": 479,
    "minRank": 156077,
    "subjectRequirement": "物理",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 170,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "设计学类",
    "majorName": "设计学类",
    "minScore": 507,
    "minRank": 9432,
    "subjectRequirement": "物理/历史",
    "planCount": 22,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 171,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "设计学类",
    "majorName": "动画",
    "minScore": 507,
    "minRank": 9432,
    "subjectRequirement": "物理/历史",
    "planCount": 12,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 172,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "四川",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "设计学类",
    "majorName": "环境设计",
    "minScore": 507,
    "minRank": 9432,
    "subjectRequirement": "物理/历史",
    "planCount": 12,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_567_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 173,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "文史类",
    "majorName": "网络与新媒体",
    "minScore": 360,
    "minRank": 11471,
    "subjectRequirement": "文史类",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 174,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "文史类",
    "majorName": "电子商务",
    "minScore": 353,
    "minRank": 12182,
    "subjectRequirement": "文史类",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 175,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "文史类",
    "majorName": "工商管理类",
    "minScore": 346,
    "minRank": 12885,
    "subjectRequirement": "文史类",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 176,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "计算机类（软件）",
    "minScore": 314,
    "minRank": 37895,
    "subjectRequirement": "理工类",
    "planCount": 13,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 177,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 311,
    "minRank": 38488,
    "subjectRequirement": "理工类",
    "planCount": 10,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 178,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 300,
    "minRank": 40557,
    "subjectRequirement": "理工类",
    "planCount": 6,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 179,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "区块链工程",
    "minScore": 284,
    "minRank": 43416,
    "subjectRequirement": "理工类",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 180,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "电子信息类",
    "minScore": 303,
    "minRank": 40038,
    "subjectRequirement": "理工类",
    "planCount": 8,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 181,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "自动化类",
    "minScore": 318,
    "minRank": 37184,
    "subjectRequirement": "理工类",
    "planCount": 8,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 182,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "智能制造工程",
    "minScore": 309,
    "minRank": 38909,
    "subjectRequirement": "理工类",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 183,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "大数据管理与应用",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "理工类",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 184,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "理工类",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 185,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "理工类",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 186,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "智能建造",
    "minScore": 297,
    "minRank": 41116,
    "subjectRequirement": "理工类",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 187,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "工程造价",
    "minScore": 286,
    "minRank": 43077,
    "subjectRequirement": "理工类",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 188,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "土木工程",
    "minScore": 283,
    "minRank": 43591,
    "subjectRequirement": "理工类",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 189,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "电影制作",
    "minScore": 298,
    "minRank": 40925,
    "subjectRequirement": "理工类",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 190,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "数字经济",
    "minScore": 296,
    "minRank": 41296,
    "subjectRequirement": "理工类",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 191,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类",
    "majorName": "工商管理类",
    "minScore": 284,
    "minRank": 43416,
    "subjectRequirement": "理工类",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 192,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "新疆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "理工类（南疆）",
    "majorName": "计算机类（软件）",
    "minScore": 331,
    "minRank": 34666,
    "subjectRequirement": "理工类",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211008_568_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 193,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": 498,
    "minRank": 28212,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 194,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 491,
    "minRank": 31075,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 195,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 492,
    "minRank": 30679,
    "subjectRequirement": "历史",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 196,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 471,
    "minRank": 84481,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 197,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 467,
    "minRank": 87639,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 198,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 463,
    "minRank": 90658,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 199,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 477,
    "minRank": 79927,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 200,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 201,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 480,
    "minRank": 77767,
    "subjectRequirement": "物理、化学",
    "planCount": 5,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 202,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 476,
    "minRank": 80652,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 203,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "物理、化学",
    "planCount": 4,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 204,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电影制作",
    "minScore": 444,
    "minRank": 105016,
    "subjectRequirement": "物理、化学",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 205,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "数字经济",
    "minScore": 458,
    "minRank": 94444,
    "subjectRequirement": "物理",
    "planCount": 3,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 206,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子商务",
    "minScore": 465,
    "minRank": 89168,
    "subjectRequirement": "物理",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 207,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "云南",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "供应链管理",
    "minScore": 460,
    "minRank": 92913,
    "subjectRequirement": "物理",
    "planCount": 2,
    "batch": "",
    "sourceImage": "微信图片_20260627211009_569_174.jpg",
    "sourceFolder": "省外的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 208,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "网络与新媒体",
    "minScore": 461,
    "minRank": 28475,
    "subjectRequirement": "",
    "planCount": 108,
    "batch": "",
    "sourceImage": "历史类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 209,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "电子商务",
    "minScore": 446,
    "minRank": 32868,
    "subjectRequirement": "",
    "planCount": 118,
    "batch": "",
    "sourceImage": "历史类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 210,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "供应链管理",
    "minScore": 457,
    "minRank": 29657,
    "subjectRequirement": "",
    "planCount": 63,
    "batch": "",
    "sourceImage": "历史类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 211,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "历史类",
    "majorName": "工商管理类",
    "minScore": 445,
    "minRank": 33174,
    "subjectRequirement": "",
    "planCount": 202,
    "batch": "",
    "sourceImage": "历史类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 212,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（软件）",
    "minScore": 434,
    "minRank": 99150,
    "subjectRequirement": "",
    "planCount": 612,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 213,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（大数据与智能科学）",
    "minScore": 425,
    "minRank": 103219,
    "subjectRequirement": "",
    "planCount": 295,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 214,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "大数据管理与应用",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "",
    "planCount": 63,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 215,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "计算机类（计算机与物联网）",
    "minScore": 432,
    "minRank": 100092,
    "subjectRequirement": "",
    "planCount": 217,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 216,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "区块链工程",
    "minScore": 438,
    "minRank": 97269,
    "subjectRequirement": "",
    "planCount": 22,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 217,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子信息类",
    "minScore": 425,
    "minRank": 103219,
    "subjectRequirement": "",
    "planCount": 340,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 218,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能电网信息工程",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "",
    "planCount": 49,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 219,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "自动化类",
    "minScore": 446,
    "minRank": 93312,
    "subjectRequirement": "",
    "planCount": 270,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 220,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能制造工程",
    "minScore": 438,
    "minRank": 97269,
    "subjectRequirement": "",
    "planCount": 93,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 221,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电气工程及其自动化",
    "minScore": null,
    "minRank": null,
    "subjectRequirement": "",
    "planCount": 47,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "待核对：原始图片未识别到最低分和位次；新开专业或新增招生专业，暂无往年录取分数和位次",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "新开专业暂无往年录取数据"
  },
  {
    "id": 222,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "智能建造",
    "minScore": 425,
    "minRank": 103219,
    "subjectRequirement": "",
    "planCount": 99,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 223,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "工程造价",
    "minScore": 425,
    "minRank": 103219,
    "subjectRequirement": "",
    "planCount": 17,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 224,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "土木工程",
    "minScore": 429,
    "minRank": 101438,
    "subjectRequirement": "",
    "planCount": 25,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 225,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电影制作",
    "minScore": 428,
    "minRank": 101917,
    "subjectRequirement": "",
    "planCount": 103,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 226,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "网络与新媒体",
    "minScore": 458,
    "minRank": 87032,
    "subjectRequirement": "",
    "planCount": 20,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 227,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "电子商务",
    "minScore": 425,
    "minRank": 103219,
    "subjectRequirement": "",
    "planCount": 10,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 228,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "供应链管理",
    "minScore": 445,
    "minRank": 93815,
    "subjectRequirement": "",
    "planCount": 12,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 229,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "数字经济",
    "minScore": 425,
    "minRank": 103219,
    "subjectRequirement": "",
    "planCount": 98,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 230,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "物理类",
    "majorName": "工商管理类",
    "minScore": 425,
    "minRank": 103219,
    "subjectRequirement": "",
    "planCount": 10,
    "batch": "",
    "sourceImage": "物理类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 231,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "美术类",
    "majorName": "设计学类",
    "minScore": 188,
    "minRank": 5862,
    "subjectRequirement": "",
    "planCount": 258,
    "batch": "",
    "sourceImage": "美术类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 232,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "美术类",
    "majorName": "动画",
    "minScore": 187,
    "minRank": 5969,
    "subjectRequirement": "",
    "planCount": 123,
    "batch": "",
    "sourceImage": "美术类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  },
  {
    "id": 233,
    "schoolName": "重庆工程学院",
    "schoolEnglishName": "Chongqing Institute of Engineering",
    "province": "重庆",
    "city": "重庆",
    "year": 2025,
    "planYear": 2026,
    "enrollCategory": "美术类",
    "majorName": "环境设计",
    "minScore": 186,
    "minRank": 6202,
    "subjectRequirement": "",
    "planCount": 118,
    "batch": "",
    "sourceImage": "美术类的.jpg",
    "sourceFolder": "重庆市内的",
    "remark": "",
    "schoolLocation": "重庆市",
    "schoolLevel": "本科",
    "schoolDescription": "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。学校面向区域经济社会发展需求，注重学生实践能力、工程能力和创新能力培养。本页面用于展示招生计划、录取分数和专业查询功能。",
    "featureMajors": [
      "计算机类",
      "电子信息类",
      "自动化类",
      "智能制造工程",
      "网络与新媒体"
    ],
    "dataStatus": "可参与录取评估"
  }
];

const regionMap = {
  "西南地区": ["重庆", "四川", "贵州", "云南"],
  "华南地区": ["广东", "广西", "海南"],
  "华东地区": ["福建", "江西", "浙江", "江苏", "安徽", "山东"],
  "华中地区": ["河南", "湖北", "湖南"],
  "华北地区": ["河北", "山西", "内蒙古"],
  "西北地区": ["新疆", "宁夏", "甘肃", "陕西", "青海"],
  "东北地区": ["黑龙江", "吉林", "辽宁"],
};

let allData = [];
let selectedRegion = "";
let selectedPlanProvince = "";
let planExpanded = false;
let scoreExpanded = false;
let currentPlanRows = [];
let currentScoreRows = [];

const dom = {};

document.addEventListener("DOMContentLoaded", async () => {
  cacheDom();
  setLoadStatus("数据加载中...", "loading");
  await loadData();
  initPage();
  bindEvents();
});

function cacheDom() {
  [
    "loadStatus",
    "provinceSelect",
    "yearSelect",
    "planYearSelect",
    "categorySelect",
    "scoreInput",
    "rankInput",
    "subjectSelect",
    "majorKeyword",
    "majorList",
    "searchBtn",
    "recommendBtn",
    "chanceBtn",
    "provinceCount",
    "majorCount",
    "scoreLineCount",
    "newMajorCount",
    "planTotal",
    "assessmentSummary",
    "recommendResults",
    "regionTabs",
    "provinceButtons",
    "planCategoryFilter",
    "planSubjectFilter",
    "planMajorFilter",
    "planFilterBtn",
    "planResetBtn",
    "planSummary",
    "planTableTitle",
    "planTableBody",
    "planExpandWrap",
    "scoreProvince",
    "scoreYear",
    "scoreCategory",
    "scoreMajor",
    "minScoreFilter",
    "maxScoreFilter",
    "minRankFilter",
    "maxRankFilter",
    "scoreSearchBtn",
    "scoreResetBtn",
    "scoreNotice",
    "scoreResultWrap",
    "scoreTableBody",
    "scoreExpandWrap",
  ].forEach((id) => {
    dom[id] = document.getElementById(id);
  });
}

async function loadData() {
  try {
    const response = await fetch("data/data.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    allData = await response.json();
    setLoadStatus("数据已加载完成。", "success");
  } catch (error) {
    allData = Array.isArray(fallbackData) ? fallbackData : [];
    if (allData.length) {
      setLoadStatus("数据加载失败，已切换为本地兜底数据。线上访问请检查 data/data.json 是否已上传。", "warning");
    } else {
      setLoadStatus("数据加载失败，请检查 data/data.json 是否存在并可访问。", "warning");
    }
    console.warn("数据加载失败，已尝试使用本地兜底数据。", error);
  }

  allData = allData.map((item, index) => ({
    ...item,
    id: item.id || index + 1,
    year: toNumberOrNull(item.year),
    planYear: toNumberOrNull(item.planYear),
    minScore: toNumberOrNull(item.minScore),
    minRank: toNumberOrNull(item.minRank),
    planCount: toNumberOrNull(item.planCount),
  }));
}

function initPage() {
  initSelects();
  renderStats();
  initPlanBrowser();
  renderPlanSection();
  resetScoreResults();
}

function bindEvents() {
  dom.searchBtn.addEventListener("click", () => {
    syncPlanFiltersFromMain();
    renderPlanSection();
    document.getElementById("plan").scrollIntoView({ behavior: "smooth" });
  });

  dom.recommendBtn.addEventListener("click", () => {
    runAssessment(true);
    document.getElementById("recommend").scrollIntoView({ behavior: "smooth" });
  });

  dom.chanceBtn.addEventListener("click", () => {
    runAssessment(true);
    document.getElementById("assessment").scrollIntoView({ behavior: "smooth" });
  });

  dom.planFilterBtn.addEventListener("click", () => {
    planExpanded = false;
    renderPlanSection();
  });
  dom.planResetBtn.addEventListener("click", resetPlanFilters);
  dom.scoreSearchBtn.addEventListener("click", handleScoreSearch);
  dom.scoreResetBtn.addEventListener("click", resetScoreResults);
}

function initSelects() {
  const provinces = uniqueValues(allData.map((item) => item.province));
  const years = uniqueValues(allData.map((item) => item.year)).sort((a, b) => b - a);
  const planYears = uniqueValues(allData.map((item) => item.planYear)).sort((a, b) => b - a);
  const categories = uniqueValues(allData.map((item) => item.enrollCategory));
  const subjects = uniqueValues(allData.map((item) => item.subjectRequirement));
  const majors = uniqueValues(allData.map((item) => item.majorName));

  fillSelect(dom.provinceSelect, provinces, "请选择省份");
  fillSelect(dom.yearSelect, years, "全部年份");
  fillSelect(dom.planYearSelect, planYears, "全部计划年份");
  fillSelect(dom.categorySelect, categories, "请选择招生类别");
  fillSelect(dom.subjectSelect, subjects, "全部选科要求");
  fillSelect(dom.planCategoryFilter, categories, "全部招生类别");
  fillSelect(dom.planSubjectFilter, subjects, "全部选科要求");
  fillSelect(dom.scoreProvince, provinces, "请选择省份");
  fillSelect(dom.scoreYear, years, "全部年份");
  fillSelect(dom.scoreCategory, categories, "全部招生类别");

  dom.majorList.innerHTML = majors.map((major) => `<option value="${escapeHtml(major)}"></option>`).join("");
}

function renderStats() {
  const newMajorCount = allData.filter(isNewMajor).length;
  dom.provinceCount.textContent = uniqueValues(allData.map((item) => item.province)).length;
  dom.majorCount.textContent = uniqueValues(allData.map((item) => item.majorName)).length;
  dom.scoreLineCount.textContent = allData.length - newMajorCount;
  dom.newMajorCount.textContent = newMajorCount;
  dom.planTotal.textContent = allData.reduce((sum, item) => sum + (item.planCount || 0), 0);
}

function initPlanBrowser() {
  const provinces = uniqueValues(allData.map((item) => item.province));
  const regionNames = Object.keys(regionMap).filter((region) => {
    return regionMap[region].some((province) => provinces.includes(province));
  });
  selectedPlanProvince = provinces.includes("重庆") ? "重庆" : provinces[0] || "";
  selectedRegion = getRegionByProvince(selectedPlanProvince) || regionNames[0] || "";
  renderRegionTabs(regionNames);
  renderProvinceButtons();
}

function renderRegionTabs(regionNames) {
  dom.regionTabs.innerHTML = regionNames
    .map((region) => {
      const count = allData.filter((item) => getRegionByProvince(item.province) === region).length;
      return `<button type="button" class="pill ${region === selectedRegion ? "active" : ""}" data-region="${escapeHtml(region)}">${escapeHtml(region)} ${count} 条</button>`;
    })
    .join("");

  dom.regionTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRegion = button.dataset.region;
      const provinces = getProvincesInRegion(selectedRegion);
      selectedPlanProvince = provinces.includes("重庆") ? "重庆" : provinces[0] || "";
      planExpanded = false;
      renderRegionTabs(regionNames);
      renderProvinceButtons();
      renderPlanSection();
    });
  });
}

function renderProvinceButtons() {
  const provinces = getProvincesInRegion(selectedRegion);
  dom.provinceButtons.innerHTML = provinces
    .map((province) => {
      const count = allData.filter((item) => item.province === province).length;
      return `<button type="button" class="pill ${province === selectedPlanProvince ? "active" : ""}" data-province="${escapeHtml(province)}">${escapeHtml(province)} ${count} 条</button>`;
    })
    .join("");

  dom.provinceButtons.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedPlanProvince = button.dataset.province;
      planExpanded = false;
      renderProvinceButtons();
      renderPlanSection();
    });
  });
}

function syncPlanFiltersFromMain() {
  if (dom.provinceSelect.value) {
    selectedPlanProvince = dom.provinceSelect.value;
    selectedRegion = getRegionByProvince(selectedPlanProvince) || selectedRegion;
  }
  dom.planCategoryFilter.value = dom.categorySelect.value || "";
  dom.planSubjectFilter.value = dom.subjectSelect.value || "";
  dom.planMajorFilter.value = dom.majorKeyword.value.trim();
  planExpanded = false;
  const provinces = uniqueValues(allData.map((item) => item.province));
  const regionNames = Object.keys(regionMap).filter((region) => {
    return regionMap[region].some((province) => provinces.includes(province));
  });
  renderRegionTabs(regionNames);
  renderProvinceButtons();
}

function renderPlanSection() {
  currentPlanRows = getPlanFilteredData();
  const shownRows = planExpanded ? currentPlanRows : currentPlanRows.slice(0, 10);
  const categoryText = dom.planCategoryFilter.value || "全部";
  const regionText = selectedRegion || "未选择";
  const provinceText = selectedPlanProvince || "未选择";

  dom.planSummary.textContent = `当前地区：${regionText}；当前省份：${provinceText}；招生类别：${categoryText}；数据条数：${currentPlanRows.length} 条`;
  dom.planTableTitle.textContent = `重庆工程学院 2026 年在${provinceText}招生计划与 2025 年录取参考`;
  renderPlanTable(shownRows);
  renderExpandButton(dom.planExpandWrap, currentPlanRows.length, planExpanded, () => {
    planExpanded = !planExpanded;
    renderPlanSection();
  }, 10);
}

function getPlanFilteredData() {
  const category = dom.planCategoryFilter.value;
  const subject = dom.planSubjectFilter.value;
  const keyword = dom.planMajorFilter.value.trim();
  return allData.filter((item) => {
    return (
      item.province === selectedPlanProvince &&
      matchText(item.enrollCategory, category) &&
      matchSubject(item.subjectRequirement, subject) &&
      matchKeyword(item.majorName, keyword)
    );
  });
}

function renderPlanTable(rows) {
  if (!rows.length) {
    dom.planTableBody.innerHTML = `<tr><td colspan="8">当前条件下暂无招生计划数据。</td></tr>`;
    return;
  }

  dom.planTableBody.innerHTML = rows
    .map((item) => `
      <tr>
        <td>${escapeHtml(item.enrollCategory)}</td>
        <td>${escapeHtml(item.majorName)}</td>
        <td>${formatValue(item.minScore)}</td>
        <td>${formatValue(item.minRank)}</td>
        <td>${escapeHtml(item.subjectRequirement || "不限")}</td>
        <td>${formatValue(item.planCount)}</td>
        <td>${escapeHtml(item.batch || "")}</td>
        <td>${statusBadge(item)}</td>
      </tr>
    `)
    .join("");
}

function resetPlanFilters() {
  dom.planCategoryFilter.value = "";
  dom.planSubjectFilter.value = "";
  dom.planMajorFilter.value = "";
  planExpanded = false;
  renderPlanSection();
}

function runAssessment(renderRecommendation) {
  const user = getUserInput();
  if (user.score === null && user.rank === null) {
    dom.assessmentSummary.innerHTML = `<div class="empty-box">请至少填写高考分数或全省位次后再评估。</div>`;
    dom.recommendResults.innerHTML = `<div class="empty-box">请至少填写高考分数或全省位次后再查看推荐专业。</div>`;
    return;
  }

  const rows = getMainFilteredData();
  const normalRows = rows.filter((item) => hasHistoricalData(item));
  const newRows = rows.filter(isNewMajor);
  const evaluatedRows = normalRows.map((item) => ({ ...item, evaluation: evaluateMajor(item, user) }));
  evaluatedRows.sort((a, b) => b.evaluation.baseProbability - a.evaluation.baseProbability);

  renderAssessmentSummary(evaluatedRows, newRows, user);
  if (renderRecommendation) {
    renderRecommendGroups(evaluatedRows, newRows, user);
  }
}

function getUserInput() {
  return {
    province: dom.provinceSelect.value,
    category: dom.categorySelect.value,
    year: dom.yearSelect.value,
    planYear: dom.planYearSelect.value,
    subject: dom.subjectSelect.value,
    keyword: dom.majorKeyword.value.trim(),
    score: toNumberOrNull(dom.scoreInput.value),
    rank: toNumberOrNull(dom.rankInput.value),
  };
}

function getMainFilteredData() {
  const user = getUserInput();
  return allData.filter((item) => {
    return (
      matchText(item.province, user.province) &&
      matchText(item.enrollCategory, user.category) &&
      matchText(String(item.year || ""), user.year) &&
      matchText(String(item.planYear || ""), user.planYear) &&
      matchSubject(item.subjectRequirement, user.subject) &&
      matchKeyword(item.majorName, user.keyword)
    );
  });
}

function evaluateMajor(item, user) {
  let baseProbability = 0;
  let rankDiff = null;
  let scoreDiff = null;
  const reasons = [];

  if (user.rank !== null && item.minRank !== null) {
    rankDiff = item.minRank - user.rank;
    if (rankDiff >= 12000) baseProbability = 88;
    else if (rankDiff >= 5000) baseProbability = 76;
    else if (rankDiff >= -3000) baseProbability = 61;
    else if (rankDiff >= -10000) baseProbability = 38;
    else baseProbability = 18;
    reasons.push(rankDiff >= 0
      ? `你的位次比该专业 2025 年最低录取位次靠前 ${rankDiff} 名`
      : `你的位次比该专业 2025 年最低录取位次靠后 ${Math.abs(rankDiff)} 名`);
  }

  if (user.score !== null && item.minScore !== null) {
    scoreDiff = user.score - item.minScore;
    if (user.rank === null || item.minRank === null) {
      if (scoreDiff >= 45) baseProbability = 86;
      else if (scoreDiff >= 20) baseProbability = 74;
      else if (scoreDiff >= -10) baseProbability = 58;
      else if (scoreDiff >= -25) baseProbability = 35;
      else baseProbability = 16;
    }
    reasons.push(scoreDiff >= 0
      ? `分数高出 2025 年最低分 ${scoreDiff} 分`
      : `分数低于 2025 年最低分 ${Math.abs(scoreDiff)} 分`);
  }

  if ((item.planCount || 0) >= 20) baseProbability += 3;
  if ((item.planCount || 0) > 0 && item.planCount <= 3) baseProbability -= 4;
  baseProbability = Math.max(5, Math.min(92, baseProbability));

  const level = getProbabilityLevel(baseProbability);
  const range = getProbabilityRange(baseProbability);
  const risk = getRiskLevel(baseProbability);
  const recommendType = getRecommendType(baseProbability);
  const basis = buildBasisText(item, user, rankDiff, scoreDiff, recommendType);

  return { baseProbability, level, range, risk, recommendType, rankDiff, scoreDiff, reasons, basis };
}

function buildBasisText(item, user, rankDiff, scoreDiff, recommendType) {
  const parts = [];
  if (rankDiff !== null) {
    parts.push(rankDiff >= 0
      ? `你的位次比该专业 2025 年最低录取位次靠前 ${rankDiff} 名`
      : `你的位次比该专业 2025 年最低录取位次靠后 ${Math.abs(rankDiff)} 名`);
  }
  if (scoreDiff !== null) {
    parts.push(scoreDiff >= 0
      ? `分数高出 ${scoreDiff} 分`
      : `分数低于 ${Math.abs(scoreDiff)} 分`);
  }
  parts.push(`2026 年计划招生 ${formatValue(item.planCount) || "待核对"} 人`);
  return `${parts.join("，")}。综合判断为${recommendType}。`;
}

function getProbabilityRange(probability) {
  if (probability >= 85) return "85% - 90%";
  if (probability >= 75) return "75% - 85%";
  if (probability >= 60) return "60% - 75%";
  if (probability >= 45) return "45% - 60%";
  if (probability >= 25) return "25% - 45%";
  return "5% - 25%";
}

function getProbabilityLevel(probability) {
  if (probability >= 75) return "较高";
  if (probability >= 60) return "中等偏高";
  if (probability >= 45) return "中等";
  if (probability >= 25) return "较低";
  return "风险较高";
}

function getRiskLevel(probability) {
  if (probability >= 75) return "较低风险";
  if (probability >= 60) return "中等风险";
  if (probability >= 45) return "中等偏高风险";
  if (probability >= 25) return "较高风险";
  return "高风险";
}

function getRecommendType(probability) {
  if (probability >= 75) return "保一保";
  if (probability >= 55) return "稳一稳";
  if (probability >= 30) return "冲一冲";
  return "谨慎填报";
}

function renderAssessmentSummary(evaluatedRows, newRows, user) {
  if (!evaluatedRows.length && !newRows.length) {
    dom.assessmentSummary.innerHTML = `<div class="empty-box">没有找到符合当前条件的专业，请调整省份、类别或专业关键词。</div>`;
    return;
  }

  if (!evaluatedRows.length) {
    dom.assessmentSummary.innerHTML = `
      <div class="summary-card">
        <div class="summary-top">
          <div>
            <h3 class="summary-title">当前条件下主要为新开专业参考</h3>
            <p>暂无可用于历史位次或分数对比的专业，系统不生成具体录取概率。</p>
          </div>
          <span class="tag tag-new">暂无往年数据</span>
        </div>
        <p class="risk-note">建议重点参考 2026 年招生计划人数、选科要求、专业热度以及学校官方招生说明。</p>
      </div>
    `;
    return;
  }

  const avg = Math.round(evaluatedRows.reduce((sum, item) => sum + item.evaluation.baseProbability, 0) / evaluatedRows.length);
  const best = evaluatedRows[0];
  const safeCount = evaluatedRows.filter((item) => item.evaluation.recommendType === "保一保").length;
  const stableCount = evaluatedRows.filter((item) => item.evaluation.recommendType === "稳一稳").length;
  const rushCount = evaluatedRows.filter((item) => item.evaluation.recommendType === "冲一冲").length;
  const riskCount = evaluatedRows.filter((item) => item.evaluation.recommendType === "谨慎填报").length;
  const overall = getOverallText(avg);
  const tagClassName = getTagClass(getRecommendType(avg));

  dom.assessmentSummary.innerHTML = `
    <div class="summary-card">
      <div class="summary-top">
        <div>
          <h3 class="summary-title">${overall.title}</h3>
          <p>${overall.subtitle}</p>
        </div>
        <span class="tag ${tagClassName}">${getRecommendType(avg)}</span>
      </div>
      <div class="summary-grid">
        <div class="summary-item"><span>录取可能性等级</span><strong>${getProbabilityLevel(avg)}</strong></div>
        <div class="summary-item"><span>参考概率区间</span><strong>${getProbabilityRange(avg)}</strong></div>
        <div class="summary-item"><span>风险等级</span><strong>${getRiskLevel(avg)}</strong></div>
        <div class="summary-item"><span>可参考专业</span><strong>${evaluatedRows.length} 个</strong></div>
      </div>
      <p class="summary-reason">主要依据：当前条件下，最匹配专业为“${escapeHtml(best.majorName)}”。${escapeHtml(best.evaluation.basis)}</p>
      <p class="risk-note">分组结果：保一保 ${safeCount} 个，稳一稳 ${stableCount} 个，冲一冲 ${rushCount} 个，风险较高 ${riskCount} 个，新开专业参考 ${newRows.length} 个。${getSpecialTip(user.category)}</p>
    </div>
  `;
}

function getOverallText(probability) {
  if (probability >= 75) return { title: "报考重庆工程学院整体机会较大", subtitle: "建议优先关注保一保和稳一稳专业，同时保留梯度。" };
  if (probability >= 60) return { title: "报考重庆工程学院有一定机会", subtitle: "建议以稳一稳专业为主，搭配少量冲刺专业。" };
  if (probability >= 45) return { title: "报考重庆工程学院机会中等", subtitle: "建议认真比较专业热度和计划人数，合理拉开梯度。" };
  if (probability >= 25) return { title: "报考重庆工程学院风险偏高", subtitle: "建议作为冲刺参考，并准备更稳妥的备选方案。" };
  return { title: "报考重庆工程学院风险较高", subtitle: "建议谨慎填报，优先确认投档规则和当年计划变化。" };
}

function renderRecommendGroups(evaluatedRows, newRows, user) {
  const groups = [
    { title: "保一保专业", type: "保一保", className: "tag-safe" },
    { title: "稳一稳专业", type: "稳一稳", className: "tag-stable" },
    { title: "冲一冲专业", type: "冲一冲", className: "tag-rush" },
    { title: "风险较高专业", type: "谨慎填报", className: "tag-risk" },
  ];

  const html = groups
    .map((group) => {
      const rows = evaluatedRows.filter((item) => item.evaluation.recommendType === group.type);
      if (!rows.length) return "";
      return `
        <div class="recommend-group">
          <h3 class="group-title">${group.title} ${rows.length} 个</h3>
          <div class="card-grid">${rows.map((item) => renderMajorCard(item, user)).join("")}</div>
        </div>
      `;
    })
    .join("");

  const newHtml = newRows.length
    ? `
      <div class="recommend-group">
        <h3 class="group-title">新开专业参考 ${newRows.length} 个</h3>
        <div class="card-grid">${newRows.map((item) => renderNewMajorCard(item, user)).join("")}</div>
      </div>
    `
    : "";

  const artTip = isArtCategory(user.category)
    ? `<p class="art-tip">美术类分数为综合分或专业相关分数体系，不能与普通物理类、历史类分数直接比较。本评估仅在美术类数据内部进行参考。</p>`
    : "";

  dom.recommendResults.innerHTML = html || newHtml ? html + newHtml + artTip : `<div class="empty-box">没有找到符合当前条件的推荐结果。</div>`;
}

function renderMajorCard(item, user) {
  const ev = item.evaluation;
  return `
    <article class="result-card">
      <div class="result-head">
        <h3>${escapeHtml(item.majorName)}</h3>
        <span class="tag ${getTagClass(ev.recommendType)}">${escapeHtml(ev.recommendType)}</span>
      </div>
      <dl>
        <dt>省份</dt><dd>${escapeHtml(item.province)}</dd>
        <dt>招生类别</dt><dd>${escapeHtml(item.enrollCategory)}</dd>
        <dt>选科要求</dt><dd>${escapeHtml(item.subjectRequirement || "不限")}</dd>
        <dt>最低分</dt><dd>${formatValue(item.minScore)}</dd>
        <dt>最低位次</dt><dd>${formatValue(item.minRank)}</dd>
        <dt>计划人数</dt><dd>${formatValue(item.planCount)}</dd>
        <dt>你的分数</dt><dd>${formatValue(user.score)}</dd>
        <dt>你的位次</dt><dd>${formatValue(user.rank)}</dd>
        <dt>分数差</dt><dd>${formatDiff(ev.scoreDiff, "分")}</dd>
        <dt>位次差</dt><dd>${formatRankDiff(ev.rankDiff)}</dd>
        <dt>可能性</dt><dd>${escapeHtml(ev.level)}</dd>
        <dt>参考区间</dt><dd>${escapeHtml(ev.range)}</dd>
        <dt>风险等级</dt><dd>${escapeHtml(ev.risk)}</dd>
      </dl>
      <p class="basis"><strong>为什么：</strong>${escapeHtml(ev.basis)}</p>
    </article>
  `;
}

function renderNewMajorCard(item, user) {
  return `
    <article class="result-card">
      <div class="result-head">
        <h3>${escapeHtml(item.majorName)}</h3>
        <span class="tag tag-new">新开专业</span>
      </div>
      <dl>
        <dt>省份</dt><dd>${escapeHtml(item.province)}</dd>
        <dt>招生类别</dt><dd>${escapeHtml(item.enrollCategory)}</dd>
        <dt>选科要求</dt><dd>${escapeHtml(item.subjectRequirement || "不限")}</dd>
        <dt>最低分</dt><dd>—</dd>
        <dt>最低位次</dt><dd>—</dd>
        <dt>计划人数</dt><dd>${formatValue(item.planCount)}</dd>
        <dt>你的分数</dt><dd>${formatValue(user.score)}</dd>
        <dt>你的位次</dt><dd>${formatValue(user.rank)}</dd>
      </dl>
      <p class="chance-empty">暂无历史数据，无法估算录取几率。</p>
      <p class="basis">该专业可能为新开专业或新增招生专业，暂无上一年度录取最低分和最低位次，因此系统无法根据历史数据计算录取几率。建议重点参考 2026 年招生计划人数、选科要求、专业热度以及学校官方招生说明。</p>
    </article>
  `;
}

function handleScoreSearch() {
  const hasCondition =
    dom.scoreProvince.value ||
    dom.scoreYear.value ||
    dom.scoreCategory.value ||
    dom.scoreMajor.value.trim() ||
    dom.minScoreFilter.value ||
    dom.maxScoreFilter.value ||
    dom.minRankFilter.value ||
    dom.maxRankFilter.value;

  if (!hasCondition) {
    resetScoreResults();
    return;
  }

  scoreExpanded = false;
  currentScoreRows = getScoreFilteredData();
  renderScoreResults();
}

function getScoreFilteredData() {
  const province = dom.scoreProvince.value;
  const year = dom.scoreYear.value;
  const category = dom.scoreCategory.value;
  const keyword = dom.scoreMajor.value.trim();
  const minScore = toNumberOrNull(dom.minScoreFilter.value);
  const maxScore = toNumberOrNull(dom.maxScoreFilter.value);
  const minRank = toNumberOrNull(dom.minRankFilter.value);
  const maxRank = toNumberOrNull(dom.maxRankFilter.value);

  return allData.filter((item) => {
    return (
      matchText(item.province, province) &&
      matchText(String(item.year || ""), year) &&
      matchText(item.enrollCategory, category) &&
      matchKeyword(item.majorName, keyword) &&
      matchNumberRange(item.minScore, minScore, maxScore) &&
      matchNumberRange(item.minRank, minRank, maxRank)
    );
  });
}

function renderScoreResults() {
  dom.scoreNotice.classList.add("hidden");
  dom.scoreResultWrap.classList.remove("hidden");
  const rows = scoreExpanded ? currentScoreRows : currentScoreRows.slice(0, 20);

  if (!rows.length) {
    dom.scoreTableBody.innerHTML = `<tr><td colspan="9">当前条件下暂无录取分数数据。</td></tr>`;
  } else {
    dom.scoreTableBody.innerHTML = rows
      .map((item) => `
        <tr>
          <td>${escapeHtml(item.province)}</td>
          <td>${formatValue(item.year)}</td>
          <td>${escapeHtml(item.enrollCategory)}</td>
          <td>${escapeHtml(item.majorName)}</td>
          <td>${formatValue(item.minScore)}</td>
          <td>${formatValue(item.minRank)}</td>
          <td>${escapeHtml(item.subjectRequirement || "不限")}</td>
          <td>${formatValue(item.planCount)}</td>
          <td>${statusBadge(item)}</td>
        </tr>
      `)
      .join("");
  }

  renderExpandButton(dom.scoreExpandWrap, currentScoreRows.length, scoreExpanded, () => {
    scoreExpanded = !scoreExpanded;
    renderScoreResults();
  }, 20);
}

function resetScoreResults() {
  [
    dom.scoreProvince,
    dom.scoreYear,
    dom.scoreCategory,
    dom.scoreMajor,
    dom.minScoreFilter,
    dom.maxScoreFilter,
    dom.minRankFilter,
    dom.maxRankFilter,
  ].forEach((field) => {
    field.value = "";
  });
  scoreExpanded = false;
  currentScoreRows = [];
  dom.scoreResultWrap.classList.add("hidden");
  dom.scoreNotice.classList.remove("hidden");
  dom.scoreNotice.textContent = "请选择省份、招生类别或输入专业关键词后查询录取分数。";
}

function renderExpandButton(container, total, expanded, onClick, limit) {
  container.innerHTML = "";
  if (total <= limit) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary-btn";
  button.textContent = expanded ? "收起" : `展开全部 ${total} 条`;
  button.addEventListener("click", onClick);
  container.appendChild(button);
}

function statusBadge(item) {
  return isNewMajor(item)
    ? `<span class="status-badge status-new">新开专业</span>`
    : `<span class="status-badge status-normal">可参考</span>`;
}

function getTagClass(type) {
  if (type === "保一保") return "tag-safe";
  if (type === "稳一稳") return "tag-stable";
  if (type === "冲一冲") return "tag-rush";
  if (type === "谨慎填报") return "tag-risk";
  return "tag-muted";
}

function getSpecialTip(category) {
  if (isArtCategory(category)) {
    return "美术类评估仅在美术类数据内部参考，不能与普通类分数直接比较。";
  }
  return "";
}

function isArtCategory(category) {
  return String(category || "").includes("美术") || String(category || "").includes("设计");
}

function hasHistoricalData(item) {
  return item.minScore !== null || item.minRank !== null;
}

function isNewMajor(item) {
  return item.minScore === null && item.minRank === null;
}

function normalizeSubjectRequirement(value) {
  const text = String(value || "")
    .replace(/[，、,\/\s+]/g, "")
    .replace(/不限|不提科目要求|无/g, "不限")
    .replace(/物理化学|物化/g, "物理化学")
    .replace(/物理/g, "物理")
    .replace(/历史/g, "历史");
  if (!text) return "";
  if (text.includes("不限")) return "不限";
  if (text.includes("物理") && text.includes("化学")) return "物理化学";
  if (text.includes("物化")) return "物理化学";
  if (text.includes("物理")) return "物理";
  if (text.includes("历史")) return "历史";
  return text;
}

function matchSubject(actual, expected) {
  if (!expected) return true;
  return normalizeSubjectRequirement(actual) === normalizeSubjectRequirement(expected);
}

function matchText(actual, expected) {
  return !expected || String(actual || "") === String(expected);
}

function matchKeyword(actual, keyword) {
  return !keyword || String(actual || "").includes(keyword);
}

function matchNumberRange(value, min, max) {
  if (value === null) {
    return min === null && max === null;
  }
  if (min !== null && value < min) return false;
  if (max !== null && value > max) return false;
  return true;
}

function getRegionByProvince(province) {
  return Object.keys(regionMap).find((region) => regionMap[region].includes(province)) || "";
}

function getProvincesInRegion(region) {
  const available = uniqueValues(allData.map((item) => item.province));
  return (regionMap[region] || []).filter((province) => available.includes(province));
}

function fillSelect(select, values, defaultText) {
  select.innerHTML = `<option value="">${defaultText}</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function uniqueValues(values) {
  return [...new Set(values.filter((value) => value !== null && value !== undefined && String(value).trim() !== ""))];
}

function toNumberOrNull(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }
  const number = Number(String(value).replace(/,/g, ""));
  return Number.isFinite(number) ? number : null;
}

function formatValue(value) {
  return value === null || value === undefined || value === "" ? "—" : value;
}

function formatDiff(value, unit) {
  if (value === null || value === undefined) return "—";
  if (value > 0) return `+${value}${unit}`;
  if (value < 0) return `${value}${unit}`;
  return `持平`;
}

function formatRankDiff(value) {
  if (value === null || value === undefined) return "—";
  if (value > 0) return `靠前 ${value} 名`;
  if (value < 0) return `靠后 ${Math.abs(value)} 名`;
  return "持平";
}

function setLoadStatus(message, type) {
  dom.loadStatus.textContent = message;
  dom.loadStatus.className = `load-status ${type === "success" ? "success" : type === "warning" ? "warning" : ""}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
