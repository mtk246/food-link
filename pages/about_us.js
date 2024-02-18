import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faCircleInfo, faTicket} from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
    return (
        <div className="container">
            <h3 className="text-success fw-bold">Why us?</h3>
            <div className="row my-5 align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className="display-2 fw-bold">We are the team of enthusiasts</h1>
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-muted">
                        We harness the power of NYC data API resources to ensure our technology suite stays updated with the latest resources available. Our commitment to leveraging this technology guarantees unparalleled support and performance excellence tailored to diverse business needs.
                    </p>
                </div>
            </div>
            <div className="row my-5 align-items-center">
                <div className="col-12 col-md-4">
                    <div className="border rounded shadow p-3">
                        <h1 className="text-success text-center display-1">
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </h1>
                        <h3>Relevant Resource Access</h3>
                        <p className="text-muted">
                            Our platform provides a centralized hub for accessing a wide range of resources tailored to the needs of low-income individuals and families.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="border rounded shadow p-3">
                        <h1 className="text-success text-center display-1">
                            <FontAwesomeIcon icon={faRotate} />
                        </h1>
                        <h3>Real-Time Updates</h3>
                        <p className="text-muted">
                            By leveraging NYC data API resources, we ensure that our platform is continuously updated with the latest information on available resources.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="border rounded shadow p-3">
                        <h1 className="text-success text-center display-1">
                            <FontAwesomeIcon icon={faTicket} />
                        </h1>
                        <h3>Community Support</h3>
                        <p className="text-muted">
                            Beyond simply providing access to resources, our goal is committed to fostering a community support, empowerment in low-income individuals.
                        </p>
                    </div>
                </div>
            </div>
            <div className="faq_area section_padding_130" id="faq">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6">
                            <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp', }}>
                                <h3><span>Frequently </span> Asked Questions</h3>
                                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-lg-8">
                            <div className="accordion faq-accordian" id="faqAccordion">
                                <div className="card border-0 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                    <div className="card-header" id="headingOne">
                                        <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How can I install this app?<span className="lni-chevron-up"></span></h6>
                                    </div>
                                    <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#faqAccordion">
                                        <div className="card-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                            <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                                    <div className="card-header" id="headingTwo">
                                        <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">The apps is not installing?<span className="lni-chevron-up"></span></h6>
                                    </div>
                                    <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                                        <div className="card-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                            <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                    <div className="card-header" id="headingThree">
                                        <h6 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Contact form is not working?<span className="lni-chevron-up"></span></h6>
                                    </div>
                                    <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#faqAccordion">
                                        <div className="card-body">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                                            <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                                    <i className="lni-emoji-sad"></i>
                                    <p className="mb-0 px-2">Cannot find your answers?</p>
                                    <a href="#"> Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
