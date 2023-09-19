import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int[][] arr;
    static boolean[] visited;

    static int n;
    static int cnt = 0;

    static void dfs(int start){
        visited[start] = true;
        for(int i=1;i<=n;i++) {
            if(arr[start][i] == 1 && !visited[i]){
                cnt++;
                dfs(i);
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());
        int line = Integer.parseInt(br.readLine());

        arr = new int[n+1][n+1];
        visited = new boolean[n+1];

        for(int i=1; i<=line;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            arr[start][end] = 1;
            arr[end][start] = 1;
        }

        dfs(1);

        System.out.println(cnt);
    }
}
