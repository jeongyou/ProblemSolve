import java.io.*;
import java.util.*;

public class Main {
    static int n;
    static int m;
    static ArrayList<Integer>[] G;
    static boolean[] hacked;
    static int[] cnt;
    static int bfs(int start) {
        Queue<Integer> Q = new LinkedList<>();
        Q.add(start);
        hacked[start] = true;
        int ret = 1;
        while (!Q.isEmpty()) {
            int cur = Q.poll();
            for (int x: G[cur]) {
                if (hacked[x]) continue;
                hacked[x] = true;
                Q.add(x);
                ret++;
            }
        }
        return ret;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        G = new ArrayList[n+1];
        for (int i = 0; i <= n; i++)
            G[i] = new ArrayList<>();

        cnt = new int[n+1];

        for(int i=1;i<=m;i++){
            st = new StringTokenizer(br.readLine());
            int com1 = Integer.parseInt(st.nextToken());
            int com2 = Integer.parseInt(st.nextToken());
            G[com2].add(com1);
        }

        int max = 0;
        for(int i=1;i<=n;i++){
            hacked = new boolean[n+1];
            cnt[i] = bfs(i);
            max = Math.max(max, cnt[i]);
        }

        for(int i=1;i<=n;i++){
            if(cnt[i] == max) {
                bw.write(i + " ");
            }
        }
        bw.flush();
    }
}
