<script>
  import { slide } from 'svelte/transition';
  let name = '';
  let department = '';
  let studentId = '';
  let className = '';
  let assignment = '';
  let lastWords = '';
  let example = '';
  let selected = 'weather';
  let isOpen = true;
  const exampleData = {
    1: '1예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절',
    2: '2예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절',
    3: '3예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절3예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절3예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절3예시예시 슬슬 디자인이 귀찮아지기 시작해씅ㅁ 구구절절 구구절절',
  };
  const weatherData = {
    1: '봄',
    2: '여름',
    3: '가을',
    4: '겨울',
  };
  function apply(event) {
    const button = event.target;
    example = button.parentElement.firstChild.innerText;
  }
  const toggle = () => (isOpen = !isOpen);
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
        [<input
          type="text"
          maxlength="20"
          placeholder="강의명"
          bind:value={className}
        />] 기말 과제 제출 드립니다.
      </p>
    </div>

    <!-- 내용 -->
    <div class="mail__text">
      안녕하세요, 교수님.
      <input
        type="text"
        maxlength="20"
        placeholder="강의명"
        bind:value={className}
      />
      수업 수강하고 있는
      <input
        class="mail__department"
        type="text"
        maxlength="15"
        placeholder="학과"
        bind:value={department}
      />
      <input
        class="mail__student-id"
        type="text"
        maxlength="10"
        placeholder="학번"
        bind:value={studentId}
      />
      <input
        class="mail__name"
        type="text"
        maxlength="10"
        placeholder="이름"
        bind:value={name}
      />
      입니다.

      <!-- 사유 예시 -->
      <div class="mail__example">
        <div class="mail__example-header">
          <div class="mail__reason">사유 예시</div>
        </div>
        <textarea
          bind:value={example}
          placeholder="다름이 아니라 저번학기에 이어 제가 이번학기에도 컴퓨터의 개념 및 실습의 수강 신청에 실패했는데, 이번학기에도 듣지 못한다면 계속해서 이후 수강신청에도 차질이 생길 것 같습니다."
        />
      </div>

      <input
        type="text"
        maxlength="30"
        placeholder="과제명"
        bind:value={assignment}
      />
      과제 제출합니다. 감사합니다.

      <!-- 끝 인사 -->
      <div class="mail__last-words">
        <input
          type="text"
          maxlength="200"
          placeholder="요즘 코로나가 기승인데 건강 조심하시길 바랍니다."
          bind:value={lastWords}
        />
      </div>

      <input
        class="mail__name"
        type="text"
        maxlength="10"
        placeholder="이름"
        bind:value={name}
      /> 올림
    </div>

    <!-- 클립보드 복사 -->
    <div class="mail__copy">
      <div class="mail__copy-btn">
        클립보드에 복사&nbsp;
        <i class="far fa-clone" />
      </div>
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
        <div class="mail__last-words-btn">
          <label class="mail__btn-option">
            <input
              checked={selected === 'weather'}
              on:click={toggle}
              aria-expanded={isOpen}
              type="radio"
              name="amount"
              value="계절별 안부인사"
            />
            <span> 계절별 안부인사 </span>
            {#if isOpen}
              <ul transition:slide={{ duration: 300 }}>
                {#each Object.entries(weatherData) as weather}
                  <li>{weather[1]}</li>
                {/each}
              </ul>
            {/if}
          </label>
          <label class="mail__btn-option">
            <input
              checked={selected === 'corona'}
              on:click={() => {
                isOpen = false;
              }}
              type="radio"
              name="amount"
              value="코시국 안부인사"
            />
            <span> 코시국 안부인사 </span>
          </label>
        </div>
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
