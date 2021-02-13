#  가까운 지역거래는 가지마켓 
(당근마켓 카피 프로젝트)


## KarrotFrame + CapacitorJS를 이용한 하이브리드 앱 만들기

- [당근마켓 프론트앤드 채용 세션](https://www.youtube.com/watch?v=EZOW5tE4CE0&t=4793s)에서 나온 KarrotFrame을 가지고 카피프로젝트를 만들어봤습니다.
- CRA + TS + emotionJS를 이용해 웹 개발 후, CapacitorJS를 이용해 Android, IOS 하이브리드 앱을 만들어 보았습니다. CapacitorJS는 기존 Ionic에서 Cordova를 대체해서 새롭게 나온 하이브리드 앱을 만들수 있는 툴입니다.

---

### Deploy

- 공통
  - Capacitor를 공식문서에 따라서 설치하시면 됩니다. [link](https://capacitorjs.com/docs/getting-started)
  - CRA로 작업시 index.html이 /public에 있습니다. capacitor를 설치하면 생성되는  capacitor.config.json 에서 webdir을 public/으로 수정하시면 됩니다.


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
  - build를 하게되면 해당 apk 파일이 하단 경로에 생깁니다.
  `/android/app/build/outputs/apk/app-debug.apk`

  - 참고 : [link](https://capacitorjs.com/docs/android)


- IOS
  - [link](https://capacitorjs.com/docs/ios)
