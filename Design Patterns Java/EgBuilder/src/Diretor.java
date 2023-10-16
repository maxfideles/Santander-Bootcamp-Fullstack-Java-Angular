public class Diretor {

    // instance a new abstractBuilder variable type
    private ConstrucaoBuilder construcaoBuilder;

    //The setter that receive which type construction will be
    //sent to the builders
    public ConstrucaoBuilder setBuilder(ConstrucaoBuilder construcaoBuilder){
        this.construcaoBuilder = construcaoBuilder;

        return construcaoBuilder;
    }

    //A method defining the building process order
    public Construcao construir(){
        construcaoBuilder.buildGaragem();
        construcaoBuilder.buildParede();
        construcaoBuilder.buildTamanho();
        construcaoBuilder.buildTelhado();

        return construcaoBuilder.build();
    }

}
