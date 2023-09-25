package br.com.max;

import java.util.ArrayList;
import java.util.concurrent.ThreadLocalRandom;

public class Main {
    public static void main(String[] args) {
        System.out.println("Selective Process");

        candidatesSelection();

    }


    static void printSelected(String[] candidates, ArrayList candidatesList,ArrayList salaryExpected){

        for(int i=0; i<candidatesList.size();i++){
            System.out.println("The candidate selected was " +candidatesList.get(i)+". Requested for $"+salaryExpected.get(i)) ;

        }
    }
    static void candidatesSelection(){
        String []  candidatos = {"Felipe", "Julia", "Rafaela", "Carla", "Patricia", "Gabriel", "Mateus", "Bianca", "Clara", "Bruno"};
        int selectedCandidates = 0;
        int currentCandidate = 0;
        double baseSalary = 2000;
        while (selectedCandidates < 5 && currentCandidate< candidatos.length){
            String candidate = candidatos[currentCandidate];
            double expectedSalary = expectedSalary();
            ArrayList<String> candidateSelected = new ArrayList<>();
            ArrayList<Double>  salaryExpectedSelected = new ArrayList<>();
            if(baseSalary >= expectedSalary){

                candidateSelected.add(candidate);
                salaryExpectedSelected.add(expectedSalary);
                selectedCandidates++;
            }
            currentCandidate++;

            printSelected(candidatos,candidateSelected,salaryExpectedSelected);

        }

    }


    static double expectedSalary(){
        return ThreadLocalRandom.current().nextDouble(1700,2300);
    }
    static void analyseCandidate(double expectedSalary){
        double baseSalary = 2000.00;

        if (baseSalary > expectedSalary){
            System.out.println("Call the Candidate");
        } else if (baseSalary == expectedSalary) {
            System.out.println("Call to give another offer");
        } else{
            System.out.println("Waiting the others candidates ");
        }
    }
}
