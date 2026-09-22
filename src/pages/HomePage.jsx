import Introduction from '../components/Introduction';
import PhotoGallery from '../components/PhotoGallery';

function HomePage() {
  return (
    <>
      <Introduction />
      <section className="home-container">
        <h2>Life Outside Code</h2>
        <PhotoGallery />
      </section>
    </>
  );
}

export default HomePage;
