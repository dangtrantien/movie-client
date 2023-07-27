import Banner from '../components/Browse/Banner';
import OriginalList from '../components/Browse/OriginalList';
import MovieList from '../components/Browse/MovieList';

// ==================================================

const url = 'https://movie-server-xp1w.onrender.com/api/movies';
const userToken = '8qlOkxz4wq';

const requestAPIs = [
  {
    type: 'Original',
    url: `?page=&token=${userToken}`,
  },
  {
    type: 'Search',
    url: `/search?page=&token=${userToken}`,
  },
  {
    type: 'Xu hướng',
    url: `/trending?page=&token=${userToken}`,
  },
  {
    type: 'Xếp hạng cao',
    url: `/top-rate?page=&token=${userToken}`,
  },
  {
    type: 'Hành động',
    url: `/discover?page=&genreId=28&token=${userToken}`,
  },
  {
    type: 'Hài',
    url: `/discover?page=&genreId=35&token=${userToken}`,
  },
  {
    type: 'Kinh dị',
    url: `/discover?page=&genreId=27&token=${userToken}`,
  },
  {
    type: 'Lãng mạn',
    url: `/discover?page=&genreId=10749&token=${userToken}`,
  },
  {
    type: 'Tài liệu',
    url: `/discover?page=&genreId=99&token=${userToken}`,
  },
];

const Browse = () => {
  return (
    <>
      {/* Render page banner */}
      <Banner api={url + requestAPIs[0].url} />

      <OriginalList api={url + requestAPIs[0].url} />

      {/* Render movie theo thể loại */}
      {requestAPIs.map((reqAPI) => (
        <section key={reqAPI.type}>
          {reqAPI.type !== 'Original' && reqAPI.type !== 'Search' && (
            <MovieList type={reqAPI.type} api={url + reqAPI.url} />
          )}
        </section>
      ))}
    </>
  );
};

export default Browse;
