import PropTypes from 'prop-types';

const ArrowNav = ({ onClick, arrow, position }) => {
  return (
    <button
      className={`absolute bg-white rounded-full z-10 h-10 w-10 text-4xl font-bold flex justify-center items-center ${position} top-2/4 `}
      onClick={onClick}
    >
      <img src={arrow} alt="arrow" />
    </button>
  );
};

ArrowNav.propTypes = {
  onClick: PropTypes.func,
  arrow: PropTypes.string,
  position: PropTypes.string,
};

export default ArrowNav;
