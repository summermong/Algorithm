test_case = int(input())
title_list = []
level_list = []

for i in range(test_case) :
    title, level = (input().split())
    level = int(level)
    title_list.append(title)
    level_list.append(level)

print(title_list[level_list.index(min(level_list))])
