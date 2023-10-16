public class Construcao {

    public String parede;
    public String telhado;
    public String garagem;
    public String tamanho;

    public String getParede() {
        return parede;
    }

    public void setParede(String parede) {
        this.parede = parede;
    }

    public String getTelhado() {
        return telhado;
    }

    public void setTelhado(String telhado) {
        this.telhado = telhado;
    }

    public String getGaragem() {
        return garagem;
    }

    public void setGaragem(String garagem) {
        this.garagem = garagem;
    }

    public String getTamanho() {
        return tamanho;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }
    public void imprimir(){
        System.out.println("Garagem: "+garagem+ " Tamanho: " +tamanho+ " Parede: " +parede);
    }
}
