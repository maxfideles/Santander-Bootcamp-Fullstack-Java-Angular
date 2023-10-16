public class Main {

    public static void main (String [] args){

        Diretor diretor = new Diretor();

        diretor.setBuilder(new ApartmentBuilder());
        Construcao construcaoFinal = diretor.construir();
        construcaoFinal.imprimir();

    }
}
