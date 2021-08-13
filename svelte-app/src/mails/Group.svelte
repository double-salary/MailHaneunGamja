<script>
  /* css */
  import MailCss from './Mail.css';
  import SideBarCss from './Sidebar.css';

  /* svelte */
  import SideBar from './SideBar.svelte';
  /* mail - grades */
  import MailGradesCorrections1 from './mail/grades/MailGradesCorrections1.svelte';
  import MailGradesEvaluations1 from './mail/grades/MailGradesEvaluations1.svelte';
  import MailGradesEvaluations2 from './mail/grades/MailGradesEvaluations2.svelte';
  import MailGradesInquiries1 from './mail/grades/MailGradesInquiries1.svelte';
  import MailGradesInquiries2 from './mail/grades/MailGradesInquiries2.svelte';
  import MailGradesInquiries3 from './mail/grades/MailGradesInquiries3.svelte';
  /* mail - courses */
  import MailCoursesAttendance1 from './mail/courses/MailCoursesAttendance1.svelte';
  import MailCoursesAttendance2 from './mail/courses/MailCoursesAttendance2.svelte';
  import MailCoursesSubmissions1 from './mail/courses/MailCoursesSubmissions1.svelte';
  import MailCoursesSubmissions2 from './mail/courses/MailCoursesSubmissions2.svelte';
  import MailCoursesSubmissions3 from './mail/courses/MailCoursesSubmissions3.svelte';
  import MailCoursesSubmissions4 from './mail/courses/MailCoursesSubmissions4.svelte';
  /* mail - registration */
  import MailRegistrationException1 from './mail/registration/MailRegistrationException1.svelte';
  import MailRegistrationException2 from './mail/registration/MailRegistrationException2.svelte';
  import MailRegistrationRule1 from './mail/registration/MailRegistrationRule1.svelte';
  import MailRegistrationRule2 from './mail/registration/MailRegistrationRule2.svelte';
  import MailRegistrationRule3 from './mail/registration/MailRegistrationRule3.svelte';
  /* mail - others */
  import MailOthers1 from './mail/others/MailOthers1.svelte';
  import MailOthers2 from './mail/others/MailOthers2.svelte';
  import MailOthers3 from './mail/others/MailOthers3.svelte';

  /* url params */
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
          <MailGradesCorrections1 />
        {/if}
      {:else if params.subcategory === 'inquiries'}
        {#if params.id === '1'}
          <MailGradesInquiries1 />
        {:else if params.id === '2'}
          <MailGradesInquiries2 />
        {:else if params.id === '3'}
          <MailGradesInquiries3 />
        {/if}
      {:else if params.subcategory === 'evaluations'}
        {#if params.id === '1'}
          <MailGradesEvaluations1 />
        {:else if params.id === '2'}
          <MailGradesEvaluations2 />
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
          <MailCoursesSubmissions1 />
        {:else if params.id === '2'}
          <MailCoursesSubmissions2 />
        {:else if params.id === '3'}
          <MailCoursesSubmissions3 />
        {:else if params.id === '4'}
          <MailCoursesSubmissions4 />
        {/if}
      {:else if params.subcategory === 'attendance'}
        {#if params.id === '1'}
          <MailCoursesAttendance1 />
        {:else if params.id === '2'}
          <MailCoursesAttendance2 />
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
          <MailRegistrationException1 />
        {:else if params.id === '2'}
          <MailRegistrationException2 />
        {/if}
      {:else if params.subcategory === 'rule'}
        {#if params.id === '1'}
          <MailRegistrationRule1 />
        {:else if params.id === '2'}
          <MailRegistrationRule2 />
        {:else if params.id === '3'}
          <MailRegistrationRule3 />
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
      {#if params.subcategory === 'other'}
        {#if params.id === '1'}
          <MailOthers1 />
        {:else if params.id === '2'}
          <MailOthers2 />
        {:else if params.id === '3'}
          <MailOthers3 />
        {/if}
      {/if}
    </div>
  {/if}
</div>
