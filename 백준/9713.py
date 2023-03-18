test_case = int(input())

for i in range(test_case) :
    total = 0
    n = int(input())
    for i in range(1, n+1) :
        if i % 2 != 0 :
            total += i
    print(total)
