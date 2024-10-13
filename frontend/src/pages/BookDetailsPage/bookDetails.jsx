
import './styles.css'


function BookDetails() {

    return (
        <>
            <header>
                <nav>
                    <div className="nav-left">
                        <img src="images/favicon.ico" alt="Logo" className="logo"/>
                        <h1>KitabeXchange</h1>
                    </div>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="sign_up.html">Sign Up</a></li>
                        <li><a href="login.html">Login</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="book-details">
                    <div className="container">
                        <div className="left-column">
                            <img src="images/book-cover-placeholder1.jpeg" alt="Book Cover"
                                 className="book-cover-details"/>
                            <div className="details-text">
                                <h2>The Dark Forest</h2>
                                <p><strong>Author:</strong> Wilma Writer</p>
                                <p><strong>Genre:</strong> Science Fiction</p>
                                <p><strong>Available Copies:</strong> 4 Exchangers</p>
                                <p><strong>Condition:</strong> Excellent</p>
                                <button className="exchange-btn">Request Exchange</button>
                            </div>
                        </div>
                        <div className="right-column">
                            <h3>Available Exchangers</h3>
                            <div className="exchanger-list">
                                <div className="exchanger-card">
                                    <h4>Harshita</h4>
                                    <p>Location: Delhi, India</p>
                                    <p>Condition: Like New</p>
                                    <button className="message-btn">Message</button>
                                </div>
                                <div className="exchanger-card">
                                    <h4>Prachi</h4>
                                    <p>Location: Bangalore, India</p>
                                    <p>Condition: Good</p>
                                    <button className="message-btn">Message</button>
                                </div>
                                <div className="exchanger-card">
                                    <h4>Mark Fennel</h4>
                                    <p>Location: Mumbai, India</p>
                                    <p>Condition: Used</p>
                                    <button className="message-btn">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section id="book-description">
                <h3>Book Description</h3>
                <p>The Dark Forest is a thrilling sequel that delves into humanity's survival in the cosmos. Exploring
                    deep sci-fi concepts, Wilma Writer intricately describes the moral complexities and survival
                    instincts of humankind in this space epic.</p>
            </section>

            <section id="reviews">
                <h3>User Reviews</h3>
                <div className="review">
                    <p>A mind-bending narrative that changed how I view the universe. Highly recommended!</p>
                    <h4>- Ananya</h4>
                </div>
                <div className="review">
                    <p>Gripping from start to finish. Perfect for anyone who loves deep space fiction!</p>
                    <h4>- Rohan</h4>
                </div>
            </section>


        </>
    )
}


export default BookDetails;