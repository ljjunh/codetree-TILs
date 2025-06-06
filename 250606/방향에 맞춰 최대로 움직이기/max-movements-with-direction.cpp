#include <iostream>

using namespace std;

int n;
int num[4][4];
int move_dir[4][4];
int r, c, mx = 0;

const int dy[] = {0,-1, -1, 0, 1, 1, 1, 0, -1};
const int dx[] = {0, 0, 1, 1, 1, 0, -1, -1, -1};

void go(int y, int x, int cnt){
    mx = max(mx, cnt);
    
    int d = move_dir[y][x];
    int v = num[y][x];
    for(int i = 1; i < n; i++){
        int ny = y + dy[d] * i;
        int nx = x + dx[d] * i;
        if(ny < 0 || ny >= n || nx < 0 || nx >= n) break;
        if(num[ny][nx] > v) go(ny, nx, cnt + 1);
    }
}

int main() {
    cin >> n;

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> num[i][j];

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> move_dir[i][j];

    cin >> r >> c;

    // Please write your code here.

    go(r-1, c-1, 0);

    cout << mx << "\n";

    return 0;
}
