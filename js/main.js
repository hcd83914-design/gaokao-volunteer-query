/* 兜底模拟数据：直接打开 index.html 且浏览器禁止读取本地 JSON 时使用。 */
const fallbackData = [
  { id: 1, schoolName: "重庆工程学院", schoolEnglishName: "Chongqing Institute of Engineering", province: "海南", city: "重庆市", year: 2025, planYear: 2026, enrollCategory: "综合改革", majorName: "计算机类（软件）", minScore: 511, minRank: 34386, subjectRequirement: "物理、化学", planCount: 3, schoolLocation: "重庆市", schoolLevel: "本科", schoolDescription: "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。", featureMajors: ["计算机类", "电子信息类", "自动化类", "智能制造工程", "网络与新媒体"] },
  { id: 2, schoolName: "重庆工程学院", schoolEnglishName: "Chongqing Institute of Engineering", province: "海南", city: "重庆市", year: 2025, planYear: 2026, enrollCategory: "综合改革", majorName: "计算机类（大数据与智能科学）", minScore: 507, minRank: 35551, subjectRequirement: "物理、化学", planCount: 2, schoolLocation: "重庆市", schoolLevel: "本科", schoolDescription: "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。", featureMajors: ["计算机类", "电子信息类", "自动化类", "智能制造工程", "网络与新媒体"] },
  { id: 3, schoolName: "重庆工程学院", schoolEnglishName: "Chongqing Institute of Engineering", province: "海南", city: "重庆市", year: 2025, planYear: 2026, enrollCategory: "综合改革", majorName: "电子信息类", minScore: 507, minRank: 35551, subjectRequirement: "物理、化学", planCount: 5, schoolLocation: "重庆市", schoolLevel: "本科", schoolDescription: "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。", featureMajors: ["计算机类", "电子信息类", "自动化类", "智能制造工程", "网络与新媒体"] },
  { id: 4, schoolName: "重庆工程学院", schoolEnglishName: "Chongqing Institute of Engineering", province: "海南", city: "重庆市", year: 2025, planYear: 2026, enrollCategory: "综合改革", majorName: "自动化类", minScore: 505, minRank: 36110, subjectRequirement: "物理、化学", planCount: 5, schoolLocation: "重庆市", schoolLevel: "本科", schoolDescription: "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。", featureMajors: ["计算机类", "电子信息类", "自动化类", "智能制造工程", "网络与新媒体"] },
  { id: 5, schoolName: "重庆工程学院", schoolEnglishName: "Chongqing Institute of Engineering", province: "海南", city: "重庆市", year: 2025, planYear: 2026, enrollCategory: "综合改革", majorName: "智能制造工程", minScore: 511, minRank: 34386, subjectRequirement: "物理、化学", planCount: 2, schoolLocation: "重庆市", schoolLevel: "本科", schoolDescription: "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。", featureMajors: ["计算机类", "电子信息类", "自动化类", "智能制造工程", "网络与新媒体"] },
  { id: 6, schoolName: "重庆工程学院", schoolEnglishName: "Chongqing Institute of Engineering", province: "海南", city: "重庆市", year: 2025, planYear: 2026, enrollCategory: "综合改革", majorName: "电气工程及其自动化", minScore: null, minRank: null, subjectRequirement: "物理、化学", planCount: 2, schoolLocation: "重庆市", schoolLevel: "本科", schoolDescription: "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。", featureMajors: ["计算机类", "电子信息类", "自动化类", "智能制造工程", "网络与新媒体"] },
  { id: 7, schoolName: "重庆工程学院", schoolEnglishName: "Chongqing Institute of Engineering", province: "海南", city: "重庆市", year: 2025, planYear: 2026, enrollCategory: "综合改革", majorName: "数字经济", minScore: null, minRank: null, subjectRequirement: "物理", planCount: 4, schoolLocation: "重庆市", schoolLevel: "本科", schoolDescription: "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。", featureMajors: ["计算机类", "电子信息类", "自动化类", "智能制造工程", "网络与新媒体"] },
  { id: 8, schoolName: "重庆工程学院", schoolEnglishName: "Chongqing Institute of Engineering", province: "海南", city: "重庆市", year: 2025, planYear: 2026, enrollCategory: "综合改革", majorName: "网络与新媒体", minScore: 549, minRank: 23760, subjectRequirement: "不限", planCount: 2, schoolLocation: "重庆市", schoolLevel: "本科", schoolDescription: "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。", featureMajors: ["计算机类", "电子信息类", "自动化类", "智能制造工程", "网络与新媒体"] },
  { id: 9, schoolName: "重庆工程学院", schoolEnglishName: "Chongqing Institute of Engineering", province: "海南", city: "重庆市", year: 2025, planYear: 2026, enrollCategory: "综合改革", majorName: "工商管理类", minScore: 549, minRank: 23760, subjectRequirement: "不限", planCount: 2, schoolLocation: "重庆市", schoolLevel: "本科", schoolDescription: "重庆工程学院是一所以工学为主，计算机、电子信息、智能制造、管理等多学科协调发展的应用型本科高校。", featureMajors: ["计算机类", "电子信息类", "自动化类", "智能制造工程", "网络与新媒体"] }
];

let allData = [];
let filteredData = [];

const dom = {};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  cacheDom();
  allData = await loadData();
  filteredData = [...allData];
  initSelects();
  bindEvents();
  renderStats();
  renderPlanTable(filteredData);
  renderScoreTable(filteredData);
}

function cacheDom() {
  [
    "provinceSelect", "yearSelect", "planYearSelect", "categorySelect", "scoreInput", "rankInput",
    "subjectSelect", "majorKeyword", "searchBtn", "recommendBtn", "chanceBtn", "planTableBody",
    "scoreProvince", "scoreYear", "scoreCategory", "scoreMajor", "minScoreFilter", "maxScoreFilter",
    "minRankFilter", "maxRankFilter", "scoreSearchBtn", "scoreResetBtn", "scoreTableBody",
    "recommendResults", "chanceProvince", "chanceYear", "chancePlanYear", "chanceCategory",
    "chanceScore", "chanceRank", "chanceSubject", "chanceMajor", "chanceSubmitBtn", "chanceResults",
    "provinceCount", "majorCount", "scoreLineCount", "planTotal"
  ].forEach(id => {
    dom[id] = document.getElementById(id);
  });
}

/* 优先读取 data/data.json；file:// 读取失败时使用 fallbackData。 */
async function loadData() {
  try {
    const response = await fetch("data/data.json");
    if (!response.ok) throw new Error("data.json 读取失败");
    return await response.json();
  } catch (error) {
    console.warn("已使用内置模拟数据：", error.message);
    return fallbackData;
  }
}

function bindEvents() {
  dom.searchBtn.addEventListener("click", handleMainSearch);
  dom.recommendBtn.addEventListener("click", handleRecommend);
  dom.chanceBtn.addEventListener("click", () => {
    copyMainInputsToChance();
    handleChance();
    document.getElementById("chance").scrollIntoView({ behavior: "smooth" });
  });
  dom.scoreSearchBtn.addEventListener("click", handleScoreSearch);
  dom.scoreResetBtn.addEventListener("click", resetScoreFilters);
  dom.chanceSubmitBtn.addEventListener("click", handleChance);
}

function initSelects() {
  const provinces = unique(allData.map(item => item.province));
  const years = unique(allData.map(item => item.year)).sort((a, b) => b - a);
  const planYears = unique(allData.map(item => item.planYear)).sort((a, b) => b - a);
  const categories = unique(allData.map(item => item.enrollCategory));
  const subjects = unique(allData.map(item => item.subjectRequirement));

  fillSelect(dom.provinceSelect, provinces);
  fillSelect(dom.yearSelect, years);
  fillSelect(dom.planYearSelect, planYears);
  fillSelect(dom.categorySelect, categories);
  fillSelect(dom.subjectSelect, subjects, "全部");

  fillSelect(dom.scoreProvince, provinces, "全部");
  fillSelect(dom.scoreYear, years, "全部");
  fillSelect(dom.scoreCategory, categories, "全部");

  fillSelect(dom.chanceProvince, provinces);
  fillSelect(dom.chanceYear, years);
  fillSelect(dom.chancePlanYear, planYears);
  fillSelect(dom.chanceCategory, categories);
  fillSelect(dom.chanceSubject, subjects, "全部");
}

function fillSelect(select, values, firstText) {
  select.innerHTML = "";
  if (firstText) {
    select.appendChild(new Option(firstText, ""));
  }
  values.forEach(value => {
    select.appendChild(new Option(value, value));
  });
}

function unique(values) {
  return [...new Set(values)];
}

function renderStats() {
  dom.provinceCount.textContent = unique(allData.map(item => item.province)).length;
  dom.majorCount.textContent = unique(allData.map(item => item.majorName)).length;
  dom.scoreLineCount.textContent = allData.filter(item => item.minScore !== null && item.minRank !== null).length;
  dom.planTotal.textContent = allData.reduce((sum, item) => sum + Number(item.planCount || 0), 0);
}

function handleMainSearch() {
  filteredData = getMainFilteredData();
  renderPlanTable(filteredData);
  renderScoreTable(filteredData);
  document.getElementById("plan").scrollIntoView({ behavior: "smooth" });
}

function getMainFilteredData() {
  return allData.filter(item => {
    return matches(item.province, dom.provinceSelect.value) &&
      matches(String(item.year), dom.yearSelect.value) &&
      matches(String(item.planYear), dom.planYearSelect.value) &&
      matches(item.enrollCategory, dom.categorySelect.value) &&
      matches(item.subjectRequirement, dom.subjectSelect.value) &&
      includesText(item.majorName, dom.majorKeyword.value);
  });
}

function handleScoreSearch() {
  const list = allData.filter(item => {
    return matches(item.province, dom.scoreProvince.value) &&
      matches(String(item.year), dom.scoreYear.value) &&
      matches(item.enrollCategory, dom.scoreCategory.value) &&
      includesText(item.majorName, dom.scoreMajor.value) &&
      inNumberRange(item.minScore, dom.minScoreFilter.value, dom.maxScoreFilter.value) &&
      inNumberRange(item.minRank, dom.minRankFilter.value, dom.maxRankFilter.value);
  });
  renderScoreTable(list);
}

function resetScoreFilters() {
  dom.scoreProvince.value = "";
  dom.scoreYear.value = "";
  dom.scoreCategory.value = "";
  dom.scoreMajor.value = "";
  dom.minScoreFilter.value = "";
  dom.maxScoreFilter.value = "";
  dom.minRankFilter.value = "";
  dom.maxRankFilter.value = "";
  renderScoreTable(allData);
}

function matches(value, condition) {
  return !condition || String(value) === String(condition);
}

function includesText(value, keyword) {
  return !keyword.trim() || value.includes(keyword.trim());
}

function inNumberRange(value, minValue, maxValue) {
  if (value === null || value === undefined) return !minValue && !maxValue;
  const min = minValue === "" ? -Infinity : Number(minValue);
  const max = maxValue === "" ? Infinity : Number(maxValue);
  return Number(value) >= min && Number(value) <= max;
}

function renderPlanTable(list) {
  if (!list.length) {
    dom.planTableBody.innerHTML = emptyRow(7);
    return;
  }

  dom.planTableBody.innerHTML = list.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.enrollCategory}</td>
      <td>${item.majorName}</td>
      <td>${displayValue(item.minScore)}</td>
      <td>${displayValue(item.minRank)}</td>
      <td>${item.subjectRequirement}</td>
      <td>${item.planCount}</td>
    </tr>
  `).join("");
}

function renderScoreTable(list) {
  if (!list.length) {
    dom.scoreTableBody.innerHTML = emptyRow(9);
    return;
  }

  dom.scoreTableBody.innerHTML = list.map(item => `
    <tr>
      <td>${item.schoolName}</td>
      <td>${item.province}</td>
      <td>${item.year}</td>
      <td>${item.enrollCategory}</td>
      <td>${item.majorName}</td>
      <td>${displayValue(item.minScore)}</td>
      <td>${displayValue(item.minRank)}</td>
      <td>${item.subjectRequirement}</td>
      <td>${item.planCount}</td>
    </tr>
  `).join("");
}

function emptyRow(colspan) {
  return `<tr class="empty-row"><td colspan="${colspan}">暂无匹配数据</td></tr>`;
}

function displayValue(value) {
  return value === null || value === undefined ? "—" : value;
}

function handleRecommend() {
  const userScore = Number(dom.scoreInput.value);
  const userRank = Number(dom.rankInput.value);
  if (!userScore && !userRank) {
    dom.recommendResults.className = "empty-box";
    dom.recommendResults.textContent = "请先输入高考分数或全省位次。";
    document.getElementById("recommend").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const results = getMainFilteredData()
    .filter(item => item.minScore !== null && item.minRank !== null)
    .map(item => {
      const chance = calculateAdmissionChance(item, userScore, userRank);
      return {
        ...item,
        chance,
        recommendType: getRecommendType(item, userScore, userRank)
      };
    })
    .filter(item => item.recommendType)
    .sort((a, b) => b.chance.percent - a.chance.percent);

  renderRecommendCards(results, userScore, userRank);
  document.getElementById("recommend").scrollIntoView({ behavior: "smooth" });
}

/* 推荐类型判断：位次优先，位次数字越小代表排名越靠前。 */
function getRecommendType(item, userScore, userRank) {
  if (item.minScore === null || item.minRank === null) return "";

  if (userRank) {
    const rankGap = item.minRank - userRank;
    if (rankGap >= 5000) return "保一保";
    if (rankGap >= -1000) return "稳一稳";
    if (rankGap >= -5000) return "冲一冲";
    return "";
  }

  if (!userScore) return "";
  const scoreGap = userScore - item.minScore;
  if (scoreGap >= 20) return "保一保";
  if (scoreGap >= 0) return "稳一稳";
  if (scoreGap >= -10) return "冲一冲";
  return "";
}

/* 录取几率计算：当前为演示算法，后续真实数据加入后可继续复用。 */
function calculateAdmissionChance(item, userScore, userRank) {
  if (item.minScore === null || item.minRank === null) {
    return {
      percent: null,
      riskLevel: "无法评估",
      advice: "暂无历史录取数据，无法评估录取几率。",
      scoreGap: null,
      rankGap: null
    };
  }

  let percent = 5;
  let riskLevel = "风险很高";
  let advice = "谨慎填报";
  const scoreGap = userScore ? userScore - item.minScore : null;
  const rankGap = userRank ? item.minRank - userRank : null;

  if (userRank) {
    if (userRank <= item.minRank - 5000) {
      percent = 90; riskLevel = "较稳"; advice = "保一保";
    } else if (userRank <= item.minRank - 1000) {
      percent = 80; riskLevel = "比较稳"; advice = "稳一稳";
    } else if (userRank <= item.minRank + 1000) {
      percent = 65; riskLevel = "有一定机会"; advice = "稳中带冲";
    } else if (userRank <= item.minRank + 5000) {
      percent = 42; riskLevel = "风险较高"; advice = "冲一冲";
    } else {
      percent = 18; riskLevel = "风险很高"; advice = "谨慎填报";
    }
  } else if (userScore) {
    if (scoreGap >= 20) {
      percent = 90; riskLevel = "较稳"; advice = "保一保";
    } else if (scoreGap >= 10) {
      percent = 80; riskLevel = "比较稳"; advice = "稳一稳";
    } else if (scoreGap >= 0) {
      percent = 65; riskLevel = "有一定机会"; advice = "稳中带冲";
    } else if (scoreGap >= -10) {
      percent = 42; riskLevel = "风险较高"; advice = "冲一冲";
    } else {
      percent = 18; riskLevel = "风险很高"; advice = "谨慎填报";
    }
  }

  if (item.planCount >= 5) percent += 3;
  if (item.planCount <= 2) percent -= 3;
  percent = Math.max(5, Math.min(95, percent));

  return { percent, riskLevel, advice, scoreGap, rankGap };
}

function renderRecommendCards(results, userScore, userRank) {
  if (!results.length) {
    dom.recommendResults.className = "empty-box";
    dom.recommendResults.textContent = "暂无可推荐结果。";
    return;
  }

  dom.recommendResults.className = "card-grid";
  dom.recommendResults.innerHTML = results.map(item => resultCardTemplate(item, userScore, userRank, true)).join("");
}

function handleChance() {
  const userScore = Number(dom.chanceScore.value);
  const userRank = Number(dom.chanceRank.value);
  if (!userScore && !userRank) {
    dom.chanceResults.className = "empty-box";
    dom.chanceResults.textContent = "请至少输入高考分数或全省位次。";
    return;
  }

  const list = allData.filter(item => {
    return matches(item.province, dom.chanceProvince.value) &&
      matches(String(item.year), dom.chanceYear.value) &&
      matches(String(item.planYear), dom.chancePlanYear.value) &&
      matches(item.enrollCategory, dom.chanceCategory.value) &&
      matches(item.subjectRequirement, dom.chanceSubject.value) &&
      includesText(item.majorName, dom.chanceMajor.value);
  }).map(item => ({
    ...item,
    chance: calculateAdmissionChance(item, userScore, userRank)
  })).sort((a, b) => (b.chance.percent || 0) - (a.chance.percent || 0));

  renderChanceCards(list, userScore, userRank);
}

function renderChanceCards(list, userScore, userRank) {
  if (!list.length) {
    dom.chanceResults.className = "empty-box";
    dom.chanceResults.textContent = "暂无匹配数据";
    return;
  }

  dom.chanceResults.className = "card-grid";
  dom.chanceResults.innerHTML = list.map(item => resultCardTemplate(item, userScore, userRank, false)).join("");
}

function resultCardTemplate(item, userScore, userRank, isRecommend) {
  const chance = item.chance;
  const tagText = isRecommend ? item.recommendType : chance.advice;
  const percentHtml = chance.percent === null
    ? `<p class="risk-text">暂无历史录取数据，无法评估录取几率。</p>`
    : `
      <p><strong>预计录取几率：</strong>${chance.percent}%</p>
      <div class="progress"><span class="${progressColor(chance.percent)}" style="width:${chance.percent}%"></span></div>
      <p><strong>风险等级：</strong><span class="risk-text">${chance.riskLevel}</span></p>
      <p><strong>建议类型：</strong>${chance.advice}</p>
    `;

  return `
    <article class="result-card">
      <span class="tag ${tagClass(tagText)}">${tagText}</span>
      <h3>${item.majorName}</h3>
      <p><strong>招生类别：</strong>${item.enrollCategory}</p>
      <p><strong>2025最低分：</strong>${displayValue(item.minScore)}</p>
      <p><strong>2025最低位次：</strong>${displayValue(item.minRank)}</p>
      <p><strong>2026招生人数：</strong>${item.planCount}</p>
      <p><strong>选科要求：</strong>${item.subjectRequirement}</p>
      <p><strong>你的分数：</strong>${userScore || "未填写"}</p>
      <p><strong>你的位次：</strong>${userRank || "未填写"}</p>
      <p><strong>分数差：</strong>${displayGap(chance.scoreGap)}</p>
      <p><strong>位次差：</strong>${displayGap(chance.rankGap)}</p>
      ${percentHtml}
      <div class="result-warning">该概率为模拟算法估算结果，仅供功能展示，不代表真实录取结果。</div>
    </article>
  `;
}

function tagClass(text) {
  if (text === "保一保") return "tag-safe";
  if (text === "稳一稳" || text === "稳中带冲") return "tag-stable";
  if (text === "冲一冲") return "tag-rush";
  return "tag-middle";
}

function progressColor(percent) {
  if (percent >= 80) return "bar-green";
  if (percent >= 60) return "bar-blue";
  if (percent >= 40) return "bar-orange";
  return "bar-red";
}

function displayGap(value) {
  if (value === null || value === undefined) return "—";
  return value > 0 ? `+${value}` : String(value);
}

function copyMainInputsToChance() {
  dom.chanceProvince.value = dom.provinceSelect.value;
  dom.chanceYear.value = dom.yearSelect.value;
  dom.chancePlanYear.value = dom.planYearSelect.value;
  dom.chanceCategory.value = dom.categorySelect.value;
  dom.chanceScore.value = dom.scoreInput.value;
  dom.chanceRank.value = dom.rankInput.value;
  dom.chanceSubject.value = dom.subjectSelect.value;
  dom.chanceMajor.value = dom.majorKeyword.value;
}
