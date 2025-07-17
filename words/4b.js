// grade4SecondTerm.js - 四年级下册单词库
const wordData = {
    lesson1: [
        { english: "watch", chinese: "手表；观看" },
        { english: "whose", chinese: "谁的" },
        { english: "think", chinese: "想，认为" },
        { english: "man", chinese: "男人（复 men）" },
        { english: "ask", chinese: "问" },
        { english: "beautiful", chinese: "美丽的" },
        { english: "right", chinese: "正确的；右边" },
        { english: "remember", chinese: "记得" },
        { english: "very much", chinese: "非常" },
        { english: "Here you are.", chinese: "给你。" }
    ],
    lesson2: [
        { english: "shirt", chinese: "衬衣" },
        { english: "trousers", chinese: "裤子" },
        { english: "hair", chinese: "头发" },
        { english: "sock", chinese: "短袜" },
        { english: "his", chinese: "他的" },
        { english: "shorts", chinese: "短裤" },
        { english: "orange", chinese: "橘子；橘色的" },
        { english: "shoe", chinese: "鞋" },
        { english: "term", chinese: "学期" },
        { english: "really", chinese: "真正地" },
        { english: "nut", chinese: "坚果" },
        { english: "a pair of", chinese: "一条，一双" }
    ],
    lesson3: [
        { english: "class", chinese: "班级" },
        { english: "say", chinese: "说" },
        { english: "to", chinese: "向，到" },
        { english: "them", chinese: "他们" },
        { english: "behind", chinese: "在……后" },
        { english: "grade", chinese: "年级" },
        { english: "glass", chinese: "玻璃，玻璃杯" },
        { english: "glasses", chinese: "眼镜" }
    ],
    lesson4: [
        { english: "about", chinese: "关于；大约，到处" },
        { english: "welcome", chinese: "欢迎" },
        { english: "our", chinese: "我们的" },
        { english: "school", chinese: "学校" },
        { english: "at", chinese: "在……" },
        { english: "be", chinese: "是" },
        { english: "all", chinese: "都" },
        { english: "Chinese", chinese: "汉语，中国人（的）" },
        { english: "be from", chinese: "来自……" },
        { english: "What about you?", chinese: "你呢？" }
    ],
    lesson5: [
        { english: "these", chinese: "这些" },
        { english: "those", chinese: "那些" },
        { english: "tiger", chinese: "老虎" },
        { english: "walk", chinese: "走" },
        { english: "jump", chinese: "跳" },
        { english: "mom", chinese: "妈妈（美口语）" },
        { english: "talk", chinese: "谈话" },
        { english: "parrot", chinese: "鹦鹉" },
        { english: "sure", chinese: "一定的" },
        { english: "Can I help you?", chinese: "我能帮你吗？" }
    ],
    lesson7: [
        { english: "meet", chinese: "遇见" },
        { english: "Friday", chinese: "星期五" },
        { english: "evening", chinese: "晚上" },
        { english: "call", chinese: "打电话，叫" },
        { english: "up", chinese: "向上" },
        { english: "very", chinese: "非常，很" },
        { english: "tomorrow", chinese: "明天" },
        { english: "ill", chinese: "生病的" },
        { english: "study", chinese: "学习" },
        { english: "free", chinese: "空闲的" },
        { english: "shall", chinese: "将要" },
        { english: "homework", chinese: "家庭作业" },
        { english: "go swimming", chinese: "去游泳" },
        { english: "do one's homework", chinese: "做作业" },
        { english: "just then", chinese: "就在那时" },
        { english: "call up", chinese: "打电话" },
        { english: "at home", chinese: "在家" },
        { english: "of course", chinese: "一定，当然" }
    ],
    lesson8: [
        { english: "ruler", chinese: "尺子" },
        { english: "long", chinese: "长的" },
        { english: "use", chinese: "使用" },
        { english: "of", chinese: "……的" },
        { english: "foot", chinese: "脚（复 feet）" },
        { english: "people", chinese: "人们" },
        { english: "also", chinese: "也" },
        { english: "deer", chinese: "鹿" },
        { english: "donkey", chinese: "驴" },
        { english: "come up", chinese: "走近" },
        { english: "Here it is.", chinese: "在这里；给你。" }
    ],
    lesson9: [
        { english: "snow", chinese: "雪；下雪" },
        { english: "winter", chinese: "冬天" },
        { english: "favourite", chinese: "最喜爱的（美 favorite）" },
        { english: "season", chinese: "季节" },
        { english: "summer", chinese: "夏天" },
        { english: "spring", chinese: "春天" },
        { english: "autumn", chinese: "秋天" },
        { english: "busy", chinese: "忙的" },
        { english: "because", chinese: "因为" }
    ],
    lesson10: [
        { english: "wash", chinese: "洗" },
        { english: "face", chinese: "脸，面孔" },
        { english: "cook", chinese: "煮，烧；厨师" },
        { english: "clean", chinese: "弄干净；清洁的" },
        { english: "draw", chinese: "画" },
        { english: "picture", chinese: "图画，照片" },
        { english: "supper", chinese: "晚餐" },
        { english: "give", chinese: "给" },
        { english: "have supper", chinese: "吃晚饭" }
    ],
    lesson11: [
        { english: "ball", chinese: "球" },
        { english: "football", chinese: "足球" },
        { english: "basketball", chinese: "篮球" },
        { english: "their", chinese: "他们的" },
        { english: "water", chinese: "水；浇水" },
        { english: "heavy", chinese: "重的" },
        { english: "flower", chinese: "花" },
        { english: "garden", chinese: "花园" },
        { english: "carry", chinese: "搬运，携带" },
        { english: "What's up?", chinese: "什么事?" }
    ],
    lesson12: [
        { english: "idea", chinese: "主意" },
        { english: "computer", chinese: "计算机" },
        { english: "lunch", chinese: "午饭" },
        { english: "fast", chinese: "快" },
        { english: "outside", chinese: "在外面" },
        { english: "rabbit", chinese: "兔子" },
        { english: "catch", chinese: "抓住" },
        { english: "go away", chinese: "走开" }
    ]
};

// 调试用：检查数据加载
console.log("单词库加载完成，共", Object.keys(wordData).length, "个课时");

// 确保wordData已全局可用
if (typeof window !== 'undefined') {
    window.wordData = wordData;
}
