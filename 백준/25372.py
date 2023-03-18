test_case = int(input())

for i in range(test_case):
    password = input()
    if 6 <= len(password) <= 9 :
        print('yes')
    else :
        print('no')
