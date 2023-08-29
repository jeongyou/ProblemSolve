import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int m = Integer.parseInt(br.readLine());

        int[][] map = new int[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                //무한대로 초기화
                map[i][j] = 10000000; //최대 가중치 값 * 정점 개수 - 1 보다 큰 값 -> 100000 * 99 이상값
            }
            //자기 자신으로 향하는건 0으로
            map[i][i] = 0;
        }

        StringTokenizer st;
        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken()) - 1;
            int b = Integer.parseInt(st.nextToken()) - 1;
            int c = Integer.parseInt(st.nextToken());
            //시작 도시와 도착 도시를 연결하는 노선은 하나가 아닐 수 있다
            map[a][b] = Math.min(map[a][b], c);
        }

        //플로이드워셜
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
                }
            }
        }

        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                //갈 수 없는 경우에는 0을 출력
                if(map[i][j] == 10000000)
                    System.out.print("0 ");
                else
                    System.out.print(map[i][j] + " ");
            }
            System.out.println();
        }
    }
}