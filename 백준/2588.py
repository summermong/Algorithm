x = input()
a = int(x[0])
b = int(x[1])
c = int(x[2])

y = input()
d = int(y[0])
e = int(y[1])
f = int(y[2])

print((a*100+b*10+c*1)*f)
print((a*100+b*10+c*1)*e)
print((a*100+b*10+c*1)*d)
print(((a*100+b*10+c*1)*f)+((a*100+b*10+c*1)*e*10)+((a*100+b*10+c*1)*d*100))
