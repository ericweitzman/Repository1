/*
 * SE 101 Design Project - Gesture-Controlled Laptop
 * By Eric W. & Rafit J
  */
  
//Definition of some constants and variables
const int trigger1 = 9; //Trigger pin of 1st Sesnor
const int echo1 = 10; //Echo pin of 1st Sesnor
const int trigger2 = 6 ; //Trigger pin of 2nd Sesnor
const int echo2 = 8;//Echo pin of 2nd Sesnor
const int trigger3 = 4 ; //Trigger pin of 2nd Sesnor
const int echo3 = 2 ;//Echo pin of 2nd Sesnor
const int trigger4 = 13 ; //Trigger pin of 2nd Sesnor
const int echo4 = 12 ;//Echo pin of 2nd Sesnor
double time_taken;
double dist,distL,distR, distBL, distBR;
int arr_right [10] = {0};
int arr_left [10] = {0};
int arr_bottom_left [10] = {0};
int arr_bottom_right [10] = {0};
void setup() {
  Serial.begin(9600); 
  
  pinMode(trigger1, OUTPUT); 
  pinMode(echo1, INPUT); 
  pinMode(trigger2, OUTPUT); 
  pinMode(echo2, INPUT); 
  pinMode(trigger3, OUTPUT); 
  pinMode(echo3, INPUT); 
  pinMode(trigger4, OUTPUT); 
  pinMode(echo4, INPUT); 
 }
//Distance calculation function
void calculate_distance(int trigger, int echo)
{
  digitalWrite(trigger, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger, LOW);
  time_taken = pulseIn(echo, HIGH);
  dist= time_taken*0.034/2.0;
}
//Continuous scan function
void rescan () {
   for (int i = 0; i<10; i++){
    delay(30);
    calculate_distance(trigger1,echo1);
    distR =dist;
    calculate_distance(trigger2,echo2);
    distL =dist; 
    calculate_distance(trigger3,echo3);
    distBL =dist;
    calculate_distance(trigger4,echo4);
    distBR =dist; 
    arr_right[i]=distR; 
    
//    Serial.print("NEW R=");
//    Serial.println(distR);
    arr_left[i]=distL; 
//    Serial.print("NEW L=");
//    Serial.println(distL);
    arr_bottom_left[i]=distBL;
//    Serial.print("NEW BL=");
//    Serial.println(distBL);
    arr_bottom_right[i]=distBR; 
//    Serial.print("NEW BR=");
//    Serial.println(distBR);
  }
}
//Continuous scan function (extended scan duration)
void rescanlong () {
   for (int i = 0; i<10; i++){
    delay(250);
    calculate_distance(trigger1,echo1);
    distR =dist; //get distance of left sensor
    calculate_distance(trigger2,echo2);
    distL =dist; 
    calculate_distance(trigger3,echo3);
    distBL =dist; 
    calculate_distance(trigger4,echo4);
    distBR =dist; 
    arr_right[i]=distR; 
    
//    Serial.print("NEW R=");
//    Serial.println(distR);
    arr_left[i]=distL; 
//    Serial.print("NEW L=");
//    Serial.println(distL);
    arr_bottom_left[i]=distBL;
//    Serial.print("NEW BL=");
//    Serial.println(distBL);
    arr_bottom_right[i]=distBR; 
//    Serial.print("NEW BR=");
//    Serial.println(distBR);
  }
}
//Functions to check if a lower/greater value exists in an array
bool find_lesser(int a[], int value)
{
  for (int i = 0; i<9; i++){
    if (a[i]<=value) {return true;}}
  return false;
}
bool find_greater(int a[], int value)
{
  for (int i = 0; i<9; i++){
    if (a[i]>=value) {return true;}}
  return false;
}
void loop() { 
  
  //Initial distances
  calculate_distance(trigger1,echo1);
  distR =dist; 
  calculate_distance(trigger2,echo2);
  distL =dist; 
  calculate_distance(trigger3,echo3);
  distBL =dist; 
  calculate_distance(trigger4,echo4);
  distBR =dist; 
  
  //Debugging print
//    Serial.print("L=");
//    Serial.println(distL);
//    Serial.print("R=");
//    Serial.println(distR);
//    Serial.print("BL=");
//    Serial.println(distBL);
//    Serial.print("BR=");
//    Serial.println(distBR);
//BOTH HANDS FAR
if ((distL> 20 && distR>20) && (distL<40 && distR<40)) {
  rescan();
  if ( (find_lesser(arr_left,15)) && (find_greater(arr_right,15))) {Serial.println("Both Hands Back to Front"); delay (2000);}
  else {Serial.println("Both Hands Hold (Far)"); delay (2000);}
  }
//BOTH TOP HANDS CLOSE
if ((distL<20 && distR<20)) {
 rescan();
  if ( (find_greater(arr_left,45)) && (find_greater(arr_right,45))) {Serial.println("Both Hands Front to Back"); delay (500);}
  else if ((find_lesser(arr_left,20) && find_lesser(arr_right,20))) {Serial.println("Both Hands Hold (Near)"); delay (500);}
  }
//BOTH BOTTOM HANDS CLOSE
if ((distBL<15 && distBR<15)) {
 rescan();
 //   if ( (find_greater(arr_left,45)) && (find_greater(arr_right,45))) {Serial.println("Both: Front to Back"); delay (500);}
  if ((find_lesser(arr_bottom_left,15) && find_lesser(arr_bottom_right,15))) {Serial.println("Both Bottom Hands Hold"); delay (500);}
 // else if ( ((find_lesser(arr_left,20)==false) && (find_lesser(arr_right,20)==false)) && ((find_greater(arr_left,60)==false) && (find_greater(arr_right,60)==false))) {Serial.println("Both Hands Hold"); delay (1000);}
  }
  
//TOP RIGHT CLOSE
if ((distR<15)){
  rescan();
  if (find_lesser(arr_left,15)) {Serial.println("Top Right to Top Left"); delay (500);}
  else if (find_lesser(arr_bottom_right,15)) {Serial.println("Top Right to Bottom Right"); delay (500);}
  else if (find_lesser(arr_bottom_left,15)) {Serial.println("Top Right to Bottom Left"); delay (500);}
  else if (((find_lesser(arr_left,20) && find_lesser(arr_left,20)))&&(find_lesser(arr_right,15)==false)&&(find_lesser(arr_left,25)==false) && (find_greater(arr_right,25))) {Serial.println("One Hand Front to Back "); delay (500);}
  else if (find_lesser(arr_right,15)) {Serial.println("Hold Top Right"); delay (500);}
}
//TOP LEFT CLOSE
if ((distL<15)){
  rescan();
  if (find_lesser(arr_right,15)) {Serial.println("Top Left to Top Right"); delay (500);}
  else if (find_lesser(arr_bottom_right,15)) {Serial.println("Top Left to Bottom Right"); delay (500);}
  else if (find_lesser(arr_bottom_left,15)) {Serial.println("Top Left to Bottom Left"); delay (500);}
  else if ((find_lesser(arr_right,15)==false)&&(find_lesser(arr_right,25)==false) && (find_greater(arr_left,25))) {Serial.println("One Hand Front to Back "); delay (500);}
  else if (find_lesser(arr_left,15)) {Serial.println("Hold Top Left"); delay (500);}
}
//BOTTOM RIGHT CLOSE
if ((distBR<15)){
  rescan();
  if (find_lesser(arr_bottom_left,15)) {Serial.println("Bottom Right to Bottom Left"); delay (500);}
  else if (find_lesser(arr_bottom_right,15)) {Serial.println("Hold Bottom Right"); delay (500);}
}
//BOTTOM LEFT CLOSE
if ((distBL<15)){
  rescan();
  if (find_lesser(arr_bottom_right,15)) {Serial.println("Bottom Left to Bottom Right"); delay (500);}
  else if (find_lesser(arr_bottom_left,15)) {Serial.println("Hold Bottom Left"); delay (500);}
}
//RAINBOW
if (distBL<20){
  rescanlong(); 
  if (find_lesser(arr_left,20) && find_lesser(arr_right,20) && find_lesser(arr_bottom_right,20)) {Serial.println("Rainbow Fam"); delay (5000);}
}
}