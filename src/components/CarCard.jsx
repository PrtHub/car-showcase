/* eslint-disable react/prop-types */


const CarCard = ({car}) => {
  return (
    <section className="w-96 h-80">
       <img src={car.img} alt="" />
    </section>
  )
}

export default CarCard