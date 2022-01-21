# Node-Express
Study Node-Express!!

# Dwitter 구현
## Project Start
### `npm start or yarn start`

## TDD
> npm run test
>
> Unit test, Integration test, E2E test
>
> 보통 Unit, Integration test를 많이 함.
>
> 실패하는 테스트를 먼저 하도록 하자.
>
> Unit test -> 내가 작성하는 함수, 클래스가 제대로 동작하나..?(개별적인 비즈니스로직 테스트)
>
> Backend에서 Integration테스트 너무너무 중요!!(DB, MQ, Service) -> CLient가 사용하는 것 테스트

## Jest 사용
## node mocks http 사용
`npm i --save-dev jest node-mocks-http`
`빠르고 간결`
`jest는 import 사용 안됨`
`npm i --save-dev jest @babel/plugin-transform-modules-commonjs`
`jest.config.mjs -> collectCoverageFrom: ['**/*.{js.jsx}', '!**/node_modules/**'],`
> .env.test작성
>
> jest.config.mjs -> setupfiles 작성
>
> jest.config.mjs -> collectCoverageFrom: ['**/*.{js.jsx}', '!**/node_modules/**'],
>
> window 환경 -> https://www.npmjs.com/package/cross-env 참고
>
> 기능 추가 -> 테스트코드 작성! -> (요구사항을 명확히 알아야함)
>
> 기존의 프로젝트가 있는 경우(Legacy) -> TDD (X) -> 프로젝트의 구조와 기능을 알아야함.
>
> 중요한 기능 먼저 작성하거나, 수정하는 곳만 추가하기
>
> 단위 테스트시 DB에 접근하는 것에 의존하면 안되므로 Mock 사용. ( faker 버전 -> npm i --save-dev faker@5.5.3 )