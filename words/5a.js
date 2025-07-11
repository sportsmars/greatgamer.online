// grade5上册.js - 五年级上册单词库
const wordData = {
    lesson1: [
        { english: "playground /ˈpleɪɡraʊnd/", chinese: "操场" },
        { english: "sport /spɔːt/", chinese: "运动" },
        { english: "love /lʌv/", chinese: "爱" },
        { english: "grandfather /ˈɡrænfɑːðə/", chinese: "爷爷，外公（口 grandpa）" },
        { english: "grandmother /ˈɡræn mʌðə/", chinese: "奶奶，外婆（口 grandma）" },
        { english: "next /nekst/", chinese: "下一个" },
        { english: "week /wiːk/", chinese: "星期" },
        { english: "classroom /ˈklɑːsruːm/", chinese: "教室" },
        { english: "centre /ˈsentə/", chinese: "中心" },
        { english: "ping - pong /ˈpɪŋpɒŋ/", chinese: "乒乓球" },
        { english: "tennis /ˈtenɪs/", chinese: "网球" },
        { english: "play football", chinese: "踢足球" },
        { english: "play ping - pong", chinese: "打乒乓球" },
        { english: "have a match", chinese: "比赛" }
    ],
    lesson2: [
        { english: "may /meɪ/", chinese: "可以" },
        { english: "park /pɑːk/", chinese: "公园；停车" },
        { english: "grass /ɡrɑːs/", chinese: "草" },
        { english: "thing /θɪŋ/", chinese: "东西，事情" },
        { english: "seat /siːt/", chinese: "座位" },
        { english: "next time", chinese: "下一次" },
        { english: "I see.", chinese: "我知道了。" },
        { english: "That's all right.", chinese: "没关系。" }
    ],
    lesson3: [
        { english: "TV /ˈtiːˈviː/", chinese: "电视机" },
        { english: "every /ˈevri/", chinese: "每一个" },
        { english: "tall /tɔːl/", chinese: "高的" },
        { english: "ear /ɪə/", chinese: "耳朵" },
        { english: "eye /aɪ/", chinese: "眼睛" },
        { english: "body /ˈbɒdi/", chinese: "身体" },
        { english: "mouth /maʊθ/", chinese: "嘴" },
        { english: "hand /hænd/", chinese: "手" },
        { english: "write /raɪt/", chinese: "写" },
        { english: "email /ˈiːmeɪl/", chinese: "电子邮件" },
        { english: "keyboard /ˈkiːbɔːd/", chinese: "键盘" },
        { english: "mouse /maʊs/", chinese: "鼠，鼠标" },
        { english: "every day", chinese: "每天" }
    ],
    lesson4: [
        { english: "card /kɑːd/", chinese: "卡片" },
        { english: "sometimes /ˈsʌmtaɪmz/", chinese: "有时" },
        { english: "often /ˈɒfn/", chinese: "经常" },
        { english: "well /wel/", chinese: "好；健康的" },
        { english: "skate /skeɪt/", chinese: "滑冰" },
        { english: "play basketball", chinese: "打篮球" },
        { english: "go fishing", chinese: "去钓鱼" }
    ],
    lesson5: [
        { english: "listen /ˈlɪsn/", chinese: "听" },
        { english: "music /ˈmjuːzɪk/", chinese: "音乐" },
        { english: "film /fɪlm/", chinese: "电影" },
        { english: "always /ˈɔːlweɪz/", chinese: "总是" },
        { english: "only /ˈəʊnli/", chinese: "仅仅，只" },
        { english: "everyone /ˈevriwʌn/", chinese: "每个人" },
        { english: "enjoy /ɪnˈdʒɔɪ/", chinese: "喜欢，享受" },
        { english: "listen to music", chinese: "听音乐" },
        { english: "see films", chinese: "看电影" },
        { english: "watch TV", chinese: "看电视" }
    ],
    lesson6: [
        { english: "take /teɪk/", chinese: "拿" },
        { english: "take a look", chinese: "看一看" }
    ],
    lesson7: [
        { english: "shop /ʃɒp/", chinese: "商店" },
        { english: "buy /baɪ/", chinese: "买" },
        { english: "drink /drɪŋk/", chinese: "喝；饮料" },
        { english: "tea /tiː/", chinese: "茶" },
        { english: "juice /dʒuːs/", chinese: "果汁" },
        { english: "feel /fiːl/", chinese: "感觉" },
        { english: "much /mʌtʃ/", chinese: "多，非常" },
        { english: "something /ˈsʌmθɪŋ/", chinese: "某事（物）" },
        { english: "would /wʊd/", chinese: "将要" },
        { english: "bottle /ˈbɒtl/", chinese: "瓶子" },
        { english: "carrot /ˈkærət/", chinese: "胡萝卜" },
        { english: "would like", chinese: "想要" },
        { english: "a cup of", chinese: "一杯" },
        { english: "a bottle of", chinese: "一瓶" }
    ],
    lesson8: [
        { english: "vegetable /ˈvedʒtəbl/", chinese: "蔬菜" },
        { english: "potato /pəˈteɪtəʊ/", chinese: "土豆" },
        { english: "tomato /təˈmɑːtəʊ/", chinese: "西红柿" },
        { english: "cry /kraɪ/", chinese: "哭，喊" },
        { english: "wrong /rɒŋ/", chinese: "有毛病的，错误的" },
        { english: "worry /ˈwʌri/", chinese: "担忧" },
        { english: "could /kʊd/", chinese: "可以" },
        { english: "money /ˈmʌni/", chinese: "钱" },
        { english: "ticket /ˈtɪkɪt/", chinese: "票" },
        { english: "What's wrong?", chinese: "怎么了？" }
    ],
    lesson9: [
        { english: "chicken /ˈtʃɪkɪn/", chinese: "鸡肉，鸡" },
        { english: "half /hɑːf/", chinese: "一半" },
        { english: "twenty /ˈtwenti/", chinese: "二十" },
        { english: "fruit /fruːt/", chinese: "水果" },
        { english: "know /nəʊ/", chinese: "知道" },
        { english: "clever /ˈklevə/", chinese: "聪明的" },
        { english: "anything /ˈeniθɪŋ/", chinese: "任何事物" },
        { english: "else /els/", chinese: "其他的" },
        { english: "kilo /ˈkiːləʊ/", chinese: "千克" },
        { english: "show /ʃəʊ/", chinese: "展示" },
        { english: "how much", chinese: "多少（钱）" },
        { english: "What can I do for you?", chinese: "我能帮你做什么吗？" }
    ],
    lesson10: [
        { english: "child /tʃaɪld/", chinese: "儿童（复 children）" },
        { english: "small /smɔːl/", chinese: "小的" },
        { english: "food /fuːd/", chinese: "食物" },
        { english: "back /bæk/", chinese: "回原处；背" },
        { english: "its /ɪts/", chinese: "它的" },
        { english: "forest /ˈfɒrɪst/", chinese: "森林" },
        { english: "village /ˈvɪlɪdʒ/", chinese: "村庄，乡村" },
        { english: "other /ˈʌðə/", chinese: "别的，其他的" },
        { english: "in front of", chinese: "在……前面" },
        { english: "say goodbye to", chinese: "向……道别" }
    ],
    lesson11: [
        { english: "tell /tel/", chinese: "讲述，告诉" },
        { english: "story /ˈstɔːri/", chinese: "故事" },
        { english: "hear /hɪə/", chinese: "听见" },
        { english: "fridge /frɪdʒ/", chinese: "电冰箱" },
        { english: "either /ˈaɪðə/", chinese: "也不" },
        { english: "hometown /ˈhəʊmtaʊn/", chinese: "家乡，故乡" },
        { english: "island /ˈaɪlənd/", chinese: "岛" },
        { english: "sea /siː/", chinese: "海" },
        { english: "piano /piˈænəʊ/", chinese: "钢琴" },
        { english: "sound /saʊnd/", chinese: "声音" },
        { english: "everywhere /ˈevriweə/", chinese: "到处" },
        { english: "go shopping", chinese: "购物" },
        { english: "lots of", chinese: "许多，大量" }
    ],
    lesson12: [
        { english: "ice cream /ˌaɪs ˈkriːm/", chinese: "冰淇淋" },
        { english: "police /pəˈliːs/", chinese: "警察" },
        { english: "stay /steɪ/", chinese: "停留" },
        { english: "thief /θiːf/", chinese: "贼" },
        { english: "knock /nɒk/", chinese: "敲" },
        { english: "by the way", chinese: "顺便问一下" }
    ]
};

// 调试用：检查数据加载
console.log("单词库加载完成，共", Object.keys(wordData).length, "个课时");

// 确保wordData已全局可用
if (typeof window !== 'undefined') {
    window.wordData = wordData;
}