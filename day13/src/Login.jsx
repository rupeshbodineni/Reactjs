import { useState } from "react";

let ContactForm = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: ""
    });

    const updateHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        alert(JSON.stringify(user, null, 2));
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">

                    <div className="card shadow-lg border-0 rounded-4 p-4">
                        
                        <h3 className="fw-bold mb-4 border-bottom pb-2">
                            Send us an Email
                        </h3>

                        <form onSubmit={submitHandler}>

                            {/* Row 1 */}
                            <div className="row g-3 mb-3">
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold text-uppercase small">
                                        Name *
                                    </label>
                                    <input 
                                        type="text"
                                        name="name"
                                        className="form-control form-control-lg"
                                        onChange={updateHandler}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label fw-semibold text-uppercase small">
                                        Email *
                                    </label>
                                    <input 
                                        type="email"
                                        name="email"
                                        className="form-control form-control-lg"
                                        onChange={updateHandler}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label fw-semibold text-uppercase small">
                                        Phone
                                    </label>
                                    <input 
                                        type="text"
                                        name="phone"
                                        className="form-control form-control-lg"
                                        onChange={updateHandler}
                                    />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="row g-3 mb-3">
                                <div className="col-md-8">
                                    <label className="form-label fw-semibold text-uppercase small">
                                        Subject *
                                    </label>
                                    <input 
                                        type="text"
                                        name="subject"
                                        className="form-control form-control-lg"
                                        onChange={updateHandler}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label fw-semibold text-uppercase small">
                                        Services
                                    </label>
                                    <select 
                                        name="service"
                                        className="form-select form-select-lg"
                                        onChange={updateHandler}
                                    >
                                        <option value="">-- Select One --</option>
                                        <option value="web">Web Development</option>
                                        <option value="app">App Development</option>
                                        <option value="design">UI/UX Design</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold text-uppercase small">
                                    Message *
                                </label>
                                <textarea 
                                    name="message"
                                    rows="5"
                                    className="form-control form-control-lg"
                                    onChange={updateHandler}
                                ></textarea>
                            </div>

                            {/* Button */}
                            <div>
                                <button className="btn btn-warning btn-lg px-5 fw-semibold shadow-sm">
                                    SUBMIT COMMENT
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;