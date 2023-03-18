# @ = *3
# % = +5
# # = -7

M = int(input())
for i in range(M):
    m = list(map(str, input().split()))   
    #한 줄 개념을 리스트로 받아야 함. 화성 수학식 연산자를 str로 인식해야 함.
    E = float(m[0])
    #화성 수학 식의 가장 앞의 수는 정수이거나 소수 첫째 자리까지라서 float로 설정.
    for i in range(1, len(m)):
    # 0번째는 E라서 1부터 시작하며 연산자가 몇 개일지 모르니 len(m)으로 끝 설정.
        if m[i] == '@':
            E *= 3
            # 여긴 왜 print를 안 써도 되는 걸까?
        if m[i] == '%':
            E += 5
        if m[i] == '#':
            E -= 7
    print('{:.2f}'.format(E))
    # 소수 첫째 자리까지 출력하는 식 공부 필요.
