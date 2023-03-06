A, B = map(int, input().split())

larger = max(A, B)
smaller = min(A, B)

count = larger - smaller

if count != 0 :
    print(count-1)
else :
    print(0)

for i in range(smaller+1, larger) :
    print(i, end=" ")