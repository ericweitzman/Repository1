import serial
import time
import pyautogui
ArduinoSerial = serial.Serial('/dev/tty.usbmodem14101',9600)
print ('---------------------------------------------------')
print ('Welcome to the Gesture-Controlled Laptop Terminal!')
print ('By: Rafit and Eric.')
print ('---------------------------------------------------')
time.sleep(1.5)
while 1:
    incoming = str (ArduinoSerial.readline())
    print incoming
    if 'Rainbow' in incoming:
        pyautogui.hotkey('command','q')
        print ('= Window Closed')
        print ('---------------------------------------------------')
    elif 'Both Hands Hold (Near)' in incoming: #works
        pyautogui.hotkey('k')
        print ('= Play/Pause Video')
        print ('---------------------------------------------------')
    elif 'Top Left to Top Right' in incoming: #works
        pyautogui.hotkey('ctrl', 'tab')
        print ('= Next Tab')
        print ('---------------------------------------------------')
    elif 'Top Right to Top Left' in incoming:  #works
        pyautogui.hotkey('ctrl', 'shift', 'tab')
        print ('= Previous Tab')
        print ('---------------------------------------------------')
    elif 'Hold Top Left' in incoming: #works
        pyautogui.hotkey('j')
        print ('= Rewind Video')
        print ('---------------------------------------------------')
    elif 'Hold Top Right' in incoming: #works
        pyautogui.hotkey('l')
        print ('= Fast-Forward Video')
        print ('---------------------------------------------------')
    elif 'Top Right to Bottom Left' in incoming: #works
        pyautogui.hotkey('command', 'shift','3')
        print ('= Screenshot')
        print ('---------------------------------------------------')
    elif 'Top Left to Bottom Right' in incoming: #works
        pyautogui.hotkey('command', 'm')
        print ('= Minimize Window')
        print ('---------------------------------------------------')
    elif 'Bottom Left to Bottom Right' in incoming:
        pyautogui.hotkey('shift','p')
        print ('= Next Video')
        print ('---------------------------------------------------')
    elif 'Bottom Right to Bottom Left' in incoming:
        pyautogui.hotkey('shift','n')
        print ('= Previous Video')
        print ('---------------------------------------------------')
    elif 'Hold Bottom Left' in incoming:#works
        pyautogui.hotkey('command','[')
        print ('= Previous Page')
        print ('---------------------------------------------------')
    elif 'Hold Bottom Right' in incoming:#works
        pyautogui.hotkey('command',']')
        print ('= Next Page')
        print ('---------------------------------------------------')
    elif 'Both Hands Front to Back' in incoming:#work
        pyautogui.hotkey('f')
        print ('= Full Screen')
        print ('---------------------------------------------------')
    elif 'Both Hands Back to Front' in incoming:#works
        pyautogui.hotkey('esc')
        print ('= Escape')
        print ('---------------------------------------------------')
    elif 'Both Hands Hold (Far)' in incoming: #works
        pyautogui.hotkey('command', 'shift', 's')
        print ('= Save')
        print ('---------------------------------------------------')
    elif 'One Hand Front to Back' in incoming: #works
        pyautogui.hotkey('command', 't')
        print ('= New Tab')
        print ('---------------------------------------------------')
    incoming = "";
    time.sleep(0.02)