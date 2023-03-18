sum = 0

while True :
    lost_money = int(input())
    sum += lost_money
    if lost_money == -1 :
        break

print(sum+1)
