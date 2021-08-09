<script>
    //import { preventDefault } from "svelte/internal";

    let name="김시연";
    let major="자유전공학부";
    let studentId="19학번";
    const handleSubmit = () => {
        console.log(name, major, studentId);
    };


    // let bookmark1 = ["성적", "점수문의", "시험 사항 확인 문제 조회"];
    // let bookmark2 = ["수강신청", "", "정원외 수강신청 가능 여부"];
    // let bookmark3 = ["수업 이외", "", "교수님을 만나뵙기 위해 날을 잡아야 하는 상황"]
    
    let bookmarks = [
        { lc : "성적", mc: "점수문의", sc: "시험 사항 확인 문제 조회"},
        { lc: "수강신청", mc: "", sc: "정원외 수강신청 가능 여부"},
        { lc: "수업 이외", mc: "", sc: "교수님을 만나뵙기 위해 날을 잡아야 하는 상황"}
    ]

    let editing = false;
</script>
    


<div id="info-container">
    <div class="info-title">개인 정보</div>
    <label class="editing-btn">
        <input class="checkbox-rec" type=checkbox bind:checked={editing}>
        수정하기
    </label>
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
                <div class="name-info">{name}</div>
            </li>
            <li class="info-box info-box2"> 
                <div class="major-label">학과</div>
                <div class="major-info">{major}</div>
            </li>
            <li class="info-box info-box3">
                <div class="studentId-label">학번</div>
                <div class="studentId-info">{studentId}</div>
            </li>
        </ul>
    {/if}



</div>

<br/><br/>

<div id="bookmark-container">
    <div class="bookmark-title">자주 찾는 양식</div>
    <hr>
    <ul>
        {#each bookmarks as { lc, mc, sc }}
            <li class="bookmark-box">
                <div class="bookmark-lcmc">
                    <div class="large-category">{ lc }</div>
                    <div class="medium-category">{ mc }</div>
                </div>
                <div class="small-category">{ sc }</div>
            </li>
	    {/each}
    </ul>

</div>


<style>

</style>