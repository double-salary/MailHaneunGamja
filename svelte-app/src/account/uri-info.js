const SCENARIOs = {
    "grades": {
        "slug": "성적",
        "corrections": {
            "slug": "성적 정정",
            "scenarios": {
                "1": "예상보다 학점이 낮게 나온 상황"
            }
        },
        "inquiries": {
            "slug": "점수 문의", 
            "scenarios" : {
                "1" : "시험 사항 확인 문제 조회",
                "2" : "채점 기준 정정",
                "3" : "점수 분포 문의"
            }
        },
        "evaluations": {
            "slug": "평가 방식",
            "scenarios": {
                "1" : "퀴즈 관련 문의",
                "2" : "성적평가방식"
            }
        }
    },
    "courses": {
        "slug" : "수업",
        "submissions": {
            "slug" : "과제 제출",
            "scenarios" : {
                "1" : "지각제출/재제출",
                "2" : "(최종) 과제 제출",
                "3" : "과제 내용 문의",
                "4" : "과제 마감 기한 연기 문의"
            }

        },
        "attendance": {
            "slug": "출결 사항",
            "scenarios": {
                "1" : "개인 사유",
                "2" : "녹화 강의/배속"
            }
        },
    },
    "registration": {
        "slug" : "수강신청",
        "exception": {
            "slug": "정원외 수강신청",
            "scenarios" : {
                "1" : "가능 여부",
                "2" : "개인 사유"
            }
        },
        "rule": {
            "slug" : "이수 규정",
            "scenarios" : {
                "1": "역수강/선수과목 미이수",
                "2": "수강제한/타학과 과목 이수",
                "3" : "대체과목 수강 가능 여부"
            }
        }
    },
    "others": {
        "slug" : "기타문의",
        "other": {
            "scenarios" : {
                "1" : "면담 신청",
                "2" : "추천서 문의",
                "3" : "인턴십 신청"
            }
        }
    }
};

function getTitle(uri) {

    let segments = uri.split('/');
    console.log(segments);

    // othes/{scenarioId}
    if ( segments.length == 4 ) {
        let category1 = segments[2];
        let scenarioId = segments[3];

        let category1slug = SCENARIOs[category1]['slug'];
        let title = SCENARIOs[category1]['scenarios'][scenarioId];

        return category1slug + "/" + title;
    } 
    else if (segments.length == 5) {
        let category1 = segments[2];
        let category1slug = SCENARIOs[category1]['slug'];
        let category2 = segments[3];
        let scenarioId = segments[4];
        let category2slug = SCENARIOs[category1][category2]['slug'];
        let title = SCENARIOs[category1][category2]['scenarios'][scenarioId];

        return `${category1slug}/${category2slug}/${title}`
    }
    
}


module.exports = {
    SCENARIOs: SCENARIOs,
    getTitle: getTitle
};