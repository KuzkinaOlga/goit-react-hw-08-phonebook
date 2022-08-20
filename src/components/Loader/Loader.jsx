import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      color="green"
      height={80}
      width={80}
      ariaLabel="three-dots-loading"
    />
  );
};

export default Loader;
