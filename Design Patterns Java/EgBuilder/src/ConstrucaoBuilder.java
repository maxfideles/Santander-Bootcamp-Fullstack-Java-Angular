public abstract class ConstrucaoBuilder {

    Construcao construcao = new Construcao();
    abstract void  buildParede();
    abstract void buildTelhado();
    abstract void  buildGaragem();
    abstract void  buildTamanho();
    public Construcao build(){
        return construcao;
    }

}
