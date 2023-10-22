package com.max.interfaces;

public class IPhone implements MusicPlayer, Phone, WebBrowser{
    @Override
    public void play() {
        System.out.println("playing Music");
    }

    @Override
    public void pause() {
        System.out.println("Pausing song");
    }

    @Override
    public void next() {
        System.out.println("Next song");
    }

    @Override
    public void previous() {
        System.out.println("Previous song");
    }

    @Override
    public void search(String search) {
        System.out.println("Searching song " +search);
    }

    @Override
    public void call(String number) {
        System.out.println("Calling " +number);
    }

    @Override
    public void pickUpCall() {
        System.out.println("Picking up the call");
    }

    @Override
    public void declineCall() {
        System.out.println("Declining call");
    }

    @Override
    public void newTab() {
        System.out.println("Opening a new tab");
    }

    @Override
    public void accessUrl(String url) {
        System.out.println("Acessing the web address: " +url);
    }

    @Override
    public void refreshPage() {
        System.out.println("Refreshing the Page");
    }
}
