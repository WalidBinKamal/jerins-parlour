import bannerImg from '../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div>
            <div className="hero md:pt-[120px]">
                <div className="md:hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className='md:w-1/2'>
                        <img
                            src={bannerImg}
                            className="max-w-lg rounded-lg shadow-2xl ml-auto mb-16" />
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className="text-5xl font-bold">BEAUTY SALON FOR EVERY WOMEN</h1>
                        <p className="py-6">
                            Unwind. Refresh. Glow.
                            Your beauty journey starts here — experience the ultimate in care and style at Jerin's Parlour.
                        </p>
                        <button className="btn bg-pink-500 text-white px-8 py-6 rounded-md">Get an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;