import Container from "@/components/Container";
import React from "react";

function About() {
  return (
    <Container>
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold mb-4">About App Store</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to Next Store! We are dedicated to providing you with the best
          shopping experience. Our platform offers a wide range of products at
          unbeatable prices, ensuring quality and satisfaction for all our
          customers.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Next Store, our mission is to make online shopping simple,
          reliable, and enjoyable.
        </p>

        <p className="text-lg text-gray-600">
          Thank you for choosing Next Store. We look forward to serving you!
        </p>
      </div>
    </Container>
  );
}

export default About;
