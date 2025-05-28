import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import Background from "../Components/HeroBackground/BackgroundBlogs";
import NavbarBlack from "../Components/Navbar/NavbarBlack";
import Button from "../Components/Button/Button";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Using AI to optimize payments performance with the Payments Intelligence Suite",
    description:
      "Stripe has been using AI in our payments products for over a decade, and we’re continuing to expand how we put AI to use on your behalf. Last week at Stripe Sessions, we introduced our Payments Intelligence Suite, which uses AI to make hundreds of automated, real-time decisions to maximize your profits—with no effort required.",
    image: "/images/blog2.webp",
    author: {
      name: "John Affacki",
      avatar: "/images/reviews/2.jpg",
    },
   
  },
  // {
  //   id: 2,
  //   title: "Why Mobile Optimization Matters in 2025",
  //   description:
  //     "Learn how mobile-first design is reshaping the digital customer journey.",
  //   image: "/images/blog1.webp",
  //   author: {
  //     name: "Fatima Noor",
  //     avatar: "/images/reviews/3.png",
  //   },
  // },
  // Add more blog objects here as needed
];

export default function BlogPage() {
  return (
    <>
      <Background />
      <NavbarBlack />
      <Container className="p-5">
        <div className="px-2 bg-white shadow-lg rounded-3 mx-auto" style={{ maxWidth: "1000px" }}>
          <Row className="d-flex justify-content-center py-3 text-left">
            <Col md={5} lg={5}>
              <div className="blog-image ms-2">
                <Image
                  src="/images/blog1.webp"
                  alt="blog1"
                  width={400}
                  height={400}
                  className="img-fluid rounded-3"
                />
              </div>
            </Col>
            <Col md={7} lg={7}>
              <div className="blog-card p-3">
               <Link href="/blog-view">
                <h3 className="fw-bold my-3">
                  Introducing Stablecoin Financial Accounts in 101 countries
                </h3>
               </Link>
                <div className="d-flex align-items-center mb-3">
                  <Image
                    src="/images/reviews/4.png"
                    alt="blog"
                    width={50}
                    height={50}
                    className="rounded-circle me-2"
                  />
                  <span className="fw-bold">George Williams</span>
                </div>
                <p className="text-muted mb-3">
                  With Stablecoin Financial Accounts, businesses in 101
                  countries can now easily access a dollar-denominated
                  stablecoin balance to store and move money on crypto or
                  established financial rails.
                </p>
                <Button className="p-0" text="Read More" type="purpleButtonWithNoBackground" style={{padding:'0px'}} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="my-4 py-5">
        <div className="px-2  mx-auto" style={{ maxWidth: "1000px" }}>
        {blogs.map((blog) => (
          <Row key={blog.id} className="d-flex justify-content-center py-3">
       
         
            <Col md={7} lg={7}>
              <div className="blog-card px-5 py-3">
                 <Link href="/blog-view">
                <h3 className="fw-bold my-3">
                  {blog.title}
                </h3>
             </Link>
                <p className="text-muted mb-3">{blog.description}
                </p>
                <Button className="p-0" text="Read More" type="purpleButtonWithNoBackground" />
              </div>
            </Col>
          <Col md={5} lg={5}>
             <div className="d-flex align-items-center justify-content-end mb-3">
                  <Image
                    src={blog.author.avatar}
                    alt="blog"
                   width={50}
                    height={50}
                    className="rounded-circle me-2 shadow-sm"
                  />
                  <span className="fw-bold">{blog.author.name}</span>
                </div>
              <div className="blog-image ">
                <Image
                  src={blog.image}
                  alt="blog1"
                  width={400}
                  height={600}
                  className="img-fluid rounded-3 shadow"
                />
              </div>
            </Col>
          </Row>
        ))}
         </div>
      </Container>
      <Footer />
    </>
  );
}
