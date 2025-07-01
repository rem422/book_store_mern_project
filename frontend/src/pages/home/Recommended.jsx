import { useEffect, useState } from 'react';
import BookCard from '../books/BookCard';
// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Recommended = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then((data) => setBooks(data))
    }, [])

  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>

      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          912: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            books.length > 0 && books.slice(8, 16).map((book, index) => (
                <SwiperSlide key={index}>
                    <BookCard key={index} book={book}/>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  )
}

export default Recommended