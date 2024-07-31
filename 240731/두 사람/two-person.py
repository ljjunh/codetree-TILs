a,b=map(str, input().split())
c,d=map(str,input().split())
if int(a)>=19 and b=='M' or int(c)>=19 and d=='M':
    print(1)
else:
    print(0)