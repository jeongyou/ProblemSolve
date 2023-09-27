import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		int c = scanner.nextInt();
		
		int price = 0;
		
		if(a == b && b == c) {
			price = 10000 + a*1000;
		}
		else if(a == b || a == c) {
			price = 1000 + a*100;
		}
		else if (b == c) {
			price = 1000 + b*100;
		}
		else {
			if(a >= b) {
				price = (a >= c) ? a*100 : c*100;
			}
			else if(b >= a)
				price = (b >= c) ? b*100 : c*100;
			else if(c >= a)
				price = (c >= b) ? c*100 : b*100;
		}
		System.out.print(price);
	}
}
