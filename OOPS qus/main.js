class Tatacar
{
    startEngine(){
        document.writeln(" strating Electric startEngine :<br>")
    }
}
   class petrolcar extends Tatacar {}

   class Electriccar extends Tatacar {
    startEngine(){
        document.writeln(" starting the electric car  :")
    }
   }

   const petrol = new petrolcar()
   petrol.startEngine()

   const electric = new Electriccar()
   electric.startEngine()