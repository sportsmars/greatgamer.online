// words.js - 六年级上册单词库
const wordData = {
    lesson1: [
        { english: "party", chinese: "聚会" },
        { english: "weather", chinese: "天气" },
        { english: "sunny", chinese: "晴朗的" },
        { english: "will", chinese: "将要" },
        { english: "begin", chinese: "开始" },
        { english: "bring", chinese: "带来" },
        { english: "do some shopping", chinese: "买东西" }
    ],
    lesson2: [
        { english: "map", chinese: "地图" },
        { english: "China", chinese: "中国" },
        { english: "crayon", chinese: "蜡笔" },
        { english: "Saturday", chinese: "星期六" },
        { english: "son", chinese: "儿子" },
        { english: "never", chinese: "从不" },
        { english: "if", chinese: "如果" },
        { english: "another", chinese: "另一个" }
    ],
    lesson3: [
        { english: "cloudy", chinese: "多云的" },
        { english: "windy", chinese: "有风的" },
        { english: "place", chinese: "地方" },
        { english: "strong", chinese: "强烈的，强壮的" },
        { english: "rain", chinese: "雨；下雨" },
        { english: "lake", chinese: "湖" },
        { english: "earth", chinese: "地球" },
        { english: "change", chinese: "改变" },
        { english: "wind", chinese: "风" },
        { english: "dry", chinese: "干的" },
        { english: "full", chinese: "满的" },
        { english: "bring about", chinese: "带来，引起" },
        { english: "be bad for", chinese: "对……有害" },
        { english: "full of", chinese: "充满" }
    ],
    lesson4: [
        { english: "difficult", chinese: "困难的" },
        { english: "healthy", chinese: "健康的" },
        { english: "bookshop", chinese: "书店" },
        { english: "hill", chinese: "小山" },
        { english: "air", chinese: "空气" },
        { english: "wet", chinese: "湿的" },
        { english: "more", chinese: "较多的；更" },
        { english: "country", chinese: "国家" },
        { english: "cut down", chinese: "砍倒" }
    ],
    lesson6: [
        { english: "third", chinese: "第三" },
        { english: "floor", chinese: "楼层" },
        { english: "fifth", chinese: "第五" },
        { english: "second", chinese: "第二；秒" },
        { english: "first", chinese: "第一" },
        { english: "same", chinese: "相同的" },
        { english: "building", chinese: "大楼" },
        { english: "ground", chinese: "地面" }
    ],
    lesson7: [
        { english: "April", chinese: "四月" },
        { english: "May", chinese: "五月" },
        { english: "year", chinese: "年" },
        { english: "month", chinese: "月份" },
        { english: "dinner", chinese: "正餐，晚餐" },
        { english: "moon", chinese: "月亮" },
        { english: "date", chinese: "日期" },
        { english: "age", chinese: "年龄" },
        { english: "than", chinese: "比" },
        { english: "September", chinese: "九月" },
        { english: "October", chinese: "十月" },
        { english: "round", chinese: "圆的" },
        { english: "sweet", chinese: "甜的" },
        { english: "inside", chinese: "在里面" },
        { english: "become", chinese: "变得" },
        { english: "bright", chinese: "明亮的" }
    ],
    lesson8: [
        { english: "visit", chinese: "探望，参观" },
        { english: "kid", chinese: "小孩" },
        { english: "wear", chinese: "穿" },
        { english: "clothes", chinese: "衣服" },
        { english: "candy", chinese: "糖果" },
        { english: "parent", chinese: "父（母）亲" },
        { english: "December", chinese: "十二月" },
        { english: "Christmas", chinese: "圣诞节" },
        { english: "merry", chinese: "愉快的" },
        { english: "present", chinese: "礼物" },
        { english: "January", chinese: "一月" },
        { english: "February", chinese: "二月" },
        { english: "meal", chinese: "一顿饭" },
        { english: "grandparent", chinese: "（外）祖父母" }
    ],
    lesson9: [
        { english: "yesterday", chinese: "昨天" },
        { english: "June", chinese: "六月" },
        { english: "road", chinese: "路" },
        { english: "stop", chinese: "停止；（停车）站" },
        { english: "driver", chinese: "司机" },
        { english: "turn", chinese: "转向，把……变成" },
        { english: "word", chinese: "单词" },
        { english: "meeting", chinese: "会议，集会" },
        { english: "hard", chinese: "努力地；困难的" },
        { english: "start", chinese: "开始，动身" },
        { english: "count", chinese: "数" },
        { english: "laugh", chinese: "笑" },
        { english: "sports meeting", chinese: "运动会" }
    ],
    lesson10: [
        { english: "window", chinese: "窗" },
        { english: "river", chinese: "江河" },
        { english: "city", chinese: "城市" },
        { english: "star", chinese: "星星" },
        { english: "join", chinese: "加入，参加" },
        { english: "drive", chinese: "驾驶" },
        { english: "along", chinese: "沿着" },
        { english: "bridge", chinese: "桥" },
        { english: "west", chinese: "西方" },
        { english: "sky", chinese: "天空" },
        { english: "at last", chinese: "最后" }
    ]
};
// 调试用：检查数据加载
console.log("单词库加载完成，共", Object.keys(wordData).length, "个课时"); 
// 确保wordData已全局可用
if (typeof window !== 'undefined') {
    window.wordData = wordData;
}