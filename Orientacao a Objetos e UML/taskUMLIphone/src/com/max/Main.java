package com.max;

import com.max.interfaces.IPhone;

public class Main {
    public static void main(String[] args) {

        System.out.println("iPhone System");
        IPhone iPhone = new IPhone();


        System.out.println("Music Player Functionalities");
        System.out.println("____________________________");
        iPhone.play();
        iPhone.pause();
        iPhone.next();
        iPhone.previous();
        iPhone.search("Ela Partiu - Tim Maia");

        System.out.println("Phone Functionalities");
        System.out.println("____________________________");
        iPhone.call("92134-0981");
        iPhone.pickUpCall();
        iPhone.declineCall();

        System.out.println("Web Browser Functionalities");
        System.out.println("____________________________");
        iPhone.newTab();
        iPhone.accessUrl("http://google.com");
        iPhone.refreshPage();

    }
}
