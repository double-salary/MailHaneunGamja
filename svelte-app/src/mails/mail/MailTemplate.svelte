<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  let name = '';
  let department = '';
  let studentId = '';
  let className = '';
  let assignment = '';
  let lastWords = '';
  let example = '';
  let selected = 'weather';
  let min;
  let max;
  const exampleData = {
    1: '1예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절',
    2: '2예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절',
    3: '다름이 아니라 저번학기에 이어 제가 이번학기에도 컴퓨터의 개념 및 실습의 수강 신청에 실패했는데다름이 아니라 저번학기에 이어 제가 이번학기에도 컴퓨터의 개념 및 실습의 수강 신청에 실패했는데3예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절3예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절3예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절3예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절',
  };
  
  const weatherLastWords={
    1: '날이 더운데 항상 감사드립니다.', 
    2: '날이 추운데 감기 조심하시고, 건강하시길 기원합니다.', 
    3: '날이 좋은데 어쩌구', 
  }
  const coronaLastWords={
    1: '코로나가 다시 악화되었는데 건강하시길 바랍니다.', 
    2: '건강이 어쩌구', 
    3: '코로나 사태에도 불구하고 좋은 강의 감사합니다.', 
  }
  
  function apply(event) {
    const button = event.target;
    example = button.parentElement.firstChild.innerText;
  }

  function randomApply(event) {
    const input = document.getElementById('input');

    /* 랜덤으로 index 결정 */
    let i = Math.floor(Math.random() * (max - min + 1)) + min;
    min = 1;
    max = 3;

    if (input.checked === true){
      lastWords=weatherLastWords[i];
    }
    else {
      lastWords=coronaLastWords[i];
    }
  }

	import CopyClipBoard from '../CopyClipBoard.svelte';

  
	const copy = () => {
    let mail = document.getElementById('copy').innerText;

		const app = new CopyClipBoard({
			target: document.getElementById('clipboard'),
			props: { mail },
		});
		app.$destroy();
    alert('Copied to clipboard!');
	}
</script>

<div class="mail__wrapper">
  <div class="mail__content">
    <!-- 메일 상단 -->
    <div class="mail__header">
      <div class="mail__circle">
        <i class="fas fa-circle" />
        <i class="fas fa-circle" />
        <i class="fas fa-circle" />
      </div>
      <div class="mail__bookmark">
        <i class="fas fa-bookmark" />
      </div>
    </div>

    <!-- 받는 사람 -->
    <div class="mail__recipient">
      받는 사람:&nbsp;
      <p>
        존경하는 교수님&nbsp;
        <i class="fas fa-times" />
      </p>
    </div>

    <!-- 제목 -->
    <div class="mail__title">
      제목:
      <p>
        [<span 
        placeholder="강의명"
        contenteditable="true"
        bind:innerHTML={className}>
      </span>] 기말 과제 제출 드립니다.
      </p>
    </div>

    <!-- 내용 -->
    <div id="copy" class="mail__text">
      안녕하세요, 교수님.
      <span 
        placeholder="강의명"
        contenteditable="true"
        bind:innerHTML={className}>
      </span>
      수업 수강하고 있는
      <span
        placeholder="학과"
        class="mail__department"
        contenteditable="true"
        bind:innerHTML={department}
      >
      </span>
      <span
        placeholder="학번"
        class="mail__student-id"
        contenteditable="true"
        bind:innerHTML={studentId}
      >
      </span>
      <span
        placeholder="이름"
        class="mail__name"
        contenteditable="true"
        bind:innerHTML={name}
      >
      </span>
      입니다.

      <!-- 사유 예시 -->
      <div class="mail__example">
        <div class="mail__example-header">
          <input class="mail__reason" value="사유 예시" readonly/>
        </div>
        <p
          placeholder="다름이 아니라 저번학기에 이어 제가 이번학기에도 컴퓨터의 개념 및 실습의 수강 신청에 실패했는데, 이번학기에도 듣지 못한다면 계속해서 이후 수강신청에도 차질이 생길 것 같습니다."
          contenteditable="true"
          bind:innerHTML={example} >
        </p>
      </div>

      <span
        placeholder="과제명"
        contenteditable="true"
        bind:innerHTML={assignment}
      >
      </span>
      과제 제출합니다. 감사합니다.

      <!-- 끝 인사 -->
      <div class="mail__last-words">
        <span
          placeholder="요즘 코로나가 기승인데 건강 조심하시길 바랍니다."
          contenteditable="true"
          bind:innerHTML={lastWords}
        >
        </span>
      </div>

      <span
        class="mail__name"
        placeholder="이름"
        contenteditable="true"
        bind:innerHTML={name}
      >
      </span> 올림
    </div>

    <!-- 클립보드 복사 -->
    <div class="mail__copy">
      <button class="mail__copy-btn" on:click={copy}>
        클립보드에 복사&nbsp;
        <i class="far fa-clone" />
      </button>
      <div id="clipboard"></div>
    </div>

    <!-- 끝 인사 -->
    <div class="mail__last-words-add">
      <div class="mail__header">
        <div class="mail__circle">
          <i class="fas fa-circle" />
          <i class="fas fa-circle" />
          <i class="fas fa-circle" />
        </div>
        <span>멋진 안부인사 더하기</span>
      </div>
      <div class="mail__last-words-content">
        <label class="mail__btn-option">
          <input
          id="input"
          checked={selected === 'weather'}
          type="radio"
          name="amount"
          value="계절별 안부인사"
          />
          <span> 계절별 안부인사 </span>
        </label>
        <label class="mail__btn-option">
          <input
          checked={selected === 'corona'}
          type="radio"
          name="amount"
          value="코시국 안부인사"
          />
          <span> 코시국 안부인사 </span>
        </label>
        <button on:click={(e) => randomApply(e)} class="mail__sync-btn">
          다른 안부인사 보기
          <i class="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- 사유 예시 -->
  <div class="example">
    <div class="example__title">다양한 사유 보기</div>
    {#each Object.entries(exampleData) as example}
      <div class="example__content">
        <p>{example[1]}</p>
        <button on:click={(e) => apply(e)}>
          적용
          <i class="fas fa-pencil-alt" />
        </button>
      </div>
    {/each}
  </div>
</div>
