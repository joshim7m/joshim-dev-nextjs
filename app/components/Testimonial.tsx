import TestimonialSlider from "./TestimonialSlider"

const Testimonial = () => {
  return (
    <div className='bg-[url(/testimonial-bg.png)] bg-no-repeat bg-cover bg-center border-t border-gray-100'>
      <div className="max-w-[1170px] mx-auto pt-20 pb-24 text-center md:text-start">
        <div className='w-full md:h-[691px] bg-[url(/map.png)] bg-no-repeat flex justify-end'>
          <div className='w-full max-w-[534px]'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial