// grade4FirstTerm.js - 四年级上册单词库
const wordData = {
    unit1: [
        { english: "some", chinese: "一些" },
        { english: "bread", chinese: "面包" },
        { english: "water", chinese: "水；水域；给……浇水" },
        { english: "ice cream", chinese: "冰激凌" },
        { english: "tea", chinese: "茶；茶叶" },
        { english: "juice", chinese: "果汁" },
        { english: "can", chinese: "可以；能；会" },
        { english: "please", chinese: "请" },
        { english: "sure", chinese: "当然" }
    ],
    unit2: [
        { english: "sing", chinese: "唱歌" },
        { english: "swim", chinese: "游泳" },
        { english: "climb", chinese: "攀爬" },
        { english: "jump", chinese: "跳；跳跃" },
        { english: "dance", chinese: "跳舞" },
        { english: "draw", chinese: "画" },
        { english: "do", chinese: "做；干" },
        { english: "lawn", chinese: "草坪" },
        { english: "paw", chinese: "爪" }
    ],
    unit3: [
        { english: "watermelon", chinese: "西瓜" },
        { english: "apple", chinese: "苹果" },
        { english: "pear", chinese: "梨" },
        { english: "banana", chinese: "香蕉" },
        { english: "grape", chinese: "葡萄" },
        { english: "fruit", chinese: "水果" },
        { english: "like", chinese: "喜欢；像" },
        { english: "table", chinese: "桌子" },
        { english: "candle", chinese: "蜡烛" }
    ],
    unit4: [
        { english: "subject", chinese: "科目" },
        { english: "Chinese", chinese: "语文" },
        { english: "Maths (AmE Math)", chinese: "数学" },
        { english: "English", chinese: "英语" },
        { english: "PE (=physical education)", chinese: "体育" },
        { english: "Art", chinese: "美术" },
        { english: "Music", chinese: "音乐" },
        { english: "Science", chinese: "科学" },
        { english: "all", chinese: "全；完全" },
        { english: "today", chinese: "今天" },
        { english: "day", chinese: "天" },
        { english: "say", chinese: "说；说话" }
    ],
    unit5: [
        { english: "eleven", chinese: "十一" },
        { english: "twelve", chinese: "十二" },
        { english: "thirteen", chinese: "十三" },
        { english: "fourteen", chinese: "十四" },
        { english: "fifteen", chinese: "十五" },
        { english: "sixteen", chinese: "十六" },
        { english: "seventeen", chinese: "十七" },
        { english: "how many", chinese: "多少" },
        { english: "see", chinese: "看见" },
        { english: "baby", chinese: "幼儿；幼崽" },
        { english: "egg", chinese: "鸡蛋" }
    ],
    unit6: [
        { english: "first", chinese: "第一；首先" },
        { english: "second", chinese: "第二" },
        { english: "third", chinese: "第三" },
        { english: "floor", chinese: "楼层；地板" },
        { english: "classroom", chinese: "教室" },
        { english: "room", chinese: "房间；室" },
        { english: "library", chinese: "图书馆" },
        { english: "toilet", chinese: "厕所；洗手间" },
        { english: "hurry", chinese: "匆忙" },
        { english: "hurry up", chinese: "赶快" },
        { english: "bookshelf", chinese: "书架" },
        { english: "which", chinese: "哪一个；哪一些" },
        { english: "class", chinese: "班级；课程" },
        { english: "grade", chinese: "年级" },
        { english: "our", chinese: "我们的" },
        { english: "visit", chinese: "拜访" },
        { english: "star", chinese: "明星；星星" },
        { english: "middle", chinese: "中间" },
        { english: "many", chinese: "许多" },
        { english: "join", chinese: "加入" },
        { english: "soil", chinese: "土壤" },
        { english: "coin", chinese: "硬币" },
        { english: "point", chinese: "指；得分" }
    ],
    unit7: [
        { english: "coat", chinese: "外套" },
        { english: "skipping rope", chinese: "跳绳" },
        { english: "bottle", chinese: "瓶子" },
        { english: "umbrella", chinese: "雨伞" },
        { english: "ping - pong", chinese: "乒乓运动；乒乓球" },
        { english: "ping - pong bat", chinese: "乒乓球拍" },
        { english: "key", chinese: "钥匙；关键的" },
        { english: "whose", chinese: "谁的" },
        { english: "tidy up", chinese: "收拾；整理" },
        { english: "sit", chinese: "坐" },
        { english: "very much", chinese: "非常；很" },
        { english: "goat", chinese: "山羊" },
        { english: "boat", chinese: "小船" },
        { english: "road", chinese: "道路；公路" }
    ],
    unit8: [
        { english: "sport", chinese: "运动" },
        { english: "volleyball", chinese: "排球运动；排球" },
        { english: "basketball", chinese: "篮球运动；篮球" },
        { english: "badminton", chinese: "羽毛球运动；羽毛球" },
        { english: "football", chinese: "足球运动；足球" },
        { english: "him", chinese: "他(宾格)" },
        { english: "us", chinese: "我们(宾格)" }
    ],
    unit9: [
        { english: "strong", chinese: "强壮的" },
        { english: "thin", chinese: "瘦的" },
        { english: "young", chinese: "年轻的" },
        { english: "lovely", chinese: "可爱的" },
        { english: "look like", chinese: "看起来像……" },
        { english: "hair", chinese: "头发" },
        { english: "well", chinese: "好；健康的" },
        { english: "glasses", chinese: "眼镜" },
        { english: "be", chinese: "是；成为；存在" },
        { english: "Teachers’ Day", chinese: "教师节" },
        { english: "guess", chinese: "猜测" },
        { english: "stair", chinese: "楼梯" },
        { english: "air", chinese: "空气；大气" }
    ],
    unit10: [
        { english: "close", chinese: "关；关闭；接近" },
        { english: "door", chinese: "门" },
        { english: "window", chinese: "窗户" },
        { english: "rule", chinese: "规则" },
        { english: "clean", chinese: "打扫；清洁的" },
        { english: "blackboard", chinese: "黑板" },
        { english: "after", chinese: "在……之后" },
        { english: "quiet", chinese: "安静的" },
        { english: "stand", chinese: "站立" },
        { english: "up", chinese: "起来" },
        { english: "down", chinese: "向下；沿着" },
        { english: "ride", chinese: "骑" },
        { english: "skateboard", chinese: "(在滑板上)滑行；滑板" },
        { english: "run", chinese: "奔跑" },
        { english: "find", chinese: "找到" },
        { english: "try", chinese: "尝试" },
        { english: "litter", chinese: "乱扔" },
        { english: "follow", chinese: "遵循；跟随" },
        { english: "roar", chinese: "吼叫" }
    ],
    unit11: [
        { english: "kick", chinese: "踢" },
        { english: "metre (AmE meter)", chinese: "米" },
        { english: "throw", chinese: "投；掷" },
        { english: "hand", chinese: "手" },
        { english: "foot (pl. feet)", chinese: "脚" },
        { english: "catch", chinese: "接住" },
        { english: "with", chinese: "用；具有；和……在一起" }
    ],
    unit12: [
        { english: "back", chinese: "回到原处" }
    ]
};

// 调试用：检查数据加载
console.log("单词库加载完成，共", Object.keys(wordData).length, "个单元");

// 确保wordData已全局可用
if (typeof window !== 'undefined') {
    window.wordData = wordData;
}