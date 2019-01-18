/**
 * This is a program to calculate the range of initial velocity (in the  x y plane at 53 *degrees) to result in a made free throw attempt given a certain accidental velocity in *the z direction, while taking into account drag and Magnus forces.
 *
 *Must manually assign velocity z (vz) [-0.10815, 0.10815] (velocities beyond the range miss the basket completely) and the program finds all the possible initial velocities which result in a made basket. 
 *
 * @author Eric Weitzman and Leslie Unger
 * @version 22-05-2018
 * 
 */

public class FreeThrowFinal1 { 
    public static void main(String [] args){
        
//variable declerations
     
      double p     = 1.23; // air density kg/m^3
      double r     = 0.1213; // radius of basketball in metres
      double A     = 0.18489; // surface area of basketball m^2
      double m     = 0.624; // mass in kilograms
      double x     = 0; // position x (Metres)
      double y     = 1.8; // position y (Metres)
      double z     = 0; // position z (metres) 
      double t     = 0; // time (Seconds)
      double dx    = 1; // change in position x (needs to start not at 0)
      double dy    = 0; // change in position y
      double dz    = 0; // change in position z
      double dt    = 0.0001; // change in time
      double vx    = 0; // velocity x (m/s)
      double vy    = 0; // velocity y (m/s) 
      double vz    = 0.07; // velocity z (m/s) , manually input accidental z velocity 
      double w     = 6*Math.PI; // angular velocity rad/s
      double dvx   = 0; // change in velocity x
      double dvy   = 0; // change in velocity y
      double dvz   = 0; // change in velocity z
      double theta = 0.925025; // angle 
      double alpha = 0; // angle perpendicular to motion
      double g     = 9.81; // gravity (m/s^2)
      double s     = 0.0003;       // air resistance coefficient
      double Cd    = 0.5; // drag coefficient for a basketball
      double Fd    = 0;  //drag force newtons
      double Fm    = 0;  // magnus force newton
      double xf=0,zf=0, tf=0,vi=0, vxi=0, vyi=0, vzi=0;
      double thetai=0.925025;// 53 degree release angle in radians
      double ctr=0;   // counter to count if basket is good or not
      double a = 0.5 * p * Cd * A; // assign simpler drag coefficient alpha
      double b = s * w;            // assign simpler magnus force coefficient beta
                
   //Testing which magnitude of velocities result in a made basket
   for (double v=7; v<12; v=v+0.001){
        
     //compenents (vx,vy)
        vx= v*Math.cos(theta); 
        vy= v*Math.sin(theta); 
        
       
       // save starting values to reset loop 
        vi=v;
        vxi=vx;
        vyi=vy;
        vzi=vz;
       
       
    //loop to find position of ball for every time step dt
    while (t<1.5) { 
 
        v=Math.sqrt(   Math.pow(vx, 2)  + Math.pow(vy, 2) ); //magnitude of velocity
        
  //Calculations
        alpha = Math.PI/2.0 - theta;
        dvx   = -(dt *( a * Math.pow(v, 2)  *Math.cos(theta) +b*v*Math.cos(alpha)))/m;
        dvy   =  dt * ((b*v*Math.sin(alpha)/m-a * Math.pow(v, 2) *Math.sin(theta))/m - g);
        dvz   = - (dt*a*Math.pow(vz, 2))/m;
        theta = Math.atan((dy)/(dx));
        vx    = vx + dvx;
        vy    = vy + dvy;
        vz    = vz + dvz;
        dx    = dt * vx;
        dy    = dt * vy;
        dz    = dt * vz;
        x     = x  + dx;
        y     = y  + dy;
        z     = z  + dz;
        
     
 //made basket test, check if ball is at the height of basket and if it is on the way down, check if the positions x and z are inside the equation                                     of the circle of the rim : (x-4.177)^2+z^2<0.1073^2 
        
        
   if(Math.abs(y-3.048)<0.1 && vy<0){ 
        if (Math.pow(x-4.177, 2)+ Math.pow(z, 2) < Math.pow(0.1073, 2)) {
                
               // if ball is in basket, save points
               xf=x;
               zf=z;
               tf=t;
               ctr++;//this signals the end of the loop that the ball went through the hoop
           }
         }
            
    t = t +dt;   //do it all again for the next time step
    
 // ***** FOR TESTING ****************
       //System.out.print(x + "   ");
       //System.out.print(y + "   ");
       //System.out.print(z + "   ");
       //System.out.print(t + "   ");
       //System.out.print(dvx + "   ");
       //System.out.print(dvy + "   ");
       //System.out.print(theta + "   ");
       //System.out.print(vy + "   ");
       //System.out.print(vx + "   ");
       //System.out.print(vz + "   ");
       //System.out.println();
       //outputFile.println(t + "\t" + vy );
        
            
   }// end of while loop 
            
            
    // check if ball went through hoop, if so display the velocity, positions and time taken that scored the basket!
       
  if(ctr>0){
     System.out.println("Ball in hoop! " + "Velocity:  "+ vi+ " position (x,z):  (" +xf + " , " + zf+ " )  time: " +tf );
        }
        

        
        //reset variables
        
  x     = 0; // position x (Metres)
  y     = 1.8; // position y (Metres)
  z     = 0; // position z (metres) 
  t     = 0; // time (Seconds)
  dx    = 1; // change in position x (needs to start not at 0)
  dy    = 0; // change in position y
  dz    = 0; // change in position z
  vy    = 6.5; // velocity y (m/s) 
  vz    = 0.0; // velocity z (m/s)
  v     = 0; // total speed
  dvx   = 0; // change in velocity x
  dvy   = 0; // change in velocity y
  dvz   = 0; // change in velocty z
  theta = 0.925025; // angle 
  alpha = 0; // angle perpendicular to motion
  vx= vxi;
  vy=vyi;
  vz=vzi;
  v=vi;
            
            
      ctr=0;
      
   }//end for loop here
        
  System.out.println("done"); // to show the code has run through everything
        
  
    } //end of main
} //end of class