package codingchallenges;

import java.util.ArrayList;
import java.util.Scanner;


/**
 *
 * @author Vaibhav Ajay Gupta
 */
public class RearrangeNumbers {
        
    
    
    public static void main(String[] args){
        
        
        Scanner input = new Scanner(System.in);
        int noOfTestCases = input.nextInt();
        
        for(int i=0;i<noOfTestCases;i++){
            int noOfElements = input.nextInt();
            ArrayList<Integer> arrList = new ArrayList();
            for(int j=0;j<noOfElements;j++)
            {
                arrList.add(input.nextInt());
            }
            
            
            int positivePostion=0,negativePosition=noOfElements-1; // positivePostion represent the position of positive number, negativePosition represent the position of negative number
            
            while(positivePostion<negativePosition-1){ // run while positive number postion is greater than negative number position
                
                while(positivePostion<arrList.size()-1&&arrList.get(positivePostion)>=0){
                    positivePostion++;
                }
                while(negativePosition>0&&arrList.get(negativePosition)<0){
                    negativePosition--;
                }

                if(positivePostion<negativePosition) // Swap the negative number in first part with the negative number in last part
                {
                    int temp = arrList.get(positivePostion);
                    arrList.set(positivePostion, arrList.get(negativePosition));
                    arrList.set(negativePosition, temp);
                }
             }
            
            negativePosition++;
            
            for(int k=1;k<arrList.size();k=k+2)
            {
                if(arrList.get(k)>0&&negativePosition+(k/2) <arrList.size())
                {
                int temp = arrList.get(k);
                arrList.set(k, arrList.get(negativePosition+(k/2)));
                arrList.set(negativePosition+(k/2), temp);
                }
            }
        
        showList(arrList);
        }
    }
    
    static public void showList(ArrayList<Integer> arrList)
    {
        String str = "";
        for(int i=0;i<arrList.size();i++){
            str +=arrList.get(i)+ " ";
        }
        System.out.println(str);
    }
    
}
