answer = int(input())
realanswer = str(answer)
contestants = list(input().split())

count = 0
for i in contestants :
    if i == realanswer :
        count += 1
print(count, end='')