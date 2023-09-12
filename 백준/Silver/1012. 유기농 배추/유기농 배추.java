import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int[] dx = new int[]{1, -1, 0, 0};
    static int[] dy = new int[]{0, 0, 1, -1};
    static int n, m;
    static int map[][];

    static int cnt = 0;
    public static void dfs(int x, int y) {
        map[y][x] = 0;
        for (int i = 0; i < 4; i++) {
            int nx = x+dx[i];
            int ny = y+dy[i];
            if(!(0 <= nx && nx < m)) continue;
            if(!(0 <= ny && ny < n)) continue;
            if(map[ny][nx] == 0) continue;
            dfs(nx, ny);
        }

    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());

        for (int i = 0; i < t; i++) {
            cnt = 0;
            StringTokenizer st = new StringTokenizer(br.readLine());
            n = Integer.parseInt(st.nextToken()); //y
            m = Integer.parseInt(st.nextToken()); //x
            map = new int[n][m];

            int k = Integer.parseInt(st.nextToken());

            for (int j = 0; j < k; j++) {
                st = new StringTokenizer(br.readLine());
                int y = Integer.parseInt(st.nextToken());
                int x = Integer.parseInt(st.nextToken());
                map[y][x] = 1;
            }
            for(int a=0;a<n;a++){
                for(int b = 0; b<m;b++){
                    if(map[a][b] == 1){
                        dfs(b, a); //x, y
                        cnt++;
                    }
                }
            }

            System.out.println(cnt);

        }
    }
}
