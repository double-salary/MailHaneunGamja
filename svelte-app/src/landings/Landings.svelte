<script>
  import Typewriter from './Typewriter.svelte';
  document.body.classList.add('disable-scroll');
  let innerWidth = 1600;
  let innerHeight = 1024;

  $: leftCircleDiameter = Math.min(0.55 * innerWidth, 0.86 * innerHeight);
  $: leftCircleRadius = leftCircleDiameter / 2;
  $: rightCircleDiameter = Math.min(0.58 * innerWidth, 0.88 * innerHeight);
  $: rightCircleRadius = rightCircleDiameter / 2;
  $: rightCircleOffsetX = -0.13 * innerWidth;
  $: rightCircleOffsetY = -0.2 * innerHeight;
  $: leftCircleOffsetX = -0.02 * innerWidth;
  $: leftCircleOffsetY = -0.29 * innerHeight;

  $: leftDivWidth = Math.min(480, (innerWidth * 5) / 12);
  $: rightDivWidth = Math.min(684, (innerWidth * 7) / 12);
  $: divHeight = innerHeight * 0.6;
  $: leftCircleOffsetY = -0.29 * innerHeight;
  $: fontSize = Math.round(0.12 * leftDivWidth);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="background-layer">
  <svg
    style="
    height: {leftCircleDiameter};
    width: {leftCircleDiameter};
    position: fixed;
    bottom: {leftCircleOffsetY};
    left: {leftCircleOffsetX};
    "
    class="background-layer"
  >
    <circle
      cx={leftCircleRadius}
      cy={leftCircleRadius}
      r={leftCircleRadius}
      fill="var(--green-background)"
      class="background-layer"
    />
  </svg>
</div>

<!-- background layer: circles -->
<div class="background-layer">
  <svg
    style="
      height: {rightCircleDiameter};
      width: {rightCircleDiameter};
      position: fixed;
      top: {rightCircleOffsetY};
      right: {rightCircleOffsetX};
      "
    class="background-layer"
  >
    <circle
      cx={rightCircleRadius}
      cy={rightCircleRadius}
      r={rightCircleRadius}
      fill="var(--yellow-background)"
      class="background-layer"
    />
  </svg>
</div>

<div class="flex-container">
  <div class="main-layer">
    <div class="left-div" style:width={leftDivWidth}>
      <div
        class="text-slogan"
        style="font-size: {fontSize}px; width: {leftDivWidth};"
      >
        메일 앞에서 <br /> 말하는 감자가 <br /> 되어버리는 <br /> 당신을 위해서
      </div>
    </div>
    <div class="right-div" style="width: {rightDivWidth}; height: {divHeight};">
      <div class="top-bar">
        <div class="circle circle-1" />
        <div class="circle circle-2" />
        <div class="circle circle-3" />
      </div>
      <div class="to">
        <div class="field">To:</div>
        <div class="to-prof">
          존경하는 교수님께
          <img src="../resources/img/close.png" alt="close button" />
        </div>
      </div>

      <div class="title">Title: 제목제목제목제목</div>
      <div class="text">
        <Typewriter>
          <div>존경하는 교수님께, </div>
          <div>안녕하세요 교수님, 박아무개입니다.</div>
          <div>다름이 아니오라...</div>
        </Typewriter>
      </div>
    </div>
  </div>
</div>

<!-- main layer: typos/mail window design -->
<style>
  .background-layer {
    z-index: -1;
  }

  .flex-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-layer {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 100%;
  }

  .left-div {
    margin: 0;
    width: 40%;
  }

  .text-slogan {
    font-family: 'GmarketSansLight';
    width: 100%;
    margin: 0;
  }

  .right-div {
    width: 60%;
    background-color: white;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
  }

  .top-bar {
    height: 40px;
    background-color: var(--lightGray-background);
    border-radius: 16px 16px 0px 0px;
    padding-left: 17px;
    width: 100%;
    float: left;
  }

  .circle {
    z-index: 10;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: inline-block;
    margin: 13px 3px;
  }

  .circle-1 {
    background-color: var(--purple-main);
  }

  .circle-2 {
    background-color: var(--green-main);
  }

  .circle-3 {
    background-color: var(--yellow-main);
  }

  .to {
    float: left;
    height: 40px;
    border-bottom: 2px solid var(--lightGray-background);
    width: 100%;
    vertical-align: middle;
  }

  .field {
    font-family: 'NanumSquare', sans-serif !important;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    color: var(--blueGray-text);
    display: inline-block;
    padding-left: 11px;
  }

  .to-prof {
    display: inline-block;
    margin-left: 15px;
    font-family: 'NanumSquare', sans-serif !important;
    font-size: 12px;
    font-weight: bold;
    background-color: var(--purple-main);
    color: white;
    border-radius: 8px;
    padding: 3px 8px 3px 8px;
    position: relative;
    top: -2px;
  }

  .to-prof img {
    width: 12px;
    height: 12px;
    padding: 1px;
    position: relative;
    top: 2px;
  }

  .title {
    height: 40px;
    width: 100%;
    font-family: 'NanumSquare', sans-serif !important;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    color: var(--blueGray-text);
    padding-left: 11px;
    border-bottom: 2px solid var(--lightGray-background);
    margin-bottom: 0px;
  }

  .text {
    font-family: 'NanumSquare', sans-serif !important;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    margin-top: 22px;
    margin-left: 24px;
  }
</style>
