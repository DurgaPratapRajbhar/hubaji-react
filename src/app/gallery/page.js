import Gallery from '@/components/Gallery';
// import VideoGallery from '@/components/VideoGallery';

export default function GalleryPage() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
        <Gallery />
      </section>
      
      {/* <section>
        <h2 className="text-3xl font-bold text-center mb-8">Video Gallery</h2>
        <VideoGallery />
      </section> */}
    </div>
  );
}