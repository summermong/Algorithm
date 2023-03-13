li = []

for i in range(6) :
    score = input()
    li.append(score)


num = li.count('W')
if num == 0 :
    print(-1)
elif num < 3 :
    print(3)
elif num < 5 :
    print(2)
elif num < 7 :
    print(1)
