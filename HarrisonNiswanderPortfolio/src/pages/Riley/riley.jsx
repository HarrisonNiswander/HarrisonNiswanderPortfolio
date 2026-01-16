import "./riley_styles/riley.css";
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import ImageCarouselVert from '../../components/image-carousel-vert/image-carousel-vert.jsx';

//images
import plan1 from '../../images/riley-page/plan/plan1.jpeg';
import plan2 from '../../images/riley-page/plan/plan2.jpeg';
import plan3 from '../../images/riley-page/plan/plan3.jpeg';
import plan4 from '../../images/riley-page/plan/plan4.jpeg';
import plan5 from '../../images/riley-page/plan/plan5.jpeg';

const carouselPlan = [
    { src: plan1, description: 'Image #1 for plan' },
    { src: plan2, description: 'Image #2 for plan' },
    { src: plan3, description: 'Image #3 for plan' },
    { src: plan4, description: 'Image #4 for plan' },
    { src: plan5, description: 'Image #5 for plan' },
];

const riley = () => {
    
    return (
    <div>
        <Header />

        <h1>Happy 2 Years Riley: Wooden Calendar</h1>

        <br/>

        <h2>The Initial Plan</h2>

        <div className="carousel">
            <ImageCarouselVert images={carouselPlan} interval={4000} className="plan-carousel"/>
        </div>

        <br/>
        
        <Footer />

    </div>

    );
    
}
    
export default riley;