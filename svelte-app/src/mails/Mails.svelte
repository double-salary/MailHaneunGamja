<script>
  import Sidebar from './SideBar.svelte';
  import Mail from './Mail.svelte';
  import css from './Mail.css';

  const data = {
    평가방식문의: ['퀴즈 평가', '성적 평가'],
    과제문의: [
      '지각제출/재제출',
      '최종 자료 제출',
      '과제 내용',
      '과제 마감기한',
    ],
    출결문의: ['공결/병결/개인 사유', '녹강/배속'],
  };
</script>

<div class="container">
  <div class="side-bar">
    {#each Object.entries(data) as entry}
      <Sidebar {entry} />
    {/each}
  </div>
  <div class="mail">
    <Mail />
  </div>
</div>
