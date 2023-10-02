import CarCard from "../components/CarCard"
import { cars } from "../data/carsData"



const CarList = () => {
  return (
    <main className="w-full h-full flex flex-col mt-5 px-5">
      <section className="grid grid-cols-3 gap-10">
        {cars.map((car) => (
          <section key={car.id}>
            <CarCard car={car}/>
          </section>
        ))}
      </section>
    </main>
  )
}

export default CarList