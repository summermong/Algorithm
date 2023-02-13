T = int(input())
for i in range(T):
    number, str = input().split()
    number = int(number)
    for j in str :
        print(j*number, end='')
    print()
