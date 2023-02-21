h, m = map(int, input().split())
t = int(input())

x = (h+((m+t)//60)) % 24
y = (m+t)%60
print(x, y)