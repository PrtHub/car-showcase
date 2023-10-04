/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const Seo = ({ title }) => {
  return (
    <Helmet>
      <title className="capitalize">{title}</title>
      <meta
        name="description"
        content="Discover an extensive selection of top-quality cars and easily find the perfect vehicle to fit your needs. Browse, compare, and book your dream car today."
      />
    </Helmet>
  );
};

export default Seo;
