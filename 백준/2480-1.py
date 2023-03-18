dice = list(map(int, input().split()))

a = dice[0]
b = dice[1]
c = dice[2]

if a == b == c :
    print(10000+(a*1000))
elif a == b != c or b == c != a or c == a != b :
    sorted(dice)
    print(sorted(dice))
    print(dice[1])
elif a != b != c :
    print(100*max(dice))
