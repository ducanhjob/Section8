import { useState, useCallback } from 'react';
import { HSB, RGB, hsbToRgb, rgbToHsb, hexToRgb, rgbToHex } from '../utils/colorConversion';

export function useColorState(initialColor: HSB) {
  const [color, setColor] = useState<HSB>(initialColor);
  const [textField, setTextField] = useState<string>(rgbToHex(hsbToRgb(initialColor)));

  const handleColorPickerChange = useCallback((newColor: HSB) => {
    setColor(newColor);
    setTextField(rgbToHex(hsbToRgb(newColor)));
  }, []);

  const handleTextFieldChange = useCallback((value: string) => {
    setTextField(value);
    if (value.startsWith('#')) {
      try {
        const rgb = hexToRgb(value);
        setColor(rgbToHsb(rgb));
      } catch (e) {
        console.error('Invalid HEX format');
      }
    } else if (value.startsWith('rgb')) {
      try {
        const rgb = value.match(/\d+/g)?.map(Number) as [number, number, number];
        setColor(rgbToHsb({ r: rgb[0], g: rgb[1], b: rgb[2] }));
      } catch (e) {
        console.error('Invalid RGB format');
      }
    }
  }, []);

  return { color, textField, handleColorPickerChange, handleTextFieldChange };
}

