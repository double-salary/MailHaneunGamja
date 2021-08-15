<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { getRandomLastWords } from '../lastWords/lastWords-data';
  import { bookmarkAction, getUserAction } from '../../../store/user-data';
  import { location } from 'svelte-spa-router';

  const exampleData = [
    '지난 1학기 학사과로부터 2배속 이하의 배속은 허용되어 출석 점수에 영향이 없다는 공지를 전달받았는데 혹시 교수님께서도 같은 기준을 적용하고 계시는지 여쭙고자 합니다.',
    '실례가 될 수 있는 질문이나, 배속을 통해 강의에 더 집중하는 편이라 허용된다면 배속 기능을 사용하고 싶어 실례를 무릅쓰고 질문 드립니다.',
    '지난 번에 95% 이상 재생 시 출석으로 인정된다고 공지하셨는데, 학교의 동영상 강의 어플에 문제가 있어 창을 닫지 않으면 진도 상황이 기록되지 않는다고 합니다. 제가 이 부분을 미처 알지 못해 결석 처리가 되었는데 이 부분에 대해 참작해주실 수 있을까요?',
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
      <span>녹화 강의의 출석 방식이 궁금할 때</span>
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
        />] 출석 인정 관련 문의 드립니다
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

      다름이 아니라 동영상 강의의 출석 처리 방식에 대하여 궁금한 부분이 있어
      이렇게 메일 드리게 되었습니다.

      <!-- 사유 예시 -->
      <div class="mail__example">
        <div class="mail__example-header">
          <input class="mail__reason" value="사유" readonly />
        </div>
        <p
          placeholder="지난 1학기 학사과로부터 2배속 이하의 배속은 허용되어 출석 점수에 영향이 없다는 공지를 전달받았는데 혹시 교수님께서도 같은 기준을 적용하고 계시는지 여쭙고자 합니다."
          contenteditable="true"
          bind:innerHTML={example}
        />
      </div>

      비대면으로 인해 애로사항이 많으실텐데도 항상 좋은 수업 해주셔서
      감사합니다.

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
