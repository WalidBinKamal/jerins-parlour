import coverImg from '../../assets/images/skin.jpg'

const Cover = () => {
    return (
        <div className='bg-[#FFF5EE]'>
            <div className="hero md:pt-[120px]">
                <div className="md:hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className='md:w-1/2'>
                        <img
                            src={coverImg}
                            className="max-w-lg rounded-lg shadow-2xl ml-auto mb-16" />
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className="text-5xl font-bold uppercase">Your Self-Care, Your Style</h1>
                        <p className="py-6">
                            Carefully crafted combos to bring out your best — because you deserve more than ordinary.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;