a, b, c = map(int, input().split())

if a == b == c :
    print(10000+(a*1000))
elif a == b != c :
    print(1000+(100*a))
elif b == c != a:
    print(1000+(100*b))
elif c == a != b:
    print(1000+(100*c))
elif a != b != c:
    print(max(a, b, c)*100)
