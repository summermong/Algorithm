N = int(input())
prize = 0
for i in range(N):
    a, b, c = map(int, input().split())
    val = 0
    if a == b == c :
        val = 10000 + a*1000
    elif a == b or a == c :
        val = 1000 + a*100
    elif b == c :
        val = 1000 + b*100
    else :
        val = max([a, b, c,])*100    # 여기부터 이해가 안됨
    prize = max(val, prize)
print(prize)