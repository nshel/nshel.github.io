public class ArgParser
{

    public static void parse(String[] args)
    {

        int stringCount = 0, intCount = 0, doubleCount = 0;

        for (String x: args) 
        {
            try {
                Integer.parseInt(x);
                intCount++;
            } catch (NumberFormatException ex) {
                try {
                    Double.parseDouble(x);
                    doubleCount++;
                } catch (NumberFormatException ex2) {
                    stringCount++;
                }
            }
        }

        System.out.println("String: " + stringCount);
        System.out.println("Integer: " + intCount);
        System.out.println("Double: " + doubleCount);
    
    }

    public static void main(String [] args) 
    {

        parse(args);
    }
}