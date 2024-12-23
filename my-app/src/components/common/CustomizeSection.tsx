import React from 'react';
import { Card, Text, InlineGrid, TextField } from '@shopify/polaris';
import { ColorPickerField } from './ColorPickerField';
import { handleNumberChange } from '../../utils/commonUtils';
import { HSB } from '../../utils/colorConversion';

interface CustomizeSectionProps {
  cornerRadius: string;
  setCornerRadius: React.Dispatch<React.SetStateAction<string>>;
  borderWeight: string;
  setBorderWeight: React.Dispatch<React.SetStateAction<string>>;
  mainTitleFontSize: string;
  setMainTitleFontSize: React.Dispatch<React.SetStateAction<string>>;
  descriptionFontSize: string;
  setDescriptionFontSize: React.Dispatch<React.SetStateAction<string>>;
  barsTitleFontSize: string;
  setBarsTitleFontSize: React.Dispatch<React.SetStateAction<string>>;
  barsSubtitleFontSize: string;
  setBarsSubtitleFontSize: React.Dispatch<React.SetStateAction<string>>;
  colorStates: {
    [key: string]: {
      color: HSB;
      textField: string;
      handleColorPickerChange: (color: HSB) => void;
      handleTextFieldChange: (value: string) => void;
    };
  };
}

export const CustomizeSection: React.FC<CustomizeSectionProps> = ({
  cornerRadius,
  setCornerRadius,
  borderWeight,
  setBorderWeight,
  mainTitleFontSize,
  setMainTitleFontSize,
  descriptionFontSize,
  setDescriptionFontSize,
  barsTitleFontSize,
  setBarsTitleFontSize,
  barsSubtitleFontSize,
  setBarsSubtitleFontSize,
  colorStates
}) => {
  return (
    <Card>
      <Text as="h2" variant="headingSm">Customize</Text>
      <hr />
      <Text variant="headingSm" as="h3">Border</Text>
      <InlineGrid gap="400" columns={2}>
        <TextField
          label="Corner radius"
          type="number"
          value={cornerRadius}
          onChange={handleNumberChange(setCornerRadius)}
          autoComplete="off"
        />
        <TextField
          label="Border weight"
          type="number"
          value={borderWeight}
          onChange={handleNumberChange(setBorderWeight)}
          autoComplete="off"
        />
      </InlineGrid>
      <hr />
      <Text variant="headingSm" as="p">Color</Text>
      <InlineGrid gap="400" columns={3}>
        {Object.entries(colorStates).map(([key, state]) => (
          <ColorPickerField 
            key={key}
            label={key} 
            color={state.color}
            textField={state.textField}
            onColorChange={state.handleColorPickerChange}
            onTextFieldChange={state.handleTextFieldChange}
          />
        ))}
      </InlineGrid>
      <hr />
      <Text variant="headingSm" as="p">Typography</Text>
      <InlineGrid gap="400" columns={2}>
        <TextField
          label="Main title font size"
          type="number"
          suffix="px"
          value={mainTitleFontSize}
          onChange={handleNumberChange(setMainTitleFontSize)}
          autoComplete="off"
        />
        <TextField
          label="Description font size"
          type="number"
          suffix="px"
          value={descriptionFontSize}
          onChange={handleNumberChange(setDescriptionFontSize)}
          autoComplete="off"
        />
      </InlineGrid>
      <InlineGrid gap="400" columns={2}>
        <TextField
          label="Bars title font size"
          type="number"
          suffix="px"
          value={barsTitleFontSize}
          onChange={handleNumberChange(setBarsTitleFontSize)}
          autoComplete="off"
        />
        <TextField
          label="Bars subtitle font size"
          type="number"
          suffix="px"
          value={barsSubtitleFontSize}
          onChange={handleNumberChange(setBarsSubtitleFontSize)}
          autoComplete="off"
        />
      </InlineGrid>
    </Card>
  );
};

