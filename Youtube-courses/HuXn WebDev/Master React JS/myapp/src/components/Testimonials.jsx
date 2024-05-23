import { useState } from "react";
import "../styles/style.css";

const Testimonials = () => {
  // function testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
      {
        quote: "This is the best product I've ever used!",
        author: "Jane Doe",
      },
      {
        quote: "I highly recommend this product to everyone!",
        author: "John Smith",
      },
      {
        quote: "This product has completely changed my life.",
        author: "Irineu Nusei",
      },
    ]
  // }

  function changeIndex(btn) {
    if (btn === "Prev") {
      if (currentIndex <= 0) {
        setCurrentIndex(2);
        return;
      }

      setCurrentIndex(currentIndex - 1);
      
    } else {
      if (currentIndex >= testimonials.length - 1) {
        setCurrentIndex(0);
        return;
      }

      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <>
      <section className="testimonials">
        <div className="testimonial-quote">
          <p>
            {testimonials[currentIndex].quote}
          </p>
        </div>

        <div className="testimonial-author">
          <p>
            {testimonials[currentIndex].author}
          </p>
        </div>

        <div className="nav">
          <button onClick={() => changeIndex("Prev")}>Prev</button>
          <button onClick={() => changeIndex("Next")}>Next</button>
        </div>
      </section>
    </>
  );
}

export default Testimonials;