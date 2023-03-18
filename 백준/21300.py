bottle = list(input().split())
deposit = 0
for i in bottle :
    deposit += int(i)*5
print(deposit, end='')
