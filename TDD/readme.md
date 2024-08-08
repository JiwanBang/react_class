# TDD

```bash
create-react-app jest-basic --template typescript

npm test
테스트 한번 돌아가고 a 입력

@testing-library/react 최신버전으로 깔기
npm i @tesing-library/react@latest
(매번 새 프로젝트마다 같이 해주기)

```

- 리액트 자체에 있는 테스트 기능(jest)
- 이제 npm start 대신 npm test로 가동

## jest란?

- 코드만으로 테스트를 돌리는 용도
- npx jest

## App.test.tsx

- App.tsx 내용을 가지고 App.test.tsx에서 test

```bash
const linkElement = screen.getByText(/learn react/i);
/learn react/i => 정규표현식(무언가를 찾기 위해 쓰임)
learn react 텍스트가 있으면 passed, 없으면 failed
```

- expect(linkElement).toBeInTheDocument(); => 무엇을 확인할 것인지 jest의 method
- expect: 인자를 테스트하겠다. toBeinTheDocument: 문서 안에 존재하는가?
- getByText => 인자를 가지고있는 엘리멘트를 가지고 옴

- expect(test 결과물)/toEqual, toBeInTheDocument .... (비교군, matcher)

- 입력한 것만 가지고 오므로 코드로써 확인이 가능

## TDD 방식

- TEST를 먼저 만들고 맞춰서 APP을 구현
- TEST가 무엇을 원하는지(어떤 결과를 낼 건지) 먼저 정하고 나서 나중에 구현!
