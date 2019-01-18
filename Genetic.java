import java.util.Scanner;
/** finds max of function using genetic algorithm
*@ author Eric Weitzman
*@ version 04-24-18
**/

public class Genetic { 
    public static void main(String [] args) { 
    
        Scanner keyboard = new Scanner(System.in);
        
        //variable declerations, make arrays for x, y and fitness
        
        double temp1, temp2;
        double[]    x1=new double[20];
        double[]    y1=new double[20];
        double[]    f1=new double[20];
        double[][]  g1=new double[20][3];
        double[]    x2=new double[20];
        double[]    y2=new double[20];
        double[]    f2=new double[20];
        double[][]  g2=new double[20][3];
        double[]    x3=new double[20];
        double[]    y3=new double[20];
        double[]    f3=new double[20];
        double[][]  g3=new double[20][3];
        double[]    x4=new double[20];
        double[]    y4=new double[20];
        double[]    f4=new double[20];
        double[][]  g4=new double[20][3];
        double[]    x5=new double[20];
        double[]    y5=new double[20];
        double[]    f5=new double[20];
        double[][]  g5=new double[20][3];
        double temp;
        int lenght, start, small;
        
        //make random x values
        for (int i=0; i<20; i++) { 
            
            x1[i]=random12();
        }
        
        //make random y values
        for (int i=0; i<20; i++) { 
        
            y1[i]=random12();
        
        }
        //calculate fitness scores based off x and y values
        for (int i=0; i<20; i++) { 
        
            f1[i]=function(x1[i],y1[i]);
        
        
        }
        //make g1 array
        for(int i=0; i<20; i++) {
            g1[i][0]=x1[i]; }
        
        for(int i=0; i<20; i++) {
            g1[i][1]=y1[i]; }
        
        for(int i=0; i<20; i++) {
            g1[i][2]=f1[i]; }
            
        
        //print g1 array
        
        //print2DArray(g1);
        
            
            
        //display generation 1
        for(int i=0; i<20; i++) { 
        
    
        
        System.out.println( (i+1) +":f(x,y)=f(" + x1[i] + "," + y1[i] + ")="+f1[i]);  
        
        }
        
        // sort generation by fitness
        
         for (start = 0; start <20; start++) { 
        
        small = start; 
        for (int i = start +1; i<20; i++) { 
        
            if ( f1[i]< f1[small]) {small = i;}
        
        }
            
            temp = f1[start];
            f1[start]= f1[small];
            f1[small]= temp;
            
            temp = x1[start];
            x1[start]= x1[small];
            x1[small]= temp;
             
              temp = y1[start];
            y1[start]= y1[small];
            y1[small]= temp;
             
        }
        
        
        
        //make g1 array
        for(int i=0; i<20; i++) {
            g1[i][0]=x1[i]; }
        
        for(int i=0; i<20; i++) {
            g1[i][1]=y1[i]; }
        
        for(int i=0; i<20; i++) {
            g1[i][2]=f1[i]; }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       
    
        
        
        
        
        for(int i=0; i<20; i++) { 
        
    
        
        System.out.println( (i+1) +":f(x,y)=f(" + x1[i] + "," + y1[i] + ")="+f1[i]);  
        
        }
        
        
        // GENERATION 2
        System.out.println("*******GENERATION 2*******");
        
        for(int i=6; i<20;i=i+2) { 
        
        x2[i]=(x1[i]+x1[i+1])*0.5 *mutate();
        x2[i+1]=(x1[i]+x1[i+1])*0.5 *mutate();
        y2[i]=(y1[i]+y1[i+1])*0.5 *mutate();
        y2[i+1]=(y1[i]+y1[i+1])*0.5 *mutate();
            
        }
        
        for (int i=0; i<6;i++){ 
        
        x2[i]=random12();
        y2[i]=random12();
        
        }
        
        
        //calculate fitness
        for (int i=0; i<20; i++) { 
        
            f2[i]=function(x2[i],y1[i]);
        
        
        }
        
        
        // sort 
         for (start = 0; start <20; start++) { 
        
        small = start; 
        for (int i = start +1; i<20; i++) { 
        
            if ( f2[i]< f2[small]) {small = i;}
        
        }
            
            temp = f2[start];
            f2[start]= f2[small];
            f2[small]= temp;
            
            temp = x2[start];
            x2[start]= x2[small];
            x2[small]= temp;
             
              temp = y2[start];
            y2[start]= y2[small];
            y2[small]= temp;
             
        }
        
        // display g2 
        for(int i=0; i<20; i++) { 
        
    
        
        System.out.println( (i+1) +":f(x,y)=f(" + x2[i] + "," + y2[i] + ")="+f2[i]);  
        
        }
        
        
        
        // GENERATION 3
        System.out.println("*******GENERATION 3*******");
        
        for(int i=6; i<20;i=i+2) { 
        
        x3[i]=(x2[i]+x2[i+1])*0.5 *mutate();
        x3[i+1]=(x2[i]+x2[i+1])*0.5 *mutate();
        y3[i]=(y2[i]+y2[i+1])*0.5 *mutate();
        y3[i+1]=(y2[i]+y2[i+1])*0.5 *mutate();
            
        }
        
        for (int i=0; i<6;i++){ 
        
        x3[i]=random12();
        y3[i]=random12();
        
        }
        
        
        //calculate fitness
        for (int i=0; i<20; i++) { 
        
            f3[i]=function(x3[i],y3[i]);
        
        
        }
        
        
        // sort 
         for (start = 0; start <20; start++) { 
        
        small = start; 
        for (int i = start +1; i<20; i++) { 
        
            if ( f3[i]< f3[small]) {small = i;}
        
        }
            
            temp = f3[start];
            f3[start]= f3[small];
            f3[small]= temp;
            
            temp = x3[start];
            x3[start]= x3[small];
            x3[small]= temp;
             
              temp = y3[start];
            y3[start]= y3[small];
            y3[small]= temp;
             
        }
        
        // display g3 
        for(int i=0; i<20; i++) { 
        
    
        
        System.out.println( (i+1) +":f(x,y)=f(" + x3[i] + "," + y3[i] + ")="+f3[i]);  
        
        }
        
        
        // GENERATION 4
        System.out.println("*******GENERATION 4*******");
        
        for(int i=6; i<20;i=i+2) { 
        
        x4[i]=(x3[i]+x3[i+1])*0.5 *mutate();
        x4[i+1]=(x3[i]+x3[i+1])*0.5 *mutate();
        y4[i]=(y3[i]+y3[i+1])*0.5 *mutate();
        y4[i+1]=(y3[i]+y3[i+1])*0.5 *mutate();
            
        }
        
        for (int i=0; i<6;i++){ 
        
        x4[i]=random12();
        y4[i]=random12();
        
        }
        
        
        //calculate fitness
        for (int i=0; i<20; i++) { 
        
            f4[i]=function(x4[i],y4[i]);
        
        
        }
        
        
        // sort 
         for (start = 0; start <20; start++) { 
        
        small = start; 
        for (int i = start +1; i<20; i++) { 
        
            if ( f4[i]< f4[small]) {small = i;}
        
        }
            
            temp = f4[start];
            f4[start]= f4[small];
            f4[small]= temp;
            
            temp = x4[start];
            x4[start]= x4[small];
            x4[small]= temp;
             
              temp = y4[start];
            y4[start]= y4[small];
            y4[small]= temp;
             
        }
        
        // display g4 
        for(int i=0; i<20; i++) { 
        
    
        
        System.out.println( (i+1) +":f(x,y)=f(" + x4[i] + "," + y4[i] + ")="+f4[i]);  
        
        }
        
        // GENERATION 5
        System.out.println("*******GENERATION 5*******");
        
        for(int i=6; i<20;i=i+2) { 
        
        x5[i]=(x4[i]+x4[i+1])*0.5 *mutate();
        x5[i+1]=(x4[i]+x4[i+1])*0.5 *mutate();
        y5[i]=(y4[i]+y4[i+1])*0.5 *mutate();
        y5[i+1]=(y4[i]+y4[i+1])*0.5 *mutate();
            
        }
        
        for (int i=0; i<6;i++){ 
        
        x5[i]=random12();
        y5[i]=random12();
        
        }
        
        
        //calculate fitness
        for (int i=0; i<20; i++) { 
        
            f5[i]=function(x5[i],y5[i]);
        
        
        }
        
        
        // sort 
         for (start = 0; start <20; start++) { 
        
        small = start; 
        for (int i = start +1; i<20; i++) { 
        
            if ( f5[i]< f5[small]) {small = i;}
        
        }
            
            temp = f5[start];
            f5[start]= f5[small];
            f5[small]= temp;
            
            temp = x5[start];
            x5[start]= x5[small];
            x5[small]= temp;
             
              temp = y5[start];
            y5[start]= y5[small];
            y5[small]= temp;
             
        }
        
        // display g5 
        for(int i=0; i<20; i++) { 
        
    
        
        System.out.println( (i+1) +":f(x,y)=f(" + x5[i] + "," + y5[i] + ")="+f5[i]);  
        
        }
        
        
        
        
        
    }//end of main
    
    
    
    
    
    
    
    
    public static double function(double x, double y) {
        
        double result;
        
        result = 10-Math.pow((x-3),2)/6.-Math.pow((y-5),2)/14.;
        
        return result; 
        
    
    
    
        } //end of method function
    
    public static double random12(){ //makes a random number betwee -12,12 rounded to two decimal places
    
    double result;
        
        
        result= Math.random()*24-12;
        
        result= Math.round(result*100)/100.;
        
    
    
    return result;
    
    }
    
    
    
    public static void sort(double array[]){ // sorting algorithm
        
        double sarray1[]=new double [20];
        double temp;
        int lenght, start, small;
   
        for (start = 0; start <20; start++) { 
        
        small = start; 
        for (int i = start +1; i<20; i++) { 
        
            if ( array[i]< array[small]) {small = i;}
        
        }
            
            temp = array[start];
            array[start]= array[small];
            array[small]= temp;
            
            
        }
        
        

    }//  end of sort
    
    public static void print2DArray(double array[][]){
        
        for(int row=0; row<array.length; row++) {
            for(int col=0; col<3; col++){  
                System.out.print("(" + row + "," + col + "): ");
                System.out.println(array[row][col]);
                
            }
    }
    }// end of print2darray methdod
    
    
    public static double mutate() { 
    
    double m; 
        
    m= Math.random()*0.4+0.8;
    
    
    
    
    return m;
    }
    
    
    
    
    

}// end of class Genetic




























