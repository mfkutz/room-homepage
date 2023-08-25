import { desktopHero1, iconArrow } from '../../src/assets/index'

import { aboutDark, aboutLight } from '../../src/assets/index'

const Header = () => {
    return (
        <div className='lg:flex lg:flex-row flex flex-col'>

            <div className='lg:w-full'>
                <img src={desktopHero1} alt="desktop image" className='w-full lg:w-full' />
            </div>

            <div className="px-[100px] flex items-center max-w-[600px]">
                <div className='flex flex-col'>
                    <h1>
                        Discover innovative ways to decorate
                    </h1>
                    <p className='pt-6'>
                        We provide unmatched quality, comfort, and style for property owners across the country.
                        Our experts combine form and function in bringing your vision to life. Create a room in your
                        own style with our collection and make your property a reflection of you and what you love.
                    </p>
                    <div className='flex items-center gap-5 pt-5'>
                        <div className='uppercase tracking-[11px] font-[600] text-[15px] '>
                            Shop now
                        </div>
                        <span>
                            <img src={iconArrow} alt="arrow" />
                        </span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header