<script>
    import { preventDefault } from "svelte/internal";

    let name="김시연";
    let major="자유전공학부";
    let studentId="19학번";
    const handleSubmit = () => {
        console.log(name, major, studentId);
    };


    let bookmark1 = ["성적", "점수문의", "시험 사항 확인 문제 조회"];
    let bookmark2 = ["수강신청", "", "정원외 수강신청 가능 여부"];
    let bookmark3 = ["수업 이외", "", "교수님을 만나뵙기 위해 날을 잡아야 하는 상황"]


    let editing = false;
</script>
    


<div class="info-container">
    <div>개인 정보</div>
    <label>
        <input type=checkbox bind:checked={editing}>
        수정하기
    </label>
    <hr>
    
    {#if editing}
            <!-- 수정하기 form -->
        <!-- <form on:submit|preventDefault={handleSubmit}>      
            <input type="text" placeholder="" bind:value={name} />
            <input type="text" placeholder="" bind:value={major} />
            <input type="text" placeholder="" bind:value={studentId} />
            <button>Add Person</button>
        </form> -->
    {:else}
        <ul>
            <li>
                <div>이름</div>
                <div>{name}</div>
            </li>
            <li>
                <div>학과</div>
                <div>{major}</div>
            </li>
            <li>
                <div>학번</div>
                <div>{studentId}</div>
            </li>
        </ul>
    {/if}



</div>

<br/><br/>

<div class="bookmark-container">
    <div>자주 찾는 양식</div>
    <hr>
    <ul>
        <li>
            <div>
                <div>{bookmark1[0]}</div>
                <div>{bookmark1[1]}</div>
            </div>
            <div>{bookmark1[2]}</div>
        </li>
        <li>
            <div>
                <div>{bookmark2[0]}</div>
            </div>
            <div>{bookmark2[2]}</div>
        </li>
        <li>
            <div>
                <div>{bookmark3[0]}</div>
            </div>
            <div>{bookmark3[2]}</div>
        </li>
    </ul>

</div>


<style>

</style>