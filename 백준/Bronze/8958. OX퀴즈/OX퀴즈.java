import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main
{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());

        for(int i=0;i<t;i++){
            String quizRes = br.readLine();
            int score = 0;
            int total = 0;
            char res;
            for(int j=0; j<quizRes.length(); j++){
                res = quizRes.charAt(j);
                if(res == 'O'){
                    score++;
                    total += score;
                }
                else{
                    score = 0;
                }
            }
            System.out.println(total);

        }
    }
}
