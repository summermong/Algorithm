num = int(input())
i = 2
while num > 1:
    if num % i == 0:
        num = num // i     #이해 안됨
        print(i)
    else:
        i += 1