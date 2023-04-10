import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';
const inputId = nanoid();
const Filter = ({ value, onChange }) => (
  <>
    <FilterLabel htmlFor={inputId}>Find contacts by name</FilterLabel>
    <FilterInput type="text" value={value} id={inputId} onChange={onChange} />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
