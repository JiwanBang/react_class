# mock 란?

- mock = 가짜, 모조

- A=>B=>C라는 과정에서 A, B를 mocking해주면 A와 B는 무조건 정상이다 라는 가정 하에서 C를 테스트 가능

- mocking을 통해 A, B 없이 C만 테스트가 가능하고 분할해서 테스트하기에 A, B가 모킹 된 상태에서 error는 온전히 C에만 해당

- mockReturnValue => 해당하는 value를 배출하는 모조 함수
- mockResolvedValue/mockRejectedValue 성공/실패 결과 함수
