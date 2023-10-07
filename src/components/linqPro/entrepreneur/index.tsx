import EntrepreneurContext from './entrepreneurContext';
import EntrepreneurMedia from './entrepreneurMedia';

const Entrepreneur = () => {
  return (
    <div className="w-full bg-darkPurple pb-28 pt-16">
      <EntrepreneurContext />
      <EntrepreneurMedia />
    </div>
  );
};
export default Entrepreneur;
