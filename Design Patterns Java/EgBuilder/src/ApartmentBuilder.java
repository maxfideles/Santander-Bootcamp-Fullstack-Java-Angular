public class ApartmentBuilder extends ConstrucaoBuilder{


    @Override
    void buildParede() {
        construcao.setParede("Espessa");
    }

    @Override
    void buildTelhado() {
        construcao.setTelhado("Laje");

    }
    @Override
    void buildGaragem() {
        construcao.setGaragem("1 carro");
    }

    @Override
    void buildTamanho() {
        construcao.setTamanho("150m2");
    }
}
