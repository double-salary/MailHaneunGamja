

export const weatherLastWords={
  1: '날이 더운데 항상 감사드립니다.', 
  2: '날이 추운데 감기 조심하시고, 건강하시길 기원합니다.', 
  3: '날이 좋은데 어쩌구', 
}
export const coronaLastWords={
  1: '코로나가 다시 악화되었는데 건강하시길 바랍니다.', 
  2: '건강이 어쩌구', 
  3: '코로나 사태에도 불구하고 좋은 강의 감사합니다.', 
}


export function getRandomLastWords(checked) { // checked = true when weather 

  let min = 1;
  let max = checked ? getDictLength(weatherLastWords) : getDictLength(coronaLastWords);
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


