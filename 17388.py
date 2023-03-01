s, k, h = map(int, input().split())

if s+k+h >= 100 :
    print("OK")
elif s+k+h < 100 :
    li = []
    li.append(s)
    li.append(k)
    li.append(h)
    if li[0] == min(li) :
        print("Soongsil")
    if li[1] == min(li) :
        print("Korea")
    if li[2] == min(li) :
        print("Hanyang") 