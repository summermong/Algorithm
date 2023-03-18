card = [1, 2, 3]
card2 = [1, 5, 6]

for i in card :
    for j in card2 :
        if i == j :
            print(1, end=" ")
            break
        else :
            print(0, end=" ")
            continue
