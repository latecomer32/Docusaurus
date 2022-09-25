## Karabiner-elements로 설정하기

우선 만약 karabiner-elements가 설치되어 있지 않다면 Homebrew를 이용해서 설치를 해줄 수 있다.

> Homebrew는 Mac용 패키지 관리 애플리케이션이다. 만약 Homebrew에 대해서 잘 모르거나 설치해야 한다면 이 글 을 참고하면 된다.

```
$ brew install --cask karabiner-elements
```

그리고 [여기](https://ke-complex-modifications.pqrs.org/#korean_won_to_backtick) 에서 ₩ 키를 `키로 바꿔주는 complex_modifications rules을 받을 수 있다.

![](https://www.korecmblog.com/static/fe385ee0e4dc357b1e2bcb7e56925511/81cb7/img.webp)

오른쪽 Import 버튼을 누르면 karabiner-elements가 실행되면서 아래와 같은 창이 뜬다.

![img_1.png](https://www.korecmblog.com/static/5dc05fd65bb8f4de98f4649b929eb1a3/01adf/img_1.webp)

Import를 눌러주면 성공적으로 Import되었다는 창이 뜨면서 방금 가져온 룰을 활성화 할 수 있게 된다.

![img_2.png](https://www.korecmblog.com/static/73607683a8d994fb933bc85661c60af6/01adf/img_2.webp)
그 후 이 창이 뜨면 Enable을 눌러서 룰을 활성하면 된다.

![img_3.png](https://www.korecmblog.com/static/4e8feb3fc85a6da7654facdd8128afa5/01adf/img_3.webp)

위와 같이 Enabled rules에 추가되었다면 정상적으로 룰이 활성된 것으로 이제 ₩ 대신 를 `가 항상 입력된다.

만약 다시 원래 상태로 되돌리고 싶다면 Remove 버튼을 눌러 룰을 삭제해주면 된다.

이 방법의 경우 컴퓨터를 재부팅할 필요도 없고 애플리케이션 또한 다시 켤 필요가 없다.

출처: https://www.korecmblog.com/backtick-fix/#karabiner-elements%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
