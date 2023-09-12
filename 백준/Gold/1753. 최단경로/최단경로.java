
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

class Node implements Comparable<Node> {
    int v, w;

    public Node(int v, int w) {
        this.v = v;
        this.w = w;
    }

    // 우선순위 큐에서 사용시 최솟값 정렬
    //자동으로 호출
    @Override
    public int compareTo(Node n) {
        return this.w - n.w;
    }
}

public class Main {
    static ArrayList[] list;
    static int dist[];

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int V = Integer.parseInt(st.nextToken()); //노드의 개수
        int E = Integer.parseInt(st.nextToken()); // 간선 개수
        int K = Integer.parseInt(br.readLine()) - 1; // 출발 노드, 0부터 시작이니까

        list = new ArrayList[V]; //들어온 자료 저장
        dist = new int[V]; //거리 저장 배열

        for (int i = 0; i < V; i++) {
            list[i] = new ArrayList<Node>(); //Node 클래스 만들기
            dist[i] = Integer.MAX_VALUE; //큰수로 초기화
        }

        for (int i = 0; i < E; i++) {
            st = new StringTokenizer(br.readLine());

            int u = Integer.parseInt(st.nextToken()) - 1;
            int v = Integer.parseInt(st.nextToken()) - 1 ;
            int w = Integer.parseInt(st.nextToken());

            list[u].add(new Node(v, w));

        }
        //여기까지하고 다익스트라 알고리즘 함수 만들기
        dijkstra(K);

        for (int i = 0; i < V; i++) {
            if(dist[i] == Integer.MAX_VALUE)
                System.out.println("INF");
            else
                System.out.println(dist[i]);
        }
    }

    static void dijkstra(int start) {
        PriorityQueue<Node> pq = new PriorityQueue<>();
        dist[start] = 0;
        pq.add(new Node(start, 0)); //시작 점

        while (!pq.isEmpty()) {
            Node now = pq.poll(); //가장 우선 순위가 높은 요소를 큐에서 제거하고 반환

            int len = list[now.v].size(); //연결된 노드의 개수

            for (int i = 0; i < len; i++) {
                Node next = (Node) list[now.v].get(i);
                if (dist[next.v] > now.w + next.w) {
                    dist[next.v] = now.w + next.w;
                    pq.add(new Node(next.v, dist[next.v]));
                }
            }
        }
    }
}