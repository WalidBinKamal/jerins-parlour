import img from '../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Professional = () => {
    return (
        <div className='md:flex gap-14 my-20 max-w-7xl mx-auto'>
            <div className="md:w-1/2">
                <img src={img} alt="" />
            </div>
            <div className="md:w-1/2 space-y-4 mt-5">
                <h3 className='uppercase text-3xl'>Let us handle your screen <span className="text-pink-500">Professionally.</span></h3>
                <p>Our expert team uses proven techniques and premium products to care for your skin with precision and care.</p>
                <div className='md:flex gap-10 lg:pt-20'>
                    <div>
                        <h1 className='text-3xl text-pink-500 font-semibold my-4 '>500+</h1>
                        <p>Happy Customer</p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-pink-500 font-semibold my-4 '>16+</h1>
                        <p>Totale Service</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Professional;