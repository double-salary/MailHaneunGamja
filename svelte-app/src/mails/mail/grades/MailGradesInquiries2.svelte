<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { getRandomLastWords } from '../lastWords/lastWords-data';
  import { bookmarkAction, getUserAction } from '../../../store/user-data';
  import { location } from 'svelte-spa-router';

  const exampleData = [
    '계산을 똑바로 하지 못한것은 분명 제 잘못이지만 1번 이후 문제들의 경우 계산 과정은 정확했고, 많은 노력을 들인 과목이라 이렇게 예기치 못한 실수로 인해 한 문제를 통째로 틀리게 되 것에 아쉬움이 남아 이렇게 실례를 무릅쓰고 문의드립니다.',
    '정확한 답을 내는 것 역시 시험의 중요한 부분이라는 사실은 저 역시 잘 알고 있으나, 열심히 공부한 만큼 개인적으로 아쉬움이 남아 1번 문항 이후의 논리 전개의 경우 틀리지 않았다는 점을 참작해주실 여지가 있는지 실례를 무릅쓰고 여쭙고자 이렇게 메일 드리게 되었습니다.',
    '3번 문항에서 0점을 받은 이유가 계산을 끝마치지 못했었기 때문인데요, 급하게 푸느라 정확한 답을 도출해내지 못한 것은 제 잘못이지만 수식을 계산하게 되면 값 자체는 맞아서 아쉬움이 많이 남아 재채점의 여지가 있는지 문의드리고자 이렇게 실례를 무릅쓰고 메일 드리게 되었습니다.',
    '저는 3번 문항을 8번 렉처노트에 나와있는 증명 3.8에 기반해서 논리를 전개했는데, 접근 방식에 차이는 있지만 결국 같은 결론이 나오기 때문에 실례가 되지 않는다면 이를 참작해주실 수 있는지 여쭙고 싶습니다.',
  ];

  let name = '';
  let department = '';
  let studentId = '';
  let className = '';
  let assignment = '';
  let lastWords = '';
  let example = '';
  let checkedWeather = true;
  var bookmarked = false;
  let hideBookmark = true;
  let problems = '';

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
      <span>아쉽게 감점 당했을 때</span>
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
        />]
        <span
          placeholder="시험 종류"
          contenteditable="true"
          bind:innerHTML={assignment}
        /> 채점 기준 관련 문의 드립니다
      </p>
    </div>

    <!-- 내용 -->
    <div id="copy" class="mail__text">
      안녕하세요 교수님, <br />
      이번 학기
      <span
        placeholder="강의명"
        contenteditable="true"
        bind:innerHTML={className}
      />
      수업을 수강하고 있는
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
      입니다. <br />
      바쁘신 와중에 실례가 아닐까하지만, 지난 번 본

      <span
        placeholder="시험 종류"
        contenteditable="true"
        bind:innerHTML={assignment}
      />
      에서
      <span
        placeholder="틀린 문항"
        contenteditable="true"
        bind:innerHTML={problems}
      />
      을 틀린 것으로 보이는데, 맞다면 혹시 이 문항에 부분점수 혹은 재채점의 여지가
      없는지 여쭙고 싶습니다.

      <!-- 사유 예시 -->
      <div class="mail__example">
        <div class="mail__example-header">
          <input class="mail__reason" value="사유" readonly />
        </div>
        <p
          placeholder="정확한 답을 내는 것 역시 시험의 중요한 부분이라는 사실은 저 역시 잘 알고 있으나, 열심히 공부한 만큼 개인적으로 아쉬움이 남아 1번 문항 이후의 논리 전개의 경우 틀리지 않았다는 점을 참작해주실 여지가 있는지 실례를 무릅쓰고 여쭙고자 이렇게 메일 드리게 되었습니다."
          contenteditable="true"
          bind:innerHTML={example}
        />
      </div>

      번거로운 확인 부탁드려 죄송합니다. 감사합니다.

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
