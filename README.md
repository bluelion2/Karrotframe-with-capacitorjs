#  가까운 지역거래는 가지마켓 
(당근마켓 카피 프로젝트)


## KarrotFrame + CapacitorJS를 이용한 하이브리드 앱 만들기

- [당근마켓 프론트앤드 채용 세션](https://www.youtube.com/watch?v=EZOW5tE4CE0&t=4793s)에서 나온 KarrotFrame을 영상에 나온것처럼 만들어봤습니다.
- CRA + TS + emotionJS를 이용해 웹 개발 후, CapacitorJS를 이용해 Wrapping 해 봤습니다. CapacitorJS는 기존 Ionic에서 Cordova를 대체해서 새롭게 나온 하이브리드 앱을 만들수 있는 툴입니다.

---

### Deploy

- 공통
  - Capacitor를 공식문서에 따라서 설치하시면 됩니다. [link](https://capacitorjs.com/docs/getting-started)
  - CRA로 작업시 index.html이 /public에 있습니다. capacitor를 설치하면 생성되는  capacitor.config.json 에서 webdir을 build으로 수정하시면 됩니다.

- Android
  - 안드로이드의 경우 Android Studio가 있어야 합니다.
  ```
  - npx cap add android 
  - npx cap sync
  - npx cap copy
  - npx cap open android
  ```
  - 해당 명령을 실행하면 root 경로에 android 파일이 생성되고 Android Studio가 열립니다.
  - 사진과 같은 경로에서 build를 해서 apk를 생성할 수 있습니다.
  <img width="1680" alt="스크린샷 2021-02-12 오후 7 26 52" src="https://user-images.githubusercontent.com/34129711/107757084-6ac12000-6d68-11eb-8c0f-bc3d64945dbe.png">
  - build를 하게되면 해당 apk 파일이 하단 경로에 생깁니다. 또는 우측 하단의 알림의 View Files를 보면 바로 나옵니다.
    - `/android/app/build/outputs/apk/app-debug.apk`

  - 결과물
    ![android build](https://user-images.githubusercontent.com/34129711/107851940-c23abb00-6e50-11eb-946f-ce7d810e732a.gif)

  - 참고 [link](https://capacitorjs.com/docs/android)

- IOS
  - CRA + CapacitorJS로 빌드하면 시뮬레이터에서 확인이 안되는 이슈가 있어서 확인중.. (safari browser에서는 정상 노출됨 - 21.02.13)
    - ScreenHelmet가 최신 아이폰의 탈모도 확인 및 수정되는지 확인 필요함.
  - [link](https://capacitorjs.com/docs/ios)

--- 

## 소감

  - 정말 좋은 라이브러리라는 생각이 들었다. 이슈와 풀리퀘를 올리고 싶다...
    -  특히 theme를 지정해주기만 해서 android, ios의 자연스러운 push와 pop이 감탄스러웠다. 
    - 또 다른 한가지는 Navigator 내의 screen에서 Redux같은 상태관리가 필요없이 send를 통해서 데이터를 주고 받을 수 있는점도 흥미롭다. 
  - 다만 아직은 Karrotframe만으로 하이브리드 앱을 만들기보다는 Ionic을 쓰는 것이 더 나을것 같다. 영상 소개에도 나와있듯이 하이브리드 앱을 만들 수 있는 ionic과, 앱 내 웹뷰를 만드는 Karrotframe의 목적이 다르기 때문이다.
  - 소개 파트 말미에 라이센스 문제 때문에 아직 공개를 안하신다 하셨는데, 라이센스 문제만 없다면 사내 웹뷰를 쓰는 프로젝트에 바로 적용시켜보고 싶다.