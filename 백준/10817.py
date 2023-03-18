A, B, C = map(int, input().split())
if A >= B >= C :
    print(B)
elif B >= C >= A :
    print(C)
elif C >= A >= B :
    print(A)
elif C >= B >= A :
    print(B)
elif B >= A >= C :
    print(A)
elif A >= C >= B :
    print(C)

num_list = list(map(int, input().split()))
num_list.sort(reverse=True)
del num_list[0]
print(num_list[0])
