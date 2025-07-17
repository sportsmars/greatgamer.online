  // 整册累计分
let cumulativeScore = 0; 
// 解析URL参数
const GRADE = new URLSearchParams(location.search).get('grade') || '3a';

// 页面标题映射
const TITLE_MAP = {
  // 小学
  '3a': '三年级上册', '3b': '三年级下册',
  '4a': '四年级上册', '4b': '四年级下册',
  '5a': '五年级上册', '5b': '五年级下册',
  '6a': '六年级上册', '6b': '六年级下册',
  // 初中
  '7a': '七年级上册', '7b': '七年级下册',
  '8a': '八年级上册', '8b': '八年级下册',
  '9a': '九年级上册', '9b': '九年级下册',
  // 高中（按新命名）
  's1a': '必修第一册',
  's2a': '必修第二册',
  's3a': '必修第三册',
  's1b': '选修第一册',
  's2b': '选修第二册',
  's3b': '选修第三册',
  's4b': '选修第四册'
};

// 初始化标题
document.getElementById('game-title').textContent =
  `单词连连看（${TITLE_MAP[GRADE] || GRADE}）`;

// DOM元素
const unitSelect = document.getElementById('unit-select');
const topicSelect = document.getElementById('topic-select');
const startBtn = document.getElementById('start-btn');
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const remainingDisplay = document.getElementById('remaining');
const progressInfo = document.getElementById('progress-info');
const celebration = document.getElementById('celebration');
const celebrationScore = document.getElementById('celebration-score');
const continueBtn = document.getElementById('continue-btn');

// 音效
const sounds = {
  click: document.getElementById('click-sound'),
  success: document.getElementById('success-sound'),
  fail: document.getElementById('fail-sound'),
  celebration: document.getElementById('celebration-sound'),
  complete: document.getElementById('complete-sound')
};

// 游戏状态
let gameState = {
  currentUnit: 'all',
  currentTopic: 'all',
  selectedCards: [],
  matchedPairs: 0,
  score: 0,
  totalPairs: 0,
  currentBatch: 0,
  remainingWords: [],
  usedWords: []
};

// 工具函数
const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const play = s => { sounds[s].currentTime = 0; sounds[s].play(); };

// 判断单词库结构
function getWords() {
  const data = window.wordData;
  if (!data) return [];

  // 高中结构：{ unit1: {topic1:[...], topic2:[...]}, ... }
  const isHighSchool = Object.values(data)[0] && typeof Object.values(data)[0] === 'object' && !Array.isArray(Object.values(data)[0]);

  let words = [];
  if (gameState.currentUnit === 'all') {
    if (isHighSchool) {
      Object.values(data).forEach(u => Object.values(u).forEach(t => words = words.concat(t)));
    } else {
      Object.values(data).forEach(arr => words = words.concat(arr));
    }
  } else {
    const unitData = data[gameState.currentUnit];
    if (!unitData) return [];
    if (isHighSchool) {
      if (gameState.currentTopic === 'all') {
        Object.values(unitData).forEach(t => words = words.concat(t));
      } else {
        words = unitData[gameState.currentTopic] || [];
      }
    } else {
      words = unitData;
    }
  }
  return words;
}

// 初始化下拉菜单
function initSelects() {
  const data = window.wordData;
  if (!data) return;

  const isHighSchool = Object.values(data)[0] && typeof Object.values(data)[0] === 'object' && !Array.isArray(Object.values(data)[0]);

  // 单元
  const units = Object.keys(data);
  units.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u;
    opt.textContent = isHighSchool ? u.toUpperCase() : u.replace('unit', 'Unit ');
    unitSelect.appendChild(opt);
  });

  // 主题（仅高中）
  if (isHighSchool) {
    unitSelect.addEventListener('change', () => {
      const unit = unitSelect.value;
      topicSelect.innerHTML = '<option value="all">全部主题</option>';
      if (unit === 'all') {
        topicSelect.disabled = true;
      } else {
        const topics = Object.keys(data[unit]);
        topics.forEach(t => {
          const opt = document.createElement('option');
          opt.value = t;
          opt.textContent = t.charAt(0).toUpperCase() + t.slice(1);
          topicSelect.appendChild(opt);
        });
        topicSelect.disabled = false;
      }
    });
    topicSelect.disabled = true;
  } else {
    topicSelect.style.display = 'none';
  }
  startBtn.disabled = false;
  scoreDisplay.textContent = cumulativeScore;
}

// 开始游戏
function initGame() {
  gameState.currentUnit = unitSelect.value;
  gameState.currentTopic = topicSelect.value;
  gameState.selectedCards = [];
  gameState.matchedPairs = 0;
  gameState.currentBatch = 0;
  gameState.usedWords = [];
  gameState.remainingWords = shuffle(getWords());
  if (!gameState.remainingWords.length) {
    alert('没有找到单词，请检查单词库');
    return;
  }
  startNextBatch();
}

// 下一轮
function startNextBatch() {
  gameState.selectedCards = [];
  gameState.matchedPairs = 0;
  const batchSize = Math.min(6, gameState.remainingWords.length);
  const batch = gameState.remainingWords.splice(0, batchSize);
  gameState.totalPairs = batch.length;
  gameState.currentBatch++;
  gameState.usedWords.push(...batch);
  createCards(batch);
  updateProgress();
}

// 创建卡片
function createCards(words) {
  gameBoard.innerHTML = '';
  const cards = [];
  words.forEach(w => {
    cards.push({ type: 'en', text: w.english, pair: w.chinese });
    cards.push({ type: 'zh', text: w.chinese, pair: w.english });
  });
  shuffle(cards).forEach((c, i) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.text = c.text;
    div.dataset.pair = c.pair;
    div.textContent = c.text;
    div.addEventListener('click', handleCardClick);
    gameBoard.appendChild(div);
  });
}

// 点击卡片
function handleCardClick(e) {
  const card = e.currentTarget;
  if (card.classList.contains('matched') || card.classList.contains('selected')) return;
  if (gameState.selectedCards.length >= 2) return;
  play('click');
  card.classList.add('selected');
  gameState.selectedCards.push(card);
  if (gameState.selectedCards.length === 2) {
    const [a, b] = gameState.selectedCards;
    if (a.dataset.pair === b.dataset.text && b.dataset.pair === a.dataset.text) {
      setTimeout(() => {
        play('success');
        a.classList.add('matched');
        b.classList.add('matched');
        gameState.selectedCards = [];
        gameState.matchedPairs++;
        cumulativeScore += 10;
        gameState.score = cumulativeScore;
        updateProgress();
        checkRoundEnd();
      }, 500);
    } else {
      setTimeout(() => {
        play('fail');
        a.classList.remove('selected');
        b.classList.remove('selected');
        gameState.selectedCards = [];
      }, 1000);
    }
  }
}

// 检查本轮结束
function checkRoundEnd() {
  if (gameState.matchedPairs === gameState.totalPairs) {
    setTimeout(() => {
      celebrationScore.textContent = gameState.score;
      if (gameState.remainingWords.length) {
        celebration.querySelector('h2').textContent = '恭喜完成本轮!';
        play('celebration');
      } else {
        celebration.querySelector('h2').textContent = '恭喜完成游戏!';
        play('complete');
      }
      celebration.classList.add('show');
    }, 1000);
  }
}

// 更新进度
function updateProgress() {
  const total = getWords().length;
  const done = gameState.usedWords.length;
  const batch = gameState.currentBatch;
  progressInfo.textContent = `进度: ${done}/${total} (第 ${batch} 轮)`;
  scoreDisplay.textContent = gameState.score;
  remainingDisplay.textContent = gameState.totalPairs - gameState.matchedPairs;
}

// 初始化
// 立即初始化，无需等待 DOMContentLoaded
(function initWhenReady() {
  if (window.wordData) {
    initSelects();
    startBtn.addEventListener('click', initGame);
    continueBtn.addEventListener('click', () => {
      celebration.classList.remove('show');
      startNextBatch();
    });
    // 隐藏加载、显示游戏
    document.getElementById('loading-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
  } else {
    setTimeout(initWhenReady, 50);
  }
})();