<Router {url}>

<div class="scenario-list">
    <div id="grades-container" class="lc">
        <div class="title-grades lc-title">성적</div>
        <hr>
        <div class="grades-corrections mc">
            <div class="mc-title">성적 정정</div>
            <ul class="sclist-ul">
                <li><Link to='grades/corrections/1'>예상보다 학점이 낮게 나온 상황</Link></li>
            </ul>
        </div>
        <div class="grades-inquiries mc">
            <div class="mc-title">점수 문의</div>
            <ul class="sclist-ul">
                <li><Link to='grades/inquiries/1'>시험 사항 확인 문제 조회</Link></li>
                <li><Link to='grades/inquiries/2'>채점 기준 정정(부분 점수)</Link></li>
                <li><Link to='grades/inquiries/3'>점수 분포 문의</Link></li>
            </ul>
        </div>
        <div class="grades-evaluations mc">
            <div class="mc-title">평가 방식</div>
            <ul class="sclist-ul">
                <li><Link to='grades/evaluations/1'>퀴즈 관련 질문(오픈북 여부)</Link></li>
                <li><Link to='grades/evaluations/2'>성적평가방식 (절평, 상평)</Link></li>
            </ul>
        </div>
    </div>
    
    
    <div id="courses-container" class="lc">
        <div class="title-courses lc-title">수업</div>
        <hr>
        <div class="courses-submissions mc">
            <div class="mc-title">과제 제출</div>
            <ul class="sclist-ul">
                <li><Link to='courses/submissions/1'>지각제출/재제출</Link></li>
                <li><Link to='courses/submissions/2'>최종 과제 제출</Link></li>
                <li><Link to='courses/submissions/3'>과제 내용 문의</Link></li>
                <li><Link to='courses/submissions/4'>과제 마감 기한 연기 문의</Link></li>
            </ul>
        </div>
        <div class="courses-attendance mc">
            <div class="mc-title">출결 사항</div>
            <ul class="sclist-ul">
                <li><Link to='courses/attendance/1'>공결/병결/개인 사유</Link></li>
                <li><Link to='courses/attendance/2'>녹강/배속</Link></li>
            </ul>
        </div>
    </div>
    
    
    <div id="registration-container" class="lc">
        <div class="title-registration lc-title">수강신청</div>
        <hr>
        <div class="registration-exception mc">
            <div class="mc-title">정원 외 수강신청</div>
            <ul class="sclist-ul">
                <li><Link to='registration/exception/1'>가능 여부</Link></li>
                <li><Link to='registration/exception/2'>허락 구하기</Link></li>
            </ul>
        </div>
        <div class="registration-rule mc">
            <div class="mc-title">이수 규정</div>
            <ul class="sclist-ul">
                <li><Link to='registration/rule/1'>역수강/선수과목 미이수</Link></li>
                <li><Link to='registration/rule/2'>수강제한/타학과 전공 끼어들기</Link></li>
                <li><Link to='registration/rule/3'>대체 과목 수강 가능 여부</Link></li>
            </ul>
        </div>
    </div>
    
    
    <div id="others-container" class="lc">
        <div class="others-title lc-title">기타 문의</div>
        <hr>
            <div class="mc">
                <ul class="sclist-ul">
                    <li><Link to='others/1'>교수님을 만나뵙기 위해 날을 잡아야 하는 상황</Link></li>
                    <li><Link to='others/2'>교수님 추천서가 필요한 상황</Link></li>
                    <li><Link to='others/3'>인턴십 신청</Link></li>
                </ul>
            </div>

    </div>
</div>
</Router>

<script>
    import {Router, Link} from 'svelte-routing';
    export let url = '';
</script>
