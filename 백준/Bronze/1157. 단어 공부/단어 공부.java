import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String word = br.readLine();
        word = word.toUpperCase(); //1번쨰 오류 : 꼭 word = 이런식으로 싸야함, word.toUpperCase(); 이렇게만 써서 오류남

        //알파벳 대문자 아스키 코드는 65~90까지
        // -65하면 0~25
        int[] alpa = new int[26];

        for(int i=0;i<word.length();i++){
            int w = (int)word.charAt(i) - 65;
            alpa[w]++;
        }

        int max = 0; //3번 째 오류 alpa[0]이 아닌 0으로 alpa[0]이 제일 큰 값일 수 있음
        int res = 0;
        int k = 0;

        for(int i=0;i<alpa.length;i++){
            if(alpa[i] > max){
                max = alpa[i];
                k = i;
                res = 0;
            }
            else if(alpa[i] == max)
                res = 1;
        }

        if(res == 1){
            System.out.println("?");
        }
        else{
            System.out.println((char)(k + 65)); //2번째 오류 꼭 65를 더해줘야 함
        }
    }
}
