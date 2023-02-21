li = []
for i in range(5):
    li.append(int(input()))
for j in range(5):
    if li[j] < 40:
        li[j] = 40
print((sum(li)//5))