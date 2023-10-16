# Creational Design Pattern - Builder 
<br>

![](https://refactoring.guru/images/patterns/content/builder/builder-en-2x.png)


**Builder** is a creational design pattern that lets you **construct complex objects step by step**. The pattern allows you **to produce different types and representations of an object using the same construction code**.

The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called _builders_. This pattern **hides the details** about how the components are created, represented and composed.

>The Builder pattern lets you construct complex objects step by step. The Builder doesn’t allow other objects to access the product while it’s being built.


## Example

[Run it!](https://replit.com/@MaxFideles/Builder-Java?v=1)


For this pattern it's needed some components: The object (final product), The builders(Have the actions) and the Director(receive the type and define the steps).
The example taken is about construction process.

####  - The Object (The final product with your parts)

Imagine about a home, a home commonly shared some attributes for any type (An apartment, residence, studio, mansion). All of them have (doors, windows, walls, etc). It's created the class **_Construcao_** below.

``` java
//Class as final
public class Construcao {  
  
	public String parede;  
	public String telhado;  
	public String garagem;  
	public String tamanho;  
  

	public void imprimir(){  
		System.out.println(garagem);  
	}  
	//Below create the getters and setters
}
```

#### - The Builders

The builder mainly have one parte, the **Abstract Class**. The abstract class will be responsible for defining the **actions** to build (methods), that will be used (implemented) by the extended class (_action builder_) for a specific construction type (An apartment, residence, studio, mansion).

> The Abstract Class will have methods to make the constructions. When selected the construction type by the user, the  **class that extends**  from the abstract class have an individual process to prepare the specific construction that the user request.


below it's the code for the **abstract class builder**

  ``` java
public abstract class ConstrucaoBuilder {  
  
	Construcao construcao = new Construcao();  
	abstract void buildParede();  
	abstract void buildTelhado();  
	abstract void buildGaragem();  
	abstract void buildTamanho();  
	  
	public Construcao build(){  
		return construcao;  
	}  
  
}
```


> Notice:  Above is instanced a new Construcao object and there's a method to return it after the process is done!


Extending for the class created above, will be created the _action builder_ for specifics type of constructions (An apartment, residence, studio, mansion).
it can be  below it's the code for a **class builder** to a residence(Casa in Portuguese).

  ``` java
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
```


#### The Director

The director class defines the order in which to execute the building steps, while the builder provides the implementation for those steps.

  ``` java
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
```


### Implementing the Builder Design Pattern

Using the Pattern in the Main Class
``` java
public class Main {  
  
	public static void main (String [] args){  
	   //Create the director object
		Diretor diretor = new Diretor();  
		//set the type to sent to the builders
		diretor.setBuilder(new CasaBuilder());  
		//storage in the construcaoFinal variable the
		//final constrution, the final object constucao
		Construcao construcaoFinal = diretor.construir(); 
		//print out on the console 
		construcaoFinal.imprimir();   
  
	}  
  
}
```


In case to create a new construction type, the only task is to create a new _action builder_ as shown below.

``` java
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
```

And change on the Main class, setting the builder  to ==ApartmentBuilder( )==:

``` java
public class Main {  
  
	public static void main (String [] args){  
	  
		Diretor diretor = new Diretor();  
		  
		diretor.setBuilder(new ApartmentBuilder());  
		Construcao construcaoFinal = diretor.construir();  
		construcaoFinal.imprimir();  
	  
	}  
  
}
```

----
External Resources:<br>
[Builder Pattern in Java](https://springframework.guru/gang-of-four-design-patterns/builder-pattern/Builder-Pattern-in-Java)<br>
[Builder - Refactoring](https://refactoring.guru/design-patterns/builder)<br>
[Builder Pattern - Integu](https://integu.net/builder-pattern/)

