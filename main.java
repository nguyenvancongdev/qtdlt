public class Main {
    // ham main se chay lan dau khi Main duoc tao
    public static void main(String[] args) {
        // khoi tao bien hocluc va gan gia tri B
        String hocluc = 'B';
        // khoi tao danh sach hoc luc
        String[] hoclucs = {"A","B","C","D"};
        //khoi tao doi tuong random
        Random generator = new Random();
        // tao bien random index
        int randomIndex = generator.nextInt(hoclucs.length);
        // thay doi gia tri gan cua hocluc
        hocluc = hoclucs[randomIndex];
        // tinh toan
        if (hocluc.equals("A") || hocluc.equals("B")){
            giaiPTBac2(3,8,5);
        }
        if (hocluc.equals("C") || hocluc.equals('D')){
            inBangCuChuong();
        }
    }

    // viet phuong trinh giai toan bac 2
    public static void giaiPTBac2(float a, float b, float c) {
        // kiểm tra các hệ số
        if (a == 0) {
            if (b == 0) {
                System.out.println("Phương trình vô nghiệm!");
            } else {
                System.out.println("Phương trình có một nghiệm: "
                        + "x = " + (-c / b));
            }
            return;
        }
        // tính delta
        float delta = b*b - 4*a*c;
        float x1;
        float x2;
        // tính nghiệm
        if (delta > 0) {
            x1 = (float) ((-b + Math.sqrt(delta)) / (2*a));
            x2 = (float) ((-b - Math.sqrt(delta)) / (2*a));
            System.out.println("Phương trình có 2 nghiệm là: "
                    + "x1 = " + x1 + " và x2 = " + x2);
        } else if (delta == 0) {
            x1 = (-b / (2 * a));
            System.out.println("Phương trình có nghiệm kép: "
                    + "x1 = x2 = " + x1);
        } else {
            System.out.println("Phương trình vô nghiệm!");
        }
    }
    public static void inBangCuChuong() {
        int num = 9;
        for(int i = 2; i <= 9; ++i ){
            for(int j = 1; j <= 10; ++i)
            {
                System.out.printf("%d * %d = %d \n", num, i, num * i);
            }
        System.out.printf();
        }
    }
}

