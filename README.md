# lostark_Calc 
Lostark 데미지 계산을 위한 웹페이지 입니다.

04/11 슬레이어 스킬배수 update
-> 해당 스킬배수 측정 시 만찬효과로 인한 스킬배수 부정확. 추후 업데이트 필요

04/13 아르카나, 스카우터, 블레이드 스킬배수 update.
-> 아르카나 루인관련 오피셜 딜 수치가 없으므로 계산 난해. 추후 확인 필요


4/14 검색 대상 캐릭터 공격력 파싱

-> LostArk OpenAPI를 통해 들어온 데이터 내 캐릭터 공격력 파싱

4/15 interface update및 변수 타입 명시

-> LostArk OpenAPI를 통해 받는 데이터 타입 interface update및 관련 변수 타입 interface 지정

4/17 캐릭터 장비 관련 interface 생성 및 장비 셋트옵션 관련 update

-> 캐릭터 착용중 장비 셋트옵션 파싱해서 현재 적용중(활성중)인 셋트효과 추출

4/18 캐릭터 무기 추가피해량 파싱, 장비 셋트옵션 효과 적용 update

-> LostArk OpenAPI를 통해 받은 장비 데이터 가공(셋트 옵션 효과 적용 및 무기 품질에 대한 추가 피해량 파싱) 및 각 컴포넌트 파일 및 변수 최적화

4/22 건슬 스킬계수 업데이트, 각인효과 피해량 적용(리퍼만 가능) 

-> 각인효과 피해계수 적용(현재 직업각인 리퍼만 적용 추후 타 클래스 적용 예정)

/*
*
*  직업별 Tripods 선택시 대미지 계수 설정 방법 고민 필요!
*/

예정) 

  1. 각인 옵션별 효과 정리 및 적용
  
  2. 서버 점검 시 혹은 에러 발생시 관련 안내 페이지(컴포넌트) 만들기

오류)

  1. 장비 아이템을 착용하지 않은 캐릭터 검색 시 에러 발생
  
  2. classInfo.ts내 각 클래스별 객체 중 useSkillInfo(스킬배수) 데이터 정리가 안된 캐릭터 검색 시에 에러 발생
  
  
  검색 가능한 클래스 : 슬레이어, 배틀마스터, 스카우터, 건슬링어, 아르카나, 소서리스, 블레이드, 리퍼, 기상술사
  
  검색 불가능한 클래스 : 워로드, 디스트로이어, 홀리나이트, 인파이터, 기공사, 창술사, 스트라이커, 데빌헌터, 블래스터, 호크아이, 서머너, 바드, 데모닉, 도화가
