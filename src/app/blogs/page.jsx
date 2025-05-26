import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Components/Footer/Footer'
import Background from '../Components/HeroBackground/BackgroundBlogs'
import Navbar from '../Components/Navbar/Navbar'


const blogs = [
  {
    id: 1,
    title: 'The Power of Personalization in E-Commerce',
    category: 'E-Commerce',
    description: 'Discover how personalized shopping experiences can boost customer engagement and sales.',
    image: '/images/blog.png',
    author: {
      name: 'George Samuel',
      avatar: '/images/reviews/1.jpg',
    },
    readTime: '2 min read',
  },
  {
    id: 2,
    title: 'Why Mobile Optimization Matters in 2025',
    category: 'Mobile UX',
    description: 'Learn how mobile-first design is reshaping the digital customer journey.',
    image: '/images/blog.png',
    author: {
      name: 'Fatima Noor',
      avatar: '/images/reviews/1.jpg',
    },
    readTime: '3 min read',
  },
  // Add more blog objects here as needed
];

export default function BlogPage() {
  return (
   <>
    <Background />
               <Navbar />
               <Container className="">
                   <Row  className="align-items-center py-5">
 <Image
              src="/images/blog1.png"
              width={300}
              height={300}
              className="img-fluid rounded-3"
            />
            </Row>
               </Container>
    <Container className="my-4">
        
      {blogs.map((blog) => (
        <Row key={blog.id} className="align-items-center py-5">
          {/* Image Section */}
          <Col md={3} sm={12}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={200}
              className="img-fluid rounded-3"
            />
          </Col>

          {/* Text Content Section */}
          <Col md={9} sm={12}>
            <div className='px-3'>
              <h5 className="fw-bold">{blog.title}</h5>
              <p className="text-primary fw-semibold">{blog.category}</p>
              <p className="text-muted">{blog.description}</p>

              {/* Author + Read time */}
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="d-flex align-items-center">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className="rounded-circle me-2"
                  />
                  <span>{blog.author.name}</span>
                </div>
                <span className="text-muted">{blog.readTime}</span>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
    <Footer/>
    </>
  );
}
