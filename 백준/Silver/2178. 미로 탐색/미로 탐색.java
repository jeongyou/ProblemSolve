import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int N;
    static int M;
    static int[][] map;
    static boolean[][] checked;
    static int[] moveX = {0, 0, 1, -1};
    static int[] moveY = {1, -1, 0, 0};

    public static void bfs(int x, int y){
        Queue<Pair> q = new LinkedList<>();
        q.add(new Pair(x,y));

        while(!q.isEmpty()) {
            Pair pair = q.poll();
            for(int i=0;i<4;i++) {
                int newX = pair.x + moveX[i];
                int newY = pair.y + moveY[i];

                if(newX < 0 || newY < 0 || newX >= N || newY >= M) continue; //주어진 범위를 넘어 갔을 때
                if(checked[newX][newY] || map[newX][newY] == 0 ) continue; //방문 했거나 길이 아니면

                q.add(new Pair(newX, newY));
                map[newX][newY] = map[pair.x][pair.y] + 1; //이 부분 존나 이해 안됨;;
                checked[newX][newY] = true;
            }
        }

    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        map = new int[N][M];
        checked = new boolean[N][M];
        for(int i=0;i<N;i++){
            String str = br.readLine();
            char[] ch = str.toCharArray();
            for(int j=0;j<M;j++){
                map[i][j] = Character.getNumericValue(ch[j]);
            }
        }
        checked[0][0] =  true; //처음 시작점

        bfs(0,0);

        System.out.println(map[N-1][M-1]);
    }
}

class Pair {
    int x;
    int y;
    Pair(int x, int y){
        this.x = x;
        this.y = y;
    }
}
