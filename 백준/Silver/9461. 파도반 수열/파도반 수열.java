import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(bf.readLine());
		
		long[] dp = new long[101];
		dp[0] = 1;
		dp[1] = 1;
		dp[2] = 1;
		
		//int N = 1;
		
		int[] N = new int[101];
		
		for(int i=0;i<T;i++) {
			N[i] = Integer.parseInt(bf.readLine());
		}
		
		for(int j=0;j<T;j++) {
			int n = N[j];
			if(n>3) {
				for(int i=3;i<n;i++) {
					dp[i] = dp[i-2] + dp [i-3];
				}
			
			}
			
			
			System.out.println(dp[n-1]);
		}
		
	}

}
