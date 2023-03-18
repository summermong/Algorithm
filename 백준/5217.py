test_case = int(input())
for i in range(test_case) :
    num = int(input())
    print(f'Pairs for {num}:', end=' ')
    for i in range(1, num//2+1) :
        if i < num-i :
            if i != 1 :
                print(',', end=' ')
            print(i, num-i, end='')
    print()
