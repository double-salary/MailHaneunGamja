export const weatherLastWords = [
  "요즘 날씨가 많이 궂은데 감기 조심하시고 좋은 하루 보내세요!",
  "건강한 가을 보내시길 바랍니다! 감사합니다.",
  "요즘 일교차가 심한데 감기 조심하시고, 좋은 하루 보내세요!",
  "날이 추운데 감기 조심하시고, 좋은 하루 보내세요!",
  "날이 추운데 건강 조심하시기 바랍니다.",
  "날이 무더운데 항상 건강 조심하시고, 좋은 하루 보내세요!",
  "여즘 날씨가 무척 궂은데 항상 건강 조심하시고 남은 하루 잘 보내세요!", 
  "추운 겨울부터 지금까지 항상 좋은 수업 해주셔서 감사합니다. 좋은 하루 보내세요!",
  "무더운 여름부터 지금까지 항상 좋은 수업 해주셔서 감사합니다. 좋은 하루 보내세요!",
]

export const coronaLastWords= [
  "코로나로 힘겨운 요즘인데 평온한 하루 보내시길 바랍니다.",
  "요즘 코로나가 기승인데 늘 건강 조심하시고, 좋은 하루 보내세요!",
  "요즘 다시 코로나가 기승인데 항상 건강 조심하세요!",
  "요즘 코로나가 기승인데 늘 건강 조심하시고, 남은 하루 잘 보내세요!",
  "요즘 코로나 때문에 문제가 많은데 건강 조심하시고, 남은 하루 잘 보내세요!",
  "코로나로 인해 다사다난했던 한 학기였음에도 불구하고 유익한 수업 제공해주셔서 감사합니다!",
  "코로나로 인해 아쉬움이 많이 남는 학기지만 그래도 항상 좋은 수업 해주셔서 감사합니다. 좋은 하루 보내세요!"
]


export function getRandomLastWords(checked) { // checked = true when weather 

  let min = 0;
  let max = checked ? (weatherLastWords.length-1) : (coronaLastWords.length - 1)
  let idx = getRandomInt(min, max);

  if (checked) {
    return weatherLastWords[idx];
  }
  else {
    return coronaLastWords[idx];
  }

}


function getDictLength(dict) {
  return Object.keys(dict).length;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


