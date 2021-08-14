<svelte:options immutable={false} />

<script>

  import { onMount } from 'svelte';
  import MutableTodo from './MutableTodo.svelte';
  import { getUserAction, updateUserAction } from '../store/user-data';
  document.body.classList.remove('disable-scroll');

  let name = null;
  let major = null;
  let studentId = null;
  let bookmarks = [];

  $: userInfo = {
    name: name ? name : null,
    major: major ? major : null,
    studentId: studentId ? studentId : null,
  };

  onMount(async () => await onMountLaunch());

  async function onMountLaunch() {
    var userProfile = await getUserAction();
    name = userProfile.name;
    major = userProfile.major;
    bookmarks = userProfile.bookmarks;
  }

  const handleSubmit = async () => {
    if (editing) {
      console.log(name, major, studentId);
      console.log(userInfo);
      var updatedUser = await updateUserAction(userInfo);
      name = updatedUser.name;
      major = updatedUser.major;
      studentId = updatedUser.studentId;
    }
  };

  $: bookmarks = [
    {
      marked: true,
      lc: '성적',
      mc: '점수문의',
      sc: '시험 사항 확인 문제 조회',
    },
    { marked: true, lc: '수강신청', sc: '정원외 수강신청 가능 여부' },
    {
      marked: true,
      lc: '수업 이외',
      sc: '교수님을 만나뵙기 위해 날을 잡아야 하는 상황',
    },
  ];

  function toggle(index) {
    bookmarks = bookmarks.map((bookmark) => {
      if (bookmark === bookmarks[index]) {
        console.log(bookmark.id);
        return {
          index,
          marked: !bookmark.marked,
          lc: bookmark.lc,
          mc: bookmark.mc,
          sc: bookmark.sc,
        };
      }
      return bookmark;
    });
    clear(index);
  }

  function clear(index) {
    console.log(bookmarks);
    bookmarks = bookmarks.filter((b) => b.marked);
    console.log(bookmarks);
  }

  let editing = false;
</script>



<div class="mypage">
    <div id="info-container">
        <div class="info-title-wrap">
            <div class="info-title">개인 정보</div>
            <label class="editing-btn">
                <input class="checkbox-rec" type=checkbox bind:checked={editing} on:click={handleSubmit}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6024 1.78969C12.9951 1.43272 13.5948 1.43273 13.9875 1.78971C14.0022 1.80313 14.0222 1.82283 14.0997 1.90032C14.1772 1.97781 14.1969 1.99782 14.2103 2.01258C14.5673 2.40527 14.5673 3.00494 14.2103 3.39762C14.1969 3.41239 14.1772 3.4324 14.0997 3.50988L13.403 4.20662C12.5182 4.20707 11.7929 3.48181 11.7933 2.59708L12.4901 1.9003C12.5676 1.82281 12.5876 1.80311 12.6024 1.78969ZM10.5351 3.85532L3.3166 11.0738C2.88198 11.5084 2.72547 11.6681 2.60002 11.8426C2.48129 12.0078 2.38078 12.1853 2.30025 12.3721C2.21514 12.5695 2.15869 12.7859 2.00962 13.3821L1.80687 14.1931L2.61787 13.9904C3.21414 13.8413 3.43053 13.7848 3.62789 13.6997C3.81467 13.6192 3.99219 13.5187 4.15735 13.4C4.33186 13.2745 4.49161 13.118 4.92621 12.6834L12.1447 5.4649C11.4289 5.14873 10.8513 4.57113 10.5351 3.85532ZM15.0112 0.663517C14.0381 -0.221154 12.5519 -0.221175 11.5787 0.66347C11.5333 0.704694 11.4854 0.752638 11.4259 0.812139L11.4139 0.824095L2.24041 9.99757L2.19727 10.0407C1.8207 10.4172 1.57063 10.6671 1.36423 10.9543C1.18143 11.2086 1.02667 11.4819 0.902669 11.7695C0.762655 12.0942 0.676949 12.4372 0.547879 12.9538L0.533091 13.013L0.0227372 15.0544C-0.0420938 15.3138 0.0338897 15.5881 0.222903 15.7771C0.411916 15.9661 0.686241 16.0421 0.945565 15.9773L2.987 15.4669L3.04619 15.4521C3.56277 15.323 3.90582 15.2373 4.23052 15.0973C4.5181 14.9733 4.79142 14.8186 5.04571 14.6358C5.33283 14.4294 5.58281 14.1793 5.95926 13.8028L6.00241 13.7596L15.1759 4.58608L15.1879 4.5741C15.2473 4.51467 15.2953 4.46669 15.3365 4.42137C16.2211 3.44819 16.2212 1.96206 15.3366 0.988865C15.2953 0.943518 15.2474 0.895593 15.1879 0.836116L15.1759 0.824148L15.164 0.812188C15.1045 0.752686 15.0566 0.704742 15.0112 0.663517Z" fill="#9189EB"/>
                </svg>
                {#if editing}수정완료 {:else}수정하기 {/if}
            </label>
        </div>
    
        <hr>
        
        {#if editing}
            <ul id="editing-ul">
                <li class="info-box info-box1">
                    <div class="name-label">이름</div>
                    <input class="input-name" type="text" placeholder="(예) 홍길동" bind:value={name} />
                </li>
                <li class="info-box info-box2"> 
                    <div class="major-label">학과</div>
                    <input class="input-major" type="text" placeholder="(예) 영어영문학과" bind:value={major} />
                </li>
                <li class="info-box info-box3">
                    <div class="studentId-label">학번</div>
                    <input class="input-studentId" type="text" placeholder="(예) 18학번 또는 2021-12345" bind:value={studentId} />
                </li>
            </ul>
            <!-- 수정하기 form -->          
    
        {:else}
            <ul id="static-ul">
                <li class="info-box info-box1">
                    <div class="name-label">이름</div>
                    <div class="name-info" placeholder="홍길동" contenteditable="true">{name}</div>
                </li>
                <li class="info-box info-box2"> 
                    <div class="major-label">학과</div>
                    {#if {major} == undefined} <div class="major-info">전공</div> {:else}<div class="major-info">{major}</div> {/if}
                </li>
                <li class="info-box info-box3">
                    <div class="studentId-label">학번</div>
                    {#if {studentId} == undefined} <div class="studentId-info">학번</div> {:else}<div class="studentId-info">{studentId}</div> {/if}
                </li>
            </ul>
        {/if}
    
    
    
    </div>
    
    <br/><br/>
    
    <div id="bookmark-container">
        <div class="bookmark-title">자주 찾는 양식</div>
        <hr>
        <ul>
            <!-- {#each bookmarks as bookmark, id}
                    <MutableTodo {bookmark} on:click = "{() => toggle(id)}"></MutableTodo>
            {/each} -->
        </ul>
        <br/><br/>
    
    </div>

</div>


<style>
</style>
