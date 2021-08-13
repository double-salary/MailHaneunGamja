<script>
  /* css */
  import MailCss from './Mail.css';
  import SideBarCss from './Sidebar.css';

  /* svelte */
  import SideBar from './SideBar.svelte';
  import MailGradesInquires1 from './mail/grades/MailGradesInquiries1.svelte';
  import MailGradesInquires2 from './mail/grades/MailGradesInquiries2.svelte';
  import Mail from './mail/MailTemplate.svelte';
  import App from '../App.svelte';

  export let params = {};

  /* side bar data */
  const gradesData = {
    성적정정: ['예상보다 낮은 학점'],
    점수문의: ['시험 점수 조회 ', '채점 기준 정정', '점수 분포 문의'],
    평가방식: ['퀴즈 평가', '성적 평가'],
  };
  const coursesData = {
    과제제출: [
      '지각제출/재제출',
      '최종 자료 제출',
      '과제 내용 문의',
      '과제 마감기한',
    ],
    출결사항: ['공결/병결/개인 사유', '녹강/배속'],
  };
  const registrationData = {
    정원외수강신청: ['가능 여부', '허락 문의'],
    이수규정: [
      '수강 제한/타 학과 전공',
      '역수강/선수과목 미이수',
      '대체 과목 수강 가능 여부',
    ],
    출결문의: ['공결/병결/개인 사유', '녹강/배속'],
  };
  const othersData = {
    면담문의: [],
    추천서문의: [],
    인턴십신청: [],
  };
</script>

<div class="container">
  {#if params.category === 'grades'}
    <div class="side-bar">
      {#each Object.entries(gradesData) as entry}
        <SideBar
          category={params.category}
          subcategory={params.subcategory}
          scenario={entry}
        />
      {/each}
    </div>
    <div class="mail">
      {#if params.subcategory === 'corrections'}
        {#if params.id === '1'}
          <MailGradesInquires1 />
        {/if}
      {:else if params.subcategory === 'inquiries'}
        {#if params.id === '1'}
          <MailGradesInquires2 />
        {:else if params.id === '2'}
          <MailGradesInquires1 />
        {:else if params.id === '3'}
          <MailGradesInquires1 />
        {/if}
      {:else if params.subcategory === 'evaluations'}
        {#if params.id === '1'}
          <MailGradesInquires2 />
        {:else if params.id === '2'}
          <MailGradesInquires2 />
        {/if}
      {/if}
    </div>
  {:else if params.category === 'courses'}
    <div class="side-bar">
      {#each Object.entries(coursesData) as entry}
        <SideBar
          category={params.category}
          subcategory={params.subcategory}
          scenario={entry}
        />
      {/each}
    </div>
    <div class="mail">
      {#if params.subcategory === 'submissions'}
        {#if params.id === '1'}
          <MailGradesInquires1 />
        {:else if params.id === '2'}
          <Mail />
        {:else if params.id === '3'}
          <MailGradesInquires1 />
        {:else if params.id === '4'}
          <MailGradesInquires1 />
        {/if}
      {:else if params.subcategory === 'attendance'}
        {#if params.id === '1'}
          <MailGradesInquires2 />
        {:else if params.id === '2'}
          <MailGradesInquires2 />
        {/if}
      {/if}
    </div>
  {:else if params.category === 'registration'}
    <div class="side-bar">
      {#each Object.entries(registrationData) as entry}
        <SideBar
          category={params.category}
          subcategory={params.subcategory}
          scenario={entry}
        />
      {/each}
    </div>
    <div class="mail">
      {#if params.subcategory === 'exception'}
        {#if params.id === '1'}
          <MailGradesInquires1 />
        {:else if params.id === '2'}
          <MailGradesInquires2 />
        {/if}
      {:else if params.subcategory === 'rule'}
        {#if params.id === '1'}
          <MailGradesInquires2 />
        {:else if params.id === '2'}
          <MailGradesInquires2 />
        {:else if params.id === '3'}
          <MailGradesInquires2 />
        {/if}
      {/if}
    </div>
  {:else if params.category === 'others'}
    <div class="side-bar">
      {#each Object.entries(othersData) as entry}
        <SideBar
          category={params.category}
          subcategory={params.subcategory}
          scenario={entry}
        />
      {/each}
    </div>
    <div class="mail">
      {#if params.subcategory === ''}
        {#if params.id === '1'}
          <MailGradesInquires1 />
        {:else if params.id === '2'}
          <MailGradesInquires2 />
        {:else if params.id === '3'}
          <MailGradesInquires2 />
        {/if}
      {/if}
    </div>
  {/if}
</div>
