export default function Contact() {
    return (
        <div className="d-flex align-items-center justify-content-around p-5" style={{ backgroundColor: '#B3F4CD'}}>
            <div>
                <h1>Get In Touch With Us!</h1>
                <p className="text-muted">We’d love to learn more about how we can partner with your organization. <br/>Please tell us a bit about yourself, and we will get in touch with you soon.<br/>Your feedback is valuable to us!</p>
            </div>
            <div>
                <form className="form-control p-5 rounded shadow">
                    <div className="mb-3">
                        <label htmlhtmlhtmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlhtmlhtmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlhtmlhtmlFor="textarea" className="form-label">Your Message <span className="text-danger"> * </span></label>
                        <textarea className="form-control" id="textarea" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    )
}