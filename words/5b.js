// grade5SecondTerm.js - 五年级下册单词库
const wordData = {
    lesson1: [
        { english: "speak", chinese: "讲，说" },
        { english: "afternoon", chinese: "下午" },
        { english: "put", chinese: "放" },
        { english: "question", chinese: "问题" },
        { english: "number", chinese: "号码，数字" },
        { english: "certainly", chinese: "当然" },
        { english: "into", chinese: "到……里" },
        { english: "meat", chinese: "肉" },
        { english: "job", chinese: "工作" }
    ],
    lesson2: [
        { english: "must", chinese: "必须" },
        { english: "street", chinese: "街道" },
        { english: "light", chinese: "灯，光线" },
        { english: "cousin", chinese: "堂/表兄弟姐妹" },
        { english: "answer", chinese: "回答" },
        { english: "cross", chinese: "穿过" },
        { english: "line", chinese: "线" },
        { english: "all right", chinese: "好" }
    ],
    lesson3: [
        { english: "blackboard", chinese: "黑板" },
        { english: "pupil", chinese: "小学生" },
        { english: "forty", chinese: "四十" },
        { english: "paper", chinese: "纸" },
        { english: "dirty", chinese: "脏的" },
        { english: "drop", chinese: "掉落" },
        { english: "pick", chinese: "拾，摘" },
        { english: "pick up", chinese: "捡起" }
    ],
    lesson4: [
        { english: "live", chinese: "居住，生活" },
        { english: "Ms", chinese: "女士" },
        { english: "kind", chinese: "种类；和善的" },
        { english: "mountain", chinese: "高山" },
        { english: "smell", chinese: "闻起来" },
        { english: "sick", chinese: "病的" },
        { english: "medicine", chinese: "药" },
        { english: "suddenly", chinese: "突然" },
        { english: "quickly", chinese: "迅速地" },
        { english: "come from", chinese: "来自" }
    ],
    lesson5: [
        { english: "farm", chinese: "农场" },
        { english: "easy", chinese: "容易的" },
        { english: "interesting", chinese: "有趣的" },
        { english: "policeman", chinese: "警察" },
        { english: "manager", chinese: "经理" },
        { english: "office", chinese: "办公室" },
        { english: "choose", chinese: "选择" },
        { english: "cleaner", chinese: "清洁工" },
        { english: "on a farm", chinese: "在农场" }
    ],
    lesson6: [
        { english: "hospital", chinese: "医院" },
        { english: "thirty", chinese: "三十" }
    ],
    lesson7: [
        { english: "breakfast", chinese: "早餐" },
        { english: "Monday", chinese: "星期一" },
        { english: "fifty", chinese: "五十" },
        { english: "way", chinese: "路" },
        { english: "try", chinese: "尝试" },
        { english: "ready", chinese: "准备好的" },
        { english: "Tuesday", chinese: "星期二" },
        { english: "Thursday", chinese: "星期四" },
        { english: "Wednesday", chinese: "星期三" },
        { english: "hole", chinese: "洞，孔" },
        { english: "out", chinese: "在外" },
        { english: "deep", chinese: "深的" },
        { english: "fill", chinese: "填满" },
        { english: "smile", chinese: "微笑" },
        { english: "on the way", chinese: "在……路上" }
    ],
    lesson8: [
        { english: "maths", chinese: "数学（美 math）" },
        { english: "art", chinese: "艺术" },
        { english: "lesson", chinese: "课，功课" },
        { english: "when", chinese: "什么时候" },
        { english: "PE", chinese: "体育" },
        { english: "song", chinese: "歌曲" },
        { english: "science", chinese: "科学" },
        { english: "subject", chinese: "学科，主题" },
        { english: "learn", chinese: "学习" },
        { english: "American", chinese: "美国人（的）" },
        { english: "hope", chinese: "希望" },
        { english: "soon", chinese: "不久" }
    ],
    lesson9: [
        { english: "rice", chinese: "米饭" },
        { english: "soup", chinese: "汤" },
        { english: "exercise", chinese: "练习，体操" },
        { english: "kitchen", chinese: "厨房" },
        { english: "toilet", chinese: "厕所" },
        { english: "early", chinese: "早的" },
        { english: "usually", chinese: "通常" },
        { english: "bedroom", chinese: "卧室" },
        { english: "have lunch", chinese: "吃午饭" },
        { english: "get up", chinese: "起床" },
        { english: "do morning exercises", chinese: "做早操" }
    ],
    lesson10: [
        { english: "before", chinese: "在……以前" },
        { english: "afraid", chinese: "担心的，害怕的" },
        { english: "stand", chinese: "站" },
        { english: "someone", chinese: "某人" },
        { english: "throw", chinese: "扔" },
        { english: "should", chinese: "应该" },
        { english: "get out", chinese: "出去" },
        { english: "each other", chinese: "互相" }
    ],
    lesson11: [
        { english: "far", chinese: "远的" },
        { english: "minute", chinese: "分钟，一会儿" },
        { english: "by", chinese: "按照，乘（车等）" },
        { english: "slow", chinese: "慢的" },
        { english: "daughter", chinese: "女儿" },
        { english: "telephone", chinese: "电话" },
        { english: "ring", chinese: "（电话）响铃" },
        { english: "by bus", chinese: "乘坐公共汽车" },
        { english: "on foot", chinese: "步行" },
        { english: "have breakfast", chinese: "吃早餐" },
        { english: "for a minute", chinese: "一会儿" }
    ],
    lesson12: [
        { english: "cinema", chinese: "电影院" },
        { english: "after", chinese: "在……之后" },
        { english: "wonderful", chinese: "极好的" },
        { english: "fan", chinese: "风扇，爱好者" },
        { english: "night", chinese: "夜晚" },
        { english: "Internet", chinese: "互联网" },
        { english: "mobile", chinese: "可移动的" },
        { english: "everything", chinese: "每件事" },
        { english: "leave", chinese: "离开" },
        { english: "wall", chinese: "墙" },
        { english: "lose", chinese: "丢失" },
        { english: "key", chinese: "钥匙" },
        { english: "just", chinese: "正好，仅仅" },
        { english: "life", chinese: "生活，生命" },
        { english: "mobile phone", chinese: "手机" },
        { english: "turn off", chinese: "关掉" },
        { english: "turn on", chinese: "打开" }
    ]
};

// 调试用：检查数据加载
console.log("单词库加载完成，共", Object.keys(wordData).length, "个课时");

// 确保wordData已全局可用
if (typeof window !== 'undefined') {
    window.wordData = wordData;
}
