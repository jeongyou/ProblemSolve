import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        int[] songs = new int[8];
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int i = 0; i < songs.length; i++) {
            songs[i] = Integer.parseInt(st.nextToken());
        }

        int next = songs[0];

        int cnt = 0;

        if (songs[0] == 1) {
            for (int i = 1; i < songs.length; i++) {
                if (next < songs[i]) {
                    next = songs[i];
                    cnt++;
                } else {
                    System.out.println("mixed");
                    break;
                }
            }
            if (cnt == songs.length - 1) {
                System.out.println("ascending");
            }
        } else if (songs[0] == 8) {
            for (int i = 1; i < songs.length; i++) {
                if (next > songs[i]) {
                    next = songs[i];
                    cnt++;
                } else {
                    System.out.println("mixed");
                    break;
                }
            }
            if (cnt == songs.length - 1) {
                System.out.println("descending");
            }
        } else {
            System.out.println("mixed");
        }
    }
}
