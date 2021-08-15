<script>
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { getRandomLastWords } from '../lastWords/lastWords-data';
    import { bookmarkAction, getUserAction } from '../../../store/user-data';
    import { location } from 'svelte-spa-router';
  
    const exampleData = [
      '다름이 아니라 이 강의에 주전공 수강제한이 걸려 있어서 첫째날 수강신청을 못하게 되었는데, 저는 경영학과 부전공을 희망하고 있어 이번 학기에 꼭 이 강의를 수강하고 싶습니다. 하여 정원 외 수강신청을 받아주시는지 여쭙고자 메일을 보내게 되었습니다.',
      '다름이 아니라 이 과목의 정원 외 수강신청을 받으시는지 여쭙고자 메일을 드리게 되었습니다. 지난 번처럼 구글폼으로 신청자를 받으시는지, 아니면 수강 신청 날 실패 시 메일을 보내면 될지 알려주신다면 감사하겠습니다.',
      '다름이 아니라 이 과목의 정원 외 수강신청을 몇 명 정도 받으시는지 여쭙고자 메일을 드리게 되었습니다. 공간이 한정된 실험 수업이다보니 정원 외 수강신청을 받지 않으실 수도 있을 것 같아 메일을 보냅니다. 알려주신다면 감사하겠습니다!',
    ];
  
    let name = '';
    let department = '';
    let studentId = '';
    let className = '';
    //let assignment = '';
    let lastWords = '';
    let example = '';
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
        <span>정원 외 수강신청 가능여부 문의할 때</span>
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
            [<span placeholder="강의명" contenteditable="true" bind:innerHTML={className}></span>]
            정원 외 수강신청 가능 여부 문의드립니다.
        </p>
      </div>
  
      <!-- 내용 -->
      <div id="copy" class="mail__text">
        안녕하세요, 교수님. 저는 <span placeholder="강의명" contenteditable="true" bind:innerHTML={className}></span> 수강을 희망하는
        <span placeholder="학과" class="mail__department" contenteditable="true" bind:innerHTML={department}></span> 
        <span placeholder="학번" class="mail__student-id" contenteditable="true" bind:innerHTML={studentId}></span>
        <span placeholder="이름" class="mail__name" contenteditable="true" bind:innerHTML={name}></span>
        입니다.
  
        <!-- 사유 예시 -->
        <div class="mail__example">
            <div class="mail__example-header">
              <input class="mail__reason" value="사유 예시" readonly/>
            </div>
            <p
              placeholder="다름이 아니라 이 강의에 주전공 수강제한이 걸려 있어서 첫째날 수강신청을 못하게 되었는데, 저는 경영학과 부전공을 희망하고 있어 이번 학기에 꼭 이 강의를 수강하고 싶습니다. 하여 정원 외 수강신청을 받아주시는지 여쭙고자 메일을 보내게 되었습니다. "
              contenteditable="true"
              bind:innerHTML={example} >
            </p>
        </div>
    
          꼭 교수님의 수업을 수강하고 싶습니다.
          <br>
          메일 읽어주셔서 감사드립니다. 답신 기다리고 있겠습니다!
  
        <!-- 끝 인사 -->
        <div class="mail__last-words">
          <span
            placeholder="요즘 코로나가 기승인데 건강 조심하시길 바랍니다."
            contenteditable="true"
            bind:innerHTML={lastWords}
          />
        </div>
  
        <span placeholder="이름" class="mail__name" contenteditable="true" bind:innerHTML={name}></span> 올림
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
  