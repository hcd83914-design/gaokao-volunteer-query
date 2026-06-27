/* 模拟数据兜底：直接双击打开 index.html 时，浏览器可能禁止读取本地 JSON。 */
const fallbackData = [
  {
    schoolName: "重庆工程学院",
    province: "重庆",
    city: "重庆市巴南区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校以工学为主，注重信息技术、智能制造和应用型人才培养。",
    majorName: "软件工程",
    year: 2025,
    subjectType: "物理类",
    minScore: 468,
    minRank: 72000,
    featureMajors: ["软件工程", "物联网工程", "数字媒体技术"]
  },
  {
    schoolName: "重庆工程学院",
    province: "重庆",
    city: "重庆市巴南区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校以工学为主，注重信息技术、智能制造和应用型人才培养。",
    majorName: "数字媒体技术",
    year: 2024,
    subjectType: "物理类",
    minScore: 455,
    minRank: 76000,
    featureMajors: ["软件工程", "物联网工程", "数字媒体技术"]
  },
  {
    schoolName: "重庆移通学院",
    province: "重庆",
    city: "重庆市合川区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校围绕信息通信、智能工程和现代管理建设应用型专业群。",
    majorName: "通信工程",
    year: 2025,
    subjectType: "物理类",
    minScore: 462,
    minRank: 74500,
    featureMajors: ["通信工程", "电气工程及其自动化", "财务管理"]
  },
  {
    schoolName: "重庆移通学院",
    province: "重庆",
    city: "重庆市合川区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校围绕信息通信、智能工程和现代管理建设应用型专业群。",
    majorName: "财务管理",
    year: 2025,
    subjectType: "历史类",
    minScore: 458,
    minRank: 31000,
    featureMajors: ["通信工程", "电气工程及其自动化", "财务管理"]
  },
  {
    schoolName: "重庆城市科技学院",
    province: "重庆",
    city: "重庆市永川区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校面向城市建设、智能技术和现代服务业培养应用型人才。",
    majorName: "土木工程",
    year: 2025,
    subjectType: "物理类",
    minScore: 452,
    minRank: 79000,
    featureMajors: ["土木工程", "建筑学", "工程造价"]
  },
  {
    schoolName: "重庆城市科技学院",
    province: "重庆",
    city: "重庆市永川区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校面向城市建设、智能技术和现代服务业培养应用型人才。",
    majorName: "工程造价",
    year: 2024,
    subjectType: "历史类",
    minScore: 448,
    minRank: 33500,
    featureMajors: ["土木工程", "建筑学", "工程造价"]
  },
  {
    schoolName: "重庆人文科技学院",
    province: "重庆",
    city: "重庆市合川区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校重视人文教育和师范类、管理类、艺术类专业建设。",
    majorName: "汉语言文学",
    year: 2025,
    subjectType: "历史类",
    minScore: 470,
    minRank: 28500,
    featureMajors: ["汉语言文学", "学前教育", "旅游管理"]
  },
  {
    schoolName: "重庆人文科技学院",
    province: "重庆",
    city: "重庆市合川区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校重视人文教育和师范类、管理类、艺术类专业建设。",
    majorName: "计算机科学与技术",
    year: 2024,
    subjectType: "物理类",
    minScore: 451,
    minRank: 80000,
    featureMajors: ["汉语言文学", "学前教育", "旅游管理"]
  },
  {
    schoolName: "重庆财经学院",
    province: "重庆",
    city: "重庆市巴南区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校以财经商贸类专业为特色，服务区域经济和现代服务业。",
    majorName: "会计学",
    year: 2025,
    subjectType: "历史类",
    minScore: 472,
    minRank: 27800,
    featureMajors: ["会计学", "金融学", "经济统计学"]
  },
  {
    schoolName: "重庆财经学院",
    province: "重庆",
    city: "重庆市巴南区",
    schoolType: "民办",
    schoolLevel: "本科",
    description: "学校以财经商贸类专业为特色，服务区域经济和现代服务业。",
    majorName: "金融学",
    year: 2025,
    subjectType: "物理类",
    minScore: 459,
    minRank: 77000,
    featureMajors: ["会计学", "金融学", "经济统计学"]
  }
];

let scoreData = [];
let currentList = [];

const schoolSearch = document.querySelector("#schoolSearch");
const provinceSelect = document.querySelector("#provinceSelect");
const yearSelect = document.querySelector("#yearSelect");
const subjectSelect = document.querySelector("#subjectSelect");
const scoreInput = document.querySelector("#scoreInput");
const rankInput = document.querySelector("#rankInput");
const queryForm = document.querySelector("#queryForm");
const resetBtn = document.querySelector("#resetBtn");
const schoolCards = document.querySelector("#schoolCards");
const scoreTableBody = document.querySelector("#scoreTableBody");
const recommendResults = document.querySelector("#recommendResults");
const resultCount = document.querySelector("#resultCount");
const tableCount = document.querySelector("#tableCount");

document.addEventListener("DOMContentLoaded", initPage);

async function initPage() {
  scoreData = await loadData();
  currentList = [...scoreData];
  initSelectOptions();
  renderSchoolCards(currentList);
  renderScoreTable(currentList);
  bindEvents();
}

/* 优先读取 data/data.json；本地文件读取失败时使用上方兜底数据。 */
async function loadData() {
  try {
    const response = await fetch("data/data.json");
    if (!response.ok) {
      throw new Error("数据文件读取失败");
    }
    return await response.json();
  } catch (error) {
    console.warn("已使用内置模拟数据：", error.message);
    return fallbackData;
  }
}

function bindEvents() {
  schoolSearch.addEventListener("input", handleSchoolSearch);
  queryForm.addEventListener("submit", handleQuerySubmit);
  resetBtn.addEventListener("click", resetQuery);
}

function initSelectOptions() {
  fillSelect(provinceSelect, uniqueValues(scoreData.map(item => item.province)));
  fillSelect(yearSelect, uniqueValues(scoreData.map(item => item.year)).sort((a, b) => b - a));
}

function fillSelect(selectElement, values) {
  selectElement.innerHTML = "";
  values.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
  });
}

function uniqueValues(values) {
  return [...new Set(values)];
}

function handleSchoolSearch() {
  const keyword = schoolSearch.value.trim();
  currentList = scoreData.filter(item => item.schoolName.includes(keyword));
  renderSchoolCards(currentList);
  renderScoreTable(currentList);
}

/* 学校介绍按学校去重，避免同一学校因多个专业重复展示。 */
function renderSchoolCards(list) {
  const schools = new Map();
  list.forEach(item => {
    if (!schools.has(item.schoolName)) {
      schools.set(item.schoolName, item);
    }
  });

  if (schools.size === 0) {
    schoolCards.className = "empty-state";
    schoolCards.textContent = "没有找到匹配的学校。";
    return;
  }

  schoolCards.className = "school-grid";
  schoolCards.innerHTML = [...schools.values()].map(item => `
    <article class="school-card">
      <h3>${item.schoolName}</h3>
      <p class="info-line"><strong>所在地区：</strong>${item.province} ${item.city}</p>
      <p class="info-line"><strong>学校类型：</strong>${item.schoolLevel} / ${item.schoolType}</p>
      <p>${item.description}</p>
      <div class="tag-list">
        ${item.featureMajors.map(major => `<span class="tag">${major}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderScoreTable(list) {
  tableCount.textContent = `共 ${list.length} 条`;
  scoreTableBody.innerHTML = list.map(item => `
    <tr>
      <td>${item.schoolName}</td>
      <td>${item.majorName}</td>
      <td>${item.province} ${item.city}</td>
      <td>${item.year}</td>
      <td>${item.subjectType}</td>
      <td>${item.minScore}</td>
      <td>${item.minRank}</td>
    </tr>
  `).join("");
}

function handleQuerySubmit(event) {
  event.preventDefault();

  const userScore = Number(scoreInput.value);
  const userRank = Number(rankInput.value);

  if (!userScore && !userRank) {
    showEmptyResult("请至少输入高考分数或位次。");
    return;
  }

  const baseList = scoreData.filter(item =>
    item.province === provinceSelect.value &&
    String(item.year) === String(yearSelect.value) &&
    item.subjectType === subjectSelect.value
  );

  const results = baseList
    .map(item => ({
      ...item,
      recommendType: getRecommendType(item, userScore, userRank)
    }))
    .filter(item => item.recommendType)
    .sort(sortByRecommend);

  renderRecommendResults(results);
}

/* 推荐规则：位次数字越小代表排名越靠前，因此优先按位次差值判断。 */
function getRecommendType(item, userScore, userRank) {
  if (userRank) {
    const rankGap = item.minRank - userRank;
    if (rankGap >= 8000) return "保一保";
    if (rankGap >= -3000) return "稳一稳";
    if (rankGap >= -10000) return "冲一冲";
    return "";
  }

  const scoreGap = userScore - item.minScore;
  if (scoreGap >= 25) return "保一保";
  if (scoreGap >= -5) return "稳一稳";
  if (scoreGap >= -20) return "冲一冲";
  return "";
}

function sortByRecommend(a, b) {
  const order = { "稳一稳": 1, "保一保": 2, "冲一冲": 3 };
  return order[a.recommendType] - order[b.recommendType] || b.minScore - a.minScore;
}

function renderRecommendResults(results) {
  if (results.length === 0) {
    showEmptyResult("没有找到符合当前条件的推荐结果。");
    return;
  }

  recommendResults.className = "result-grid";
  resultCount.textContent = `共 ${results.length} 条`;
  recommendResults.innerHTML = results.map(item => `
    <article class="result-card">
      <h4>${item.schoolName}</h4>
      <p><strong>专业名称：</strong>${item.majorName}</p>
      <p><strong>年份：</strong>${item.year}</p>
      <p><strong>最低分：</strong>${item.minScore}</p>
      <p><strong>最低位次：</strong>${item.minRank}</p>
      <span class="recommend-type ${getTypeClass(item.recommendType)}">${item.recommendType}</span>
    </article>
  `).join("");
}

function getTypeClass(type) {
  if (type === "保一保") return "type-safe";
  if (type === "稳一稳") return "type-stable";
  return "type-rush";
}

function showEmptyResult(message) {
  resultCount.textContent = "0 条";
  recommendResults.className = "result-grid empty-state";
  recommendResults.textContent = message;
}

function resetQuery() {
  scoreInput.value = "";
  rankInput.value = "";
  resultCount.textContent = "尚未查询";
  recommendResults.className = "result-grid empty-state";
  recommendResults.textContent = "请先选择条件并输入分数或位次。";
}
