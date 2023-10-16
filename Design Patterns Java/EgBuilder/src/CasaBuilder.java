public class CasaBuilder extends ConstrucaoBuilder{


    @Override
    void buildParede() {
        construcao.setParede("Fina");
    }

    @Override
    void buildTelhado() {
        construcao.setTelhado("Ceramico");

    }
    @Override
    void buildGaragem() {
        construcao.setGaragem("2 carros");
    }

    @Override
    void buildTamanho() {
        construcao.setTamanho("200m2");
    }
}
