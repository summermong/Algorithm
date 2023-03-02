chicken = int(input())
flavor = list(map(int, input().split()))
sum = 0 

for i in range(3):
    if flavor[i] <= chicken :
        sum += flavor[i]
    else:
        sum += chicken

print(sum)