<Router {url}>
<script>
      document.body.classList.remove('disable-scroll');
</script>
<div class="scenario-list">
    <div id="grades-container" class="lc">
        <div class="title-grades lc-title">성적</div>
        <hr>
            <ul class="sclist-ul">
                <li><a href='../#/mails/grades/corrections/1'>예상보다 낮은 학점</a></li>
                <li><a href='../#/mails/grades/inquiries/1'>시험 점수 조회</a></li>
                <li><a href='../#/mails/grades/inquiries/2'>채점 기준 정정</a></li>
                <li><a href='../#/mails/grades/inquiries/3'>점수 분포 문의</a></li>
                <li><a href='../#/mails/grades/evaluations/1'>퀴즈 평가</a></li>
                <li><a href='../#/mails/grades/evaluations/2'>성적 평가</a></li>
            </ul>
    </div>
    
    
    <div id="courses-container" class="lc">
        <div class="title-courses lc-title">수업</div>
        <hr>
            <ul class="sclist-ul">
                <li><a href='../#/mails/courses/submissions/1'>지각제출/재제출</a></li>
                <li><a href='../#/mails/courses/submissions/2'>최종 자료 제출</a></li>
                <li><a href='../#/mails/courses/submissions/3'>과제 내용 문의</a></li>
                <li><a href='../#/mails/courses/submissions/4'>과제 마감기한</a></li>
                <li><a href='../#/mails/courses/attendance/1'>공결/병결/개인 사유</a></li>
                <li><a href='../#/mails/courses/attendance/2'>녹강/배속</a></li>
            </ul>
    </div>
    
    
    <div id="registration-container" class="lc">
        <div class="title-registration lc-title">수강신청</div>
        <hr>
            <ul class="sclist-ul">
                <li><a href='../#/mails/registration/exception/1'>가능 여부</a></li>
                <li><a href='../#/mails/registration/exception/2'>허락 문의</a></li>
                <li><a href='../#/mails/registration/rule/1'>수강 제한/타 학과 전공</a></li>
                <li><a href='../#/mails/registration/rule/2'>역수강/선수과목 미이수</a></li>
                <li><a href='../#/mails/registration/rule/3'>대체 과목 수강 가능 여부</a></li>
            </ul>
    </div>
    
    
    <div id="others-container" class="lc">
        <div class="others-title lc-title">기타 문의</div>
        <hr>
            <ul class="sclist-ul">
                <li><a href='../#/mails/others/other/1'>면담 문의</a></li>
                <li><a href='../#/mails/others/other/2'>추천서 문의</a></li>
                <li><a href='../#/mails/others/other/3'>인턴십 신청</a></li>
            </ul>
    </div>
    <br>
</div>

</Router>

<script>
    import {Router, Link} from 'svelte-routing';
    export let url = '';
</script>
