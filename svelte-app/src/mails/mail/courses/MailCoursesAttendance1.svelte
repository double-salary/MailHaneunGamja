<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { getRandomLastWords } from '../lastWords/lastWords-data';
  import { bookmarkAction, getUserAction } from '../../../store/user-data';
  import { location } from 'svelte-spa-router';

  const exampleData = [
    '제가 오늘 8시 반부터 고분자물성 수업을 노트북으로 접속해서 듣고있었는데, 요소실험 일정이 10시부터 잡혀있어 중간에 잠시 폰으로 접속해 이동하다 보니 중간에 접속이 잠시 끊긴 것 같습니다. 오늘 수업 초반에 수식 전개를 필기해놓았는데 그걸로 혹시 증빙이 가능할까요?',
    '다름이 아니라 제가 저번 목요일부터 감기에 심하게 걸려 출석을 하지 못하고 있는 상태인데, 내일 역시 이대로라면 몸상태가 좋지 않아 출석이 어려울 것 같습니다. 진료 확인서를 통해 병결 처리가 가능한지 여쭐 수 있을까요?',
    '지난 주에 있었던 조별 과제를 함께 한 조원 중 한명이 코로나 확진 판정을 받아 실습 대면 참가가 어려울 것 같습니다. 관련 서류를 보내드리고 공결 처리가 가능할까요?',
    '이번 주 금요일 16시 - 18시 자료구조 실습이 대회 발표와 겹쳐 공결 처리가 가능할까 문의드립니다. 대회의 경우 13시부터 부터 진행되며, 16시 30분부터 시상식이 있습니다. 공문 파일의 경우 파일에 첨부했습니다.',
  ];

  let name = '';
  let department = '';
  let studentId = '';
  let className = '';
  let lastWords = '';
  let example = '';
  let date = '';
  let checkedWeather = true;
  var bookmarked = false;
  let hideBookmark = true;

  onMount(async () => {
    lastWords = getRandomLastWords(checkedWeather);
    const userInfo = await getUserAction();
    if (userInfo == null) {
      hideBookmark = true;
    } else {
      hideBookmark = false;
      bookmarked = userInfo.bookmarks.includes($location);
      name = userInfo.name;
      department = userInfo.major;
      studentId = userInfo.studentId;
    }
  });

  import CopyClipBoard from '../../CopyClipBoard.svelte';

  const copy = () => {
    let mail = document.getElementById('copy').innerText;

    const app = new CopyClipBoard({
      target: document.getElementById('clipboard'),
      props: { mail },
    });
    app.$destroy();
    alert('Copied to clipboard!');
  };

  function refreshLastWords() {
    lastWords = getRandomLastWords(checkedWeather);
  }

  async function handleBookmark() {
    bookmarked = await bookmarkAction($location);
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
      <span>수업에 못가게 되었을 때</span>
      <div
        class="mail__bookmark"
        style="visibility: {hideBookmark ? 'hidden' : 'visible'}"
      >
        {#if bookmarked}
          <i class="fas fa-bookmark" on:click={handleBookmark} />
        {:else}
          <i class="far fa-bookmark" on:click={handleBookmark} />
        {/if}
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
          bind:innerHTML={className}
        />] 출석 관련 문의 드립니다
      </p>
    </div>

    <!-- 내용 -->
    <div id="copy" class="mail__text">
      안녕하세요, 교수님.
      <span
        placeholder="강의명"
        contenteditable="true"
        bind:innerHTML={className}
      />
      수업 수강하고 있는
      <span
        placeholder="학과"
        class="mail__department"
        contenteditable="true"
        bind:innerHTML={department}
      />
      <span
        placeholder="학번"
        class="mail__student-id"
        contenteditable="true"
        bind:innerHTML={studentId}
      />
      <span
        placeholder="이름"
        class="mail__name"
        contenteditable="true"
        bind:innerHTML={name}
      />
      입니다.

      <br />

      다름이 아니라 제가
      <span
        placeholder="결석 일자"
        contenteditable="true"
        bind:innerHTML={date}
      />
      수업에 참여하지 못해 이렇게 메일 드리게 되었습니다. 

      <!-- 사유 예시 -->
      <div class="mail__example">
        <div class="mail__example-header">
          <input class="mail__reason" value="사유" readonly />
        </div>
        <p
          placeholder="이번 주 금요일 16시 - 18시 자료구조 실습이 대회 발표와 겹쳐 공결 처리가 가능할까 문의드립니다. 대회의 경우 13시부터 부터 진행되며, 16시 30분부터 시상식이 있습니다. 공문 파일의 경우 파일에 첨부했습니다."
          contenteditable="true"
          bind:innerHTML={example}
        />
      </div>

      <span
        placeholder="결석 일자"
        contenteditable="true"
        bind:innerHTML={date}
      />
      자 결석에 대하여 양해를 구할 수 있을까요? <br />
      항상 좋은 수업 해주시느라 노고가 많으십니다.

      <!-- 끝 인사 -->
      <div class="mail__last-words">
        <span
          placeholder="요즘 코로나가 기승인데 건강 조심하시길 바랍니다."
          contenteditable="true"
          bind:innerHTML={lastWords}
        />
      </div>

      <span
        class="mail__name"
        placeholder="이름"
        contenteditable="true"
        bind:innerHTML={name}
      /> 올림
    </div>

    <!-- 클립보드 복사 -->
    <div class="mail__copy">
      <button
        class="mail__copy-btn"
        on:click={copy}
        data-clipboard-target="#bar"
      >
        클립보드에 복사&nbsp;
        <i class="far fa-clone" />
      </button>
      <div id="clipboard" />
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
            type="radio"
            bind:group={checkedWeather}
            name="amount"
            value={true}
            placeholder="계절별 안부인사"
          />
          <span> 계절별 안부인사 </span>
        </label>
        <label class="mail__btn-option">
          <input
            type="radio"
            bind:group={checkedWeather}
            name="amount"
            value={false}
          />
          <span> 코시국 안부인사 </span>
        </label>
        <button on:click={refreshLastWords} class="mail__sync-btn">
          다른 안부인사 보기
          <i class="fas fa-sync-alt" />
        </button>
      </div>
    </div>
  </div>

  <!-- 사유 예시 -->
  <div class="example">
    <div class="example__title">다양한 사유 보기</div>
    {#each exampleData as ex, id}
      <div class="example__content">
        <p>{ex}</p>
        <button
          on:click={() => {
            example = ex;
          }}
        >
          적용
          <i class="fas fa-pencil-alt" />
        </button>
      </div>
    {/each}
  </div>
</div>
