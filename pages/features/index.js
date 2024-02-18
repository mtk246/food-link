import Image from "next/image";
import Link from "next/link";

export default function Features() {
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between w-100" style={{height: '70vh'}}>
                <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline px-5">
                    <span className="text-secondary text-uppercase">Forging Futures for </span>
                    <h1 className="display-4 my-4 font-weight-bold">Empowering <span style={{ color: 'forestgreen' }}>Low-income Families</span></h1>
                    <Link href="/resources" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{ borderRadius: '30px', backgroundColor: 'forestgreen' }}>
                        Get Started
                    </Link>
                    <p className="mt-4 text-muted">Using advanced algorithms, our platform provides tailored recommendations for optimal well-being, revolutionizing how users approach their diet and lifestyle choices...</p>
                </div>
                <div
                    className="col-md-8 h-100 clipped"
                    style={{ minHeight: '350px', backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)', backgroundPosition: 'center', backgroundSize: 'cover' }}
                >
                </div>
                <a href="https://componentity.com" target="_blank" className="block">
                <Image
                    src="/assets/images/image.png"
                    width={120}
                    height={120}
                    className="d-block mx-auto my-5"
                    alt="Componentity"
                />
                </a>
            </div>
            <div
                className="d-flex align-items-center justify-content-center w-50 m-auto my-5 rounded text-white"
                style={{ backgroundColor: 'forestgreen'}}
            >
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        logo
                    </div>
                    <div>
                        <h4>Get Nutrition Advise</h4>
                        <p className="text-muted">Tips for Saving Costs While Maintaining Nutritional Value</p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        logo
                    </div>
                    <div>
                        <h4>Nutrition Chatbot</h4>
                        <p className="text-muted">Your Guide to Budget-Friendly, Nutrient-Rich Meals</p>
                    </div>
                </div>
            </div>
            <div className="text-center my-5">
                <h3>Our Tracks</h3>
                <p className="text-muted">Get Your Meal Sorted: Easy Solutions for Quick and Delicious Dining.</p>
            </div>
            <div className="my-5 d-flex align-items-center justify-content-around">
                <div>
                    <Image src="/assets/images/chat-bot.png" width={300} height={300} alt="chatbot" />
                </div>
                <div>
                    <h2>Seamless support across channels</h2>
                    <p className="text-muted">
                        Experience seamless support for nutritional and financial budgeting for meals across all channels. <br/>
                        Our AI-powered chatbot process automation to streamline your meal planning. Or, get started instantly<br/>with UltimateGPT, our new generative AI-powered bot for meal support.
                    </p>
                    <Link href="/resources" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{ borderRadius: '30px', backgroundColor: 'forestgreen' }}>
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}
