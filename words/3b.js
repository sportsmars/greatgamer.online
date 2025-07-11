// grade3下册.js - 三年级下册单词库
const wordData = {
    unit1: [
        { english: "monkey", chinese: "猴子" },
        { english: "short", chinese: "矮的，短的" },
        { english: "bear", chinese: "熊" },
        { english: "big", chinese: "大的" },
        { english: "small", chinese: "小的" },
        { english: "giraffe", chinese: "长颈鹿" },
        { english: "tall", chinese: "高的" },
        { english: "tiger", chinese: "老虎" },
        { english: "amazing", chinese: "令人惊叹的" },
        { english: "kite", chinese: "风筝" },
        { english: "let", chinese: "让" },
        { english: "help", chinese: "帮助；救命" },
        { english: "great", chinese: "太好了；伟大的" },
        { english: "now", chinese: "现在" },
        { english: "play", chinese: "玩；戏剧" },
        { english: "cake", chinese: "蛋糕" },
        { english: "gate", chinese: "大门" }
    ],
    unit2: [
        { english: "robot", chinese: "机器人" },
        { english: "on", chinese: "在……上" },
        { english: "desk", chinese: "书桌" },
        { english: "chair", chinese: "椅子" },
        { english: "in", chinese: "在……里" },
        { english: "under", chinese: "在……下面" },
        { english: "bike", chinese: "自行车" },
        { english: "ball", chinese: "球" },
        { english: "bed", chinese: "床" },
        { english: "You're welcome.", chinese: "不客气" },
        { english: "goodbye (bye)", chinese: "再见" }
    ],
    unit3: [
        { english: "book", chinese: "书" },
        { english: "bag", chinese: "包" },
        { english: "watch", chinese: "手表；观看" },
        { english: "cap", chinese: "帽子" },
        { english: "card", chinese: "卡片" },
        { english: "map", chinese: "地图" },
        { english: "love", chinese: "爱" },
        { english: "behind", chinese: "在……后面" },
        { english: "tree", chinese: "树，树木" },
        { english: "to", chinese: "给，向；到某处" }
    ],
    unit4: [
        { english: "toy", chinese: "玩具" },
        { english: "car", chinese: "小汽车" },
        { english: "doll", chinese: "玩偶，洋娃娃" },
        { english: "bus", chinese: "公共汽车" },
        { english: "have (has)", chinese: "有，拥有" },
        { english: "together", chinese: "一起" },
        { english: "rose", chinese: "玫瑰" },
        { english: "bone", chinese: "骨头" },
        { english: "home", chinese: "家" }
    ],
    unit5: [
        { english: "shirt", chinese: "衬衫" },
        { english: "skirt", chinese: "半身裙" },
        { english: "T - shirt", chinese: "T恤衫" },
        { english: "dress", chinese: "连衣裙；给……穿衣服" },
        { english: "hat", chinese: "帽子" },
        { english: "long", chinese: "长的" },
        { english: "pink", chinese: "粉色的" },
        { english: "pretty", chinese: "漂亮的" },
        { english: "her", chinese: "她的" },
        { english: "cube", chinese: "立方体" },
        { english: "tube", chinese: "管子" },
        { english: "mule", chinese: "骡子" }
    ],
    unit6: [
        { english: "tail", chinese: "尾巴" },
        { english: "neck", chinese: "脖子" },
        { english: "tongue", chinese: "舌头" },
        { english: "panda", chinese: "熊猫" },
        { english: "its", chinese: "它的" },
        { english: "body", chinese: "身体" },
        { english: "so", chinese: "如此；所以" },
        { english: "right", chinese: "正确的；右边" },
        { english: "guess", chinese: "猜测" },
        { english: "but", chinese: "但是" },
        { english: "an", chinese: "一(个)，一" },
        { english: "wall", chinese: "墙" },
        { english: "rope", chinese: "粗绳" },
        { english: "elephant", chinese: "大象" },
        { english: "park", chinese: "公园；停(车)" },
        { english: "yard", chinese: "院子" }
    ],
    unit7: [
        { english: "dining room", chinese: "餐厅" },
        { english: "bathroom", chinese: "盥洗室" },
        { english: "study", chinese: "书房；学习" },
        { english: "bedroom", chinese: "卧室" },
        { english: "kitchen", chinese: "厨房" },
        { english: "living room", chinese: "客厅" },
        { english: "they", chinese: "他(她，它)们" },
        { english: "bat", chinese: "球棒" },
        { english: "ready", chinese: "准备好的" },
        { english: "go", chinese: "去，走，出发" },
        { english: "ill", chinese: "有病的，不舒服的" }
    ],
    unit8: [
        { english: "cabbage", chinese: "卷心菜，洋白菜" },
        { english: "carrot", chinese: "胡萝卜" },
        { english: "potato", chinese: "土豆，马铃薯" },
        { english: "tomato", chinese: "西红柿" },
        { english: "onion", chinese: "洋葱，葱头" },
        { english: "mushroom", chinese: "蘑菇" },
        { english: "those", chinese: "那些" },
        { english: "these", chinese: "这些" },
        { english: "fun", chinese: "有趣的；乐趣" },
        { english: "plant", chinese: "种植；植物" },
        { english: "a lot of", chinese: "大量的，许多的" },
        { english: "corn", chinese: "玉米" }
    ],
    unit9: [
        { english: "doctor", chinese: "医生" },
        { english: "cook", chinese: "厨师；烹饪" },
        { english: "driver", chinese: "司机" },
        { english: "farmer", chinese: "农民" },
        { english: "worker", chinese: "工人" },
        { english: "fireman", chinese: "消防员" },
        { english: "teacher", chinese: "教师" },
        { english: "nurse", chinese: "护士" },
        { english: "uncle", chinese: "叔叔，伯伯，舅舅等" },
        { english: "aunt", chinese: "婶婶，阿姨，舅妈等" },
        { english: "job", chinese: "工作" },
        { english: "man (pl. men)", chinese: "男人" },
        { english: "his", chinese: "他的" },
        { english: "woman (pl. women)", chinese: "女人" },
        { english: "or", chinese: "或者" },
        { english: "fire", chinese: "火" },
        { english: "finger", chinese: "手指" }
    ],
    unit10: [
        { english: "school", chinese: "学校" },
        { english: "hospital", chinese: "医院" },
        { english: "farm", chinese: "农场" },
        { english: "factory", chinese: "工厂" },
        { english: "fire station", chinese: "消防站" },
        { english: "restaurant", chinese: "饭店" },
        { english: "work", chinese: "工作" },
        { english: "at", chinese: "在，朝，向" },
        { english: "excuse me", chinese: "打扰了" },
        { english: "milkman", chinese: "送奶工" },
        { english: "purple", chinese: "紫色；紫色的" },
        { english: "turtle", chinese: "龟" },
        { english: "purse", chinese: "钱包" }
    ],
    unit11: [
        { english: "be made of", chinese: "由……制成" },
        { english: "cotton", chinese: "棉" },
        { english: "wool", chinese: "毛线" },
        { english: "shoe", chinese: "鞋子" },
        { english: "leather", chinese: "皮革" },
        { english: "silk", chinese: "丝绸" }
    ]
};

// 调试用：检查数据加载
console.log("单词库加载完成，共", Object.keys(wordData).length, "个单元");

// 确保wordData已全局可用
if (typeof window !== 'undefined') {
    window.wordData = wordData;
}