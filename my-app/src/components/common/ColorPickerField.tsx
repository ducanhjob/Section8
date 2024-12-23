import React from 'react';
import { TextField, ColorPicker } from '@shopify/polaris';
import { HSB } from '../../utils/colorConversion';

interface ColorPickerFieldProps {
  label: string;
  color: HSB;
  textField: string;
  onColorChange: (color: HSB) => void;
  onTextFieldChange: (value: string) => void;
}

export function ColorPickerField({ label, color, textField, onColorChange, onTextFieldChange }: ColorPickerFieldProps) {
  return (
    <div>
      <TextField
        label={label}
        value={textField}
        onChange={onTextFieldChange}
        autoComplete="off"
      />
      <div className="mt-2">
        <ColorPicker onChange={onColorChange} color={color} />
      </div>
    </div>
  );
}
