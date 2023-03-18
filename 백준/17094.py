length = int(input())
sentence = input()
two = alpha = 0

for i in sentence :
    if i == '2' :
        two += 1
    elif i == 'e' :
        alpha += 1

if two > alpha :
    print('2')
elif two < alpha :
    print('e')
else :
    print('yee')
