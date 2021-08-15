<script>
  import Typewriter from './Typewriter.svelte';
  import './landings.css';
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
  $: sloganFontSize = Math.round(
    Math.min(0.14 * leftDivWidth, 0.08 * innerHeight),
  );
  $: buttonFontSize = 0.4 * sloganFontSize;
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
    <div class="left-div">
      <div
        class="text-slogan"
        style="font-size: {sloganFontSize}px; width: {leftDivWidth};"
      >
        메일 앞에서 <br /> 말하는 감자가 <br /> 되어버리는 <br /> 당신을 위해서
      </div>
      <div class="link-button">
        <a href="#/scenarioList" class="link-button__text" style="font-size: {buttonFontSize}px">
          가능한 시나리오 보러가기
        </a>
        <!-- <div class="link-button__text" style="font-size: {buttonFontSize}px">
          가능한 시나리오 보러가기
        </div> -->
        <div class="link-button__img">
          <img src="../resources/img/arrow.png" alt="arrow img" />
        </div>
      </div>
    </div>
    <div class="right-div">
      <div class="top-bar">
        <div class="circle circle-1" />
        <div class="circle circle-2" />
        <div class="circle circle-3" />
      </div>
      <div class="mail-to">
        <div class="mail-to_field">To:</div>
        <div class="mail-to_prof">
          존경하는 교수님께
          <img src="../resources/img/close.png" alt="close button" />
        </div>
      </div>

      <div class="mail-to_title">Title: 제목제목제목제목</div>
      <div class="mail-to_text">
        <Typewriter>
          <div>존경하는 교수님께,</div>
          <div>안녕하세요 교수님, 박아무개입니다.</div>
          <div>다름이 아니오라...</div>
        </Typewriter>
      </div>
    </div>
  </div>
</div>

<img class="landing-potato" src="../resources/img/long-potato.png">


