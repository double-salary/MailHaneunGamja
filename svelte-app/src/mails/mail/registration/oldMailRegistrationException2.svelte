<script>
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';
    let name = '';
    let department = '';
    let studentId = '';
    let className = '';
    //let assignment = '';
    let lastWords = '';
    let example = '';
    let selected = 'weather';
    let min;
    let max;
    const exampleData = {
      1: '저는 웹 개발 동아리와 <정보문화기술입문> 팀프로젝트를 하면서 웹 개발 분야에 관심을 쌓게 되었고, 이 과목을 수강하면서 루비 온 레일즈를 활용한 웹 개발 지식을 쌓고자 하였습니다.',
      2: '저는 {} 분야에 {} 능력이 필수적이라고 생각되어 {} 학부 전공 신청을 고려하고 있습니다. 그래서 이번 학기에 {} 전공 탐색을 하고자 하는 목표를 세웠고, 이에 가장 근본이 되는 이 과목을 꼭 수강해야겠다고 생각하였습니다.',
      3: '제가 다음 학기에 취업을 하게 되어 이 과목을 수강하지 못하면 졸업을 못하는 상황에 놓이게 되었습니다. 수강 신청 실패로 인해 졸업 계획에 차질이 생긴다면 매우 아쉬울 것 같아 교수님께 간곡히 부탁드립니다. ',
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
  
      import CopyClipBoard from '../../CopyClipBoard.svelte';
  
    
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
          [<span placeholder="강의명" contenteditable="true" bind:innerHTML={className}></span>] 정원 외 수강신청 허락 문의드립니다.
        </p>
      </div>
  
      <!-- 내용 -->
      <div id="copy" class="mail__text">
        안녕하세요, 교수님. 저는 <span placeholder="학과" class="mail__department" contenteditable="true" bind:innerHTML={department}></span> 
        <span placeholder="학번" class="mail__student-id" contenteditable="true" bind:innerHTML={studentId}></span>
        <span placeholder="이름" class="mail__name" contenteditable="true" bind:innerHTML={name}></span>
        입니다.
        <br>
        다름이 아니라 제가 이번학기 교수님의 
        <span placeholder="강의명" contenteditable="true" bind:innerHTML={className}></span>
        수강신청에 실패하였는데, 이대로 더 수강이 미뤄지면 여러 일정에 차질이 생길 것 같아 부득이하게 메일을 보내게 되었습니다.

        <!-- 사유 예시 -->
        <div class="mail__example">
          <div class="mail__example-header">
            <input class="mail__reason" value="사유 예시" readonly/>
          </div>
          <p
            placeholder="저는 웹 개발 동아리와 <정보문화기술입문> 팀프로젝트를 하면서 웹 개발 분야에 관심을 쌓게 되었고, 이 과목을 수강하면서 루비 온 레일즈를 활용한 웹 개발 지식을 쌓고자 하였습니다."
            contenteditable="true"
            bind:innerHTML={example} >
          </p>
        </div>
  
        이러한 이유로 초안지를 받아주실 수 있을지 여쭙고자 합니다.
        아쉽게도 신청을 하지는 못했지만, 이번 학기에 꼭
        <span placeholder="강의명" contenteditable="true" bind:innerHTML={className}></span>
        과목을 수강하고 싶습니다. 
        <br/>
        메일 읽어주셔서 감사드립니다. 답신 기다리고 있겠습니다!
  
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
  