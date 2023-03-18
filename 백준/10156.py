# 과자 가격 snack원, 사려는 과자 개수 price개, 돈 Money원
# Money >= snack*price 일 경우에는 0원이 출력되면 된다

snack, price, money = map(int, input().split())
if snack*price > money :
    mom = (snack*price) - money
    print(mom)
elif snack*price <= money :
    print(0)
