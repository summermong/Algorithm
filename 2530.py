h, m, s = map(int, input().split())
t = int(input())

x = (h+((m+((s+t)//60))//60))%24
y = (m+((s+t)//60))%60
z = (s+t)%60

print(x, y, z)