// words.js - 六年级下册单词库
const wordData = {
    lesson1: [
        { english: "coat", chinese: "外套，上衣" },
        { english: "sleep", chinese: "睡觉" },
        { english: "tired", chinese: "累的" },
        { english: "pass", chinese: "传递，经过，通过" },
        { english: "headache", chinese: "头痛" },
        { english: "habit", chinese: "习惯" },
        { english: "have a cold", chinese: "感冒" },
        { english: "stay up", chinese: "熬夜" },
        { english: "go to bed", chinese: "上床睡觉" },
        { english: "from then on", chinese: "从那时起" },
        { english: "What’s the matter?", chinese: "怎么了？" }
    ],
    lesson2: [
        { english: "photo", chinese: "照片" },
        { english: "young", chinese: "年轻的" },
        { english: "angry", chinese: "生气的" },
        { english: "arrive", chinese: "到达" },
        { english: "ago", chinese: "以前" },
        { english: "kill", chinese: "杀死" },
        { english: "return", chinese: "返回" },
        { english: "finally", chinese: "最终" },
        { english: "trip", chinese: "旅行" },
        { english: "take photos", chinese: "拍照" }
    ],
    lesson3: [
        { english: "boat", chinese: "划船；小船" },
        { english: "zoo", chinese: "动物园" },
        { english: "last", chinese: "上一个，最后" },
        { english: "protect", chinese: "保护" },
        { english: "mine", chinese: "我的" },
        { english: "middle", chinese: "中间" },
        { english: "off", chinese: "离开，脱离" },
        { english: "world", chinese: "世界" },
        { english: "have a good look at", chinese: "好好看看" },
        { english: "do one’s best", chinese: "竭尽全力" },
        { english: "wait for", chinese: "等待" },
        { english: "in the middle of", chinese: "在……中间" },
        { english: "after some time", chinese: "一段时间之后" }
    ],
    lesson4: [
        { english: "supermarket", chinese: "超市" },
        { english: "taxi", chinese: "出租汽车" },
        { english: "sweater", chinese: "毛衣" },
        { english: "cool", chinese: "酷，凉快的" },
        { english: "army", chinese: "军队" },
        { english: "poor", chinese: "贫穷的，可怜的" },
        { english: "during", chinese: "在……期间" },
        { english: "brave", chinese: "勇敢的" },
        { english: "later", chinese: "以后，后来" },
        { english: "famous", chinese: "著名的" },
        { english: "a few", chinese: "一些" }
    ],
    lesson5: [
        { english: "umbrella", chinese: "雨伞" },
        { english: "luck", chinese: "运气" }
    ],
    lesson6: [
        { english: "library", chinese: "图书馆" },
        { english: "left", chinese: "左边" },
        { english: "end", chinese: "末端，尽头" },
        { english: "surprised", chinese: "感到惊讶的" },
        { english: "at the end", chinese: "最后" },
        { english: "on the right", chinese: "在右边" },
        { english: "next to", chinese: "紧挨着" },
        { english: "look for", chinese: "寻找" }
    ],
    lesson7: [
        { english: "lovely", chinese: "可爱的" },
        { english: "a lot of", chinese: "许多" }
    ],
    lesson8: [
        { english: "between", chinese: "在（两者）之间" },
        { english: "hour", chinese: "小时" },
        { english: "team", chinese: "队，组" },
        { english: "cloud", chinese: "云" },
        { english: "clear", chinese: "清楚的，明亮的" },
        { english: "shine", chinese: "照亮，发亮" },
        { english: "raincoat", chinese: "雨衣" },
        { english: "talk about", chinese: "谈论" },
        { english: "laugh at", chinese: "嘲笑" },
        { english: "What a pity!", chinese: "多可惜啊！" }
    ],
    lesson9: [
        { english: "high", chinese: "高的" },
        { english: "deaf", chinese: "聋的" },
        { english: "once", chinese: "从前" }
    ],
    lesson10: [
        { english: "holiday", chinese: "假日" },
        { english: "student", chinese: "学生" },
        { english: "travel", chinese: "旅行" },
        { english: "which", chinese: "哪个" },
        { english: "capital", chinese: "首都" },
        { english: "climb", chinese: "爬，攀登" },
        { english: "around", chinese: "环绕，在……周围" },
        { english: "come to an end", chinese: "结束" },
        { english: "some day", chinese: "将来有一天" }
    ]
};
// 调试用：检查数据加载
console.log("单词库加载完成，共", Object.keys(wordData).length, "个课时"); 
// 确保wordData已全局可用
if (typeof window !== 'undefined') {
    window.wordData = wordData;
}