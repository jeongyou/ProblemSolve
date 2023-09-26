import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int[] arr = new int[100001];
    static int start;
    static int end;
    static boolean[] checked = new boolean[100001];

    static int[] moveX = {-1, 1, 2};

    static int bfs(int start){
        Queue<spot> q = new LinkedList<>();
        q.add(new spot(start, 0));

        while(!q.isEmpty()){
            spot s = q.poll();
            if(s.x == end) return s.t;
            for(int i=0;i<3;i++){
                int newX;
                if(i < 2){
                    newX = s.x + moveX[i];
                }
                else {
                    newX = s.x * moveX[i];
                }
                if(newX < 0 || newX >= 100001 ) continue;
                if(checked[newX]) continue;

                q.add(new spot(newX,s.t+1));
                checked[newX] = true;
            }
        }
        return -1;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        start = Integer.parseInt(st.nextToken());
        end = Integer.parseInt(st.nextToken());

        Arrays.fill(arr,1);

        checked[start] = true;

        int minTime = bfs(start);
        System.out.println(minTime);

    }
}

class spot {
    int x;
    int t;
    spot (int x, int t) {
        this.x = x;
        this.t = t;
    }
}

