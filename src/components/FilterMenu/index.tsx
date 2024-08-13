import './select.css';
import Select from 'react-select';
import { SingleValue } from 'react-select';
interface MenuItem {
  value: string;
  label: string;
}

interface FilterMenuProps {
  setCurrentName: (currentName: MenuItem) => void;
  menuList: MenuItem[];
}
const FilterMenu: React.FC<FilterMenuProps> = ({
  menuList,
  setCurrentName,
}) => {
  const handleChange = (selected: SingleValue<MenuItem>): void => {
    if (selected) {
      setCurrentName(selected); // Обновляем состояние при выборе нового элемента
    }
  };
  return (
    <Select
      options={menuList}
      defaultValue={menuList[0]}
      onChange={handleChange}
      unstyled
      classNames={{
        dropdownIndicator: () => 'dropdownIndicator',
        indicatorSeparator: () => 'indicatorSeparator',
        control: () => 'control',
        menu: () => 'menu',
        option: () => 'option',
      }}
    />
  );
};

export default FilterMenu;
