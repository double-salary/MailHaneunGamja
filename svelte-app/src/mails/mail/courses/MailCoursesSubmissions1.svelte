<script>
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { getRandomLastWords } from '../lastWords/lastWords-data';
    import { bookmarkAction, getUserAction } from '../../../store/user-data';
    import { location } from 'svelte-spa-router';
  
    const exampleData = [
      '제가 다른 수업과 착각해 이번 과제를 이미 제출했다고 생각하고 있었는데 어제 확인해보니 미제출되어 있어서, 혹시 지금이라도 제출 가능 할까요?',
      '이번 과제를 이메일을 통해 제출했으나, 전송과정에서 문제가 발생한 것을 오늘 발견했습니다.. 괜찮다면 지금 제출가능할까요?',
      '과제를 제출하는 란을 착각하여 다른 곳에 제출하였습니다.. 제가 제출란을 정확히 인지하지 못해 발생한 일이지만 늦게나마 과제제출을 받아주실 수 있는지 여쭤봅니다.',
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
        <span>과제를 늦게 제출할 때</span>
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
          />] 과제 지각 제출 관련 문의 드립니다
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
  
        다름이 아니라 지각제출 관련하여 궁금한 부분이 있어
        이렇게 메일 드리게 되었습니다.
  
        <!-- 사유 예시 -->
        <div class="mail__example">
          <div class="mail__example-header">
            <input class="mail__reason" value="사유" readonly />
          </div>
          <p
            placeholder="제가 다른 수업과 착각해 이번 과제를 이미 제출했다고 생각하고 있었는데 어제 확인해보니 미제출되어 있어서, 혹시 지금이라도 제출 가능 할까요?"
            contenteditable="true"
            bind:innerHTML={example}
          />
        </div>
  
        매번 재밌는 수업 해주셔서 감사하고, 오늘도 좋은 하루 보내세요!
  
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
  