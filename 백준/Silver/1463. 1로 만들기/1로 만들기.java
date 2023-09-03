import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
		// TODO Auto-generated method stub
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(bf.readLine());
		
		long[] dp = new long[n+1];
		
		Arrays.fill(dp, 1000001); //비교를 위해서
		
		dp[1] = 0;
		
		for(int i = 1;i<n+1;i++) {
			
			if(i%2 == 0) {
				dp[i] = Math.min(dp[i/2] + 1, dp[i]);			
			}
			if(i%3 == 0) {
				dp[i] = Math.min(dp[i/3] + 1, dp[i]);
			}
			dp[i] = Math.min(dp[i-1] +1, dp[i]);
			
		}
		
		System.out.println(dp[n]);
	}

}
