<script>
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { getRandomLastWords } from '../lastWords/lastWords-data';
    import { bookmarkAction, getUserAction } from '../../../store/user-data';
    import { location } from 'svelte-spa-router';
  
    const exampleData = [
      '다름이 아니라 제가 군입대 전에 교수님과 면담을 하고자 연락 드리게 되었습니다. 가능하다면 교수님과 1시간 정도 전공 학업과 관련하여 면담을 할 수 있을까요?',
      '다름이 아니라 제가 랩인턴 관련하여 교수님께 면담 요청을 드리고 싶어 메일 드리게 되었습니다. 가능하다면 교수님과 1시간 정도 랩 인턴에 관련하여 면담을 할 수 있을까요?',
      '다름이 아니라 제가 교환학생 신청을 희망중이라 교수님께 면담 요청을 드리고 싶어 메일 드리게 되었습니다. 가능하다면 교수님과 1시간 정도 교환 학생 신청 관련하여 면담을 할 수 있을까요?',
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
        <span>면담 신청할 때</span>
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
            교수님께 면담 신청 드리고 싶습니다.
        </p>
      </div>
  
      <!-- 내용 -->
      <div id="copy" class="mail__text">
        안녕하세요, 교수님. 저는 
        <span placeholder="학과" class="mail__department" contenteditable="true" bind:innerHTML={department}></span> 
        <span placeholder="학번" class="mail__student-id" contenteditable="true" bind:innerHTML={studentId}></span>
        <span placeholder="이름" class="mail__name" contenteditable="true" bind:innerHTML={name}></span>
        입니다.
        지난 학기 동안 교수님의 가르침 덕분에 학업적인 호기심을 해결하고, 학업 외적인 부분에서도 많은 조언을 받을 수 있었습니다. 감사합니다.

        <!-- 사유 예시 -->
        <div class="mail__example">
            <div class="mail__example-header">
              <input class="mail__reason" value="사유 예시" readonly/>
            </div>
            <p
              placeholder="
                다름이 아니라 제가 군입대 전에 교수님과 면담을 하고자 연락 드리게 되었습니다.
                가능하다면 교수님과 1시간 정도 전공 학업과 관련하여 면담을 할 수 있을까요?
              "
              contenteditable="true"
              bind:innerHTML={example} >
            </p>
        </div>
    
        저는 화요일을 제외한 평일 1시~9시에 모두 가능합니다. 교수님께서 편하신 시간을 골라주신다면 그 시간에 찾아 뵙고 면담을 진행하고 싶습니다. 
        비대면 면담도 물론 좋습니다.
        <br/>
        갑작스러운 면담 요청 드려서 죄송하고, 메일 읽어주셔서 감사드립니다. 답신 기다리고 있겠습니다!
  
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
  