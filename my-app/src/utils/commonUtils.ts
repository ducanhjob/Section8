import { Dispatch, SetStateAction } from 'react';

export const handleNumberChange = (setter: Dispatch<SetStateAction<string>>) => (newValue: string) => {
  const value = parseFloat(newValue);
  if (!isNaN(value) && value >= 0) {
    setter(newValue);
  } else {
    console.log("Value must be a number greater than or equal to 0");
  }
};

export const handleCheckboxChange = (setter: Dispatch<SetStateAction<boolean>>) => (newChecked: boolean) => {
  setter(newChecked);
};

