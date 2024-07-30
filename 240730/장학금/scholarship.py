a,b = map(int, input().split())
res = 0
if a >= 90 and b >=95:
    res += 100000
elif a>= 90 and b >=90:
    res += 50000
print(res)