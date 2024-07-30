arr = list(map(int, input().split()))
res = 0

for i in arr:
    if i <90:
        break
    elif i <95:
        res += 50000
    else:
        res += 100000
print(res)