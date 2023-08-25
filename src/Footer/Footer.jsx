import { aboutDark, aboutLight } from '../../src/assets/index'


const Footer = () => {
  return (
    <div className="flex justify-between h-[100%]">

      <img src={aboutDark} alt="dark" className='w-[420px]' />

      <div className='py-[51px] px-11 w-full'>
        <h2 className='uppercase tracking-[7px] font-[700]'>About our furniture</h2>
        <p className='pt-2'>Our multifunctional collection blends design and function to suit your individual taste.
          Make each room unique, or pick a cohesive theme that best express your interests and what
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles
          or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>

      <img src={aboutLight} alt="light" className='w-[440px]' />

    </div>
  )
}

export default Footer