import React, { useState, useCallback } from 'react';
import { Page, Layout, Card, Button, Text, InlineStack, BlockStack, Checkbox, TextField, InlineGrid, Box, RadioButton } from '@shopify/polaris';
import { ArrowLeftIcon } from '@shopify/polaris-icons';
import { useColorState } from './hooks/useColorState';
import { ColorPickerField } from './components/ColorPickerField';

export default function VolumeDiscountSettings() {
  const [checkedPerPrices, setCheckedPerPrices] = useState(false);
  const [checkedCompareAtPrice, setCheckedCompareAtPrice] = useState(true);
  const [cornerRadius, setCornerRadius] = useState('14');
  const [borderWeight, setBorderWeight] = useState('2');
  const [mainTitleFontSize, setMainTitleFontSize] = useState('16');
  const [descriptionFontSize, setDescriptionFontSize] = useState('14');
  const [barsTitleFontSize, setBarsTitleFontSize] = useState('14');
  const [barsSubtitleFontSize, setBarsSubtitleFontSize] = useState('14');

  const mainTitleColor = useColorState({ hue: 20, saturation: 1, brightness: 1 });
  const descriptionColor = useColorState({ hue: -120, saturation: 1, brightness: 1 });
  const barsPrimaryColor = useColorState({ hue: 20, saturation: 1, brightness: 1 });
  const barsSubtitleColor = useColorState({ hue: -120, saturation: 1, brightness: 1 });
  const barsBackgroundColor = useColorState({ hue: 0, saturation: 0, brightness: 1 });
  const barsLabelBackgroundColor = useColorState({ hue: 0, saturation: 1, brightness: 1 });

  const handleNumberChange = useCallback((setter: React.Dispatch<React.SetStateAction<string>>) => (newValue: string) => {
    const value = parseFloat(newValue);
    if (!isNaN(value) && value >= 0) {
      setter(newValue);
    } else {
      console.log("Value must be a number greater than or equal to 0");
    }
  }, []);

  const handleCheckboxChange = useCallback((setter: React.Dispatch<React.SetStateAction<boolean>>) => (newChecked: boolean) => {
    setter(newChecked);
  }, []);

  return (
    <Page fullWidth>
      <InlineStack>
        <Button icon={ArrowLeftIcon} />
        <Text variant="headingLg" as="p">Volume discount settings</Text>
      </InlineStack>
      
      <Layout>
        <Layout.Section>
          <Card>
            <Text as="h2" variant="headingMd">Pricing</Text>
            <BlockStack>
              <Checkbox
                label="Show prices per item"
                checked={checkedPerPrices}
                onChange={handleCheckboxChange(setCheckedPerPrices)}
              />
              <Checkbox
                label="Include compare-at price"
                checked={checkedCompareAtPrice}
                onChange={handleCheckboxChange(setCheckedCompareAtPrice)}
              />
            </BlockStack>
          </Card>
          
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
              <ColorPickerField 
                label="Main title" 
                color={mainTitleColor.color}
                textField={mainTitleColor.textField}
                onColorChange={mainTitleColor.handleColorPickerChange}
                onTextFieldChange={mainTitleColor.handleTextFieldChange}
              />
              <ColorPickerField 
                label="Description" 
                color={descriptionColor.color}
                textField={descriptionColor.textField}
                onColorChange={descriptionColor.handleColorPickerChange}
                onTextFieldChange={descriptionColor.handleTextFieldChange}
              />
              <ColorPickerField 
                label="Bars primary color" 
                color={barsPrimaryColor.color}
                textField={barsPrimaryColor.textField}
                onColorChange={barsPrimaryColor.handleColorPickerChange}
                onTextFieldChange={barsPrimaryColor.handleTextFieldChange}
              />
            </InlineGrid>
            <hr />
            <InlineGrid gap="400" columns={3}>
              <ColorPickerField 
                label="Bars subtitle" 
                color={barsSubtitleColor.color}
                textField={barsSubtitleColor.textField}
                onColorChange={barsSubtitleColor.handleColorPickerChange}
                onTextFieldChange={barsSubtitleColor.handleTextFieldChange}
              />
              <ColorPickerField 
                label="Bars background" 
                color={barsBackgroundColor.color}
                textField={barsBackgroundColor.textField}
                onColorChange={barsBackgroundColor.handleColorPickerChange}
                onTextFieldChange={barsBackgroundColor.handleTextFieldChange}
              />
              <ColorPickerField 
                label="Bars label background" 
                color={barsLabelBackgroundColor.color}
                textField={barsLabelBackgroundColor.textField}
                onColorChange={barsLabelBackgroundColor.handleColorPickerChange}
                onTextFieldChange={barsLabelBackgroundColor.handleTextFieldChange}
              />
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
        </Layout.Section>
        
        <Layout.Section variant="oneThird">
          <Card>
            <Text as="h2" variant="headingMd">
              Preview
            </Text>
            <Text variant="headingLg" as="p" alignment="center">
              <p style={{fontSize: `${mainTitleFontSize}px`, fontWeight: 700, color: mainTitleColor.textField}}>
                Bundle and save
              </p>
            </Text>
            <Text variant="headingSm" as="p" alignment="start">
              <p style={{fontSize: `${descriptionFontSize}px`, color: descriptionColor.textField}}>
                Apply for all products in store
              </p>
            </Text>
            <Box paddingBlock="100">
              <Card>
                <div className="row">
                  <div className="col-1 d-flex justify-content-center">
                    <RadioButton
                      checked={false}
                      label=""
                      disabled={false}
                    />
                  </div>
                  <div className="col-11">
                    <div className="row" style={{ color: barsPrimaryColor.textField, fontSize: `${barsTitleFontSize}px` }}>
                      <div className="col-9">
                        <span>Buy 1</span>
                      </div>
                      <div className="col-3 d-flex justify-content-end">
                        {(checkedPerPrices || checkedCompareAtPrice) && (
                          <span>100<u>đ</u></span>
                        )}
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-9">
                        <span style={{color: barsSubtitleColor.textField, fontSize: `${barsSubtitleFontSize}px`}}>
                          Standard price
                        </span>
                      </div>
                      {checkedCompareAtPrice && (
                        <div className="col-3 d-flex justify-content-end">
                          <span><s>150</s><u>đ</u></span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </Box>
            <Box paddingBlock="100">
              <div style={{
                border: `solid ${borderWeight}px ${barsPrimaryColor.textField}`,
                borderRadius: `${cornerRadius}px`,
                backgroundColor: barsBackgroundColor.textField
              }}>
                <Card>
                  <div className="row">
                    <div className="col-1 d-flex justify-content-center">
                      <input 
                        style={{
                          width: '18px',
                          accentColor: barsPrimaryColor.textField
                        }} 
                        checked={true} 
                        type="radio" 
                        name="flexRadioDefault" 
                        id="flexRadioDefault2"
                      />
                    </div>
                    <div className="col-11">
                      <div className="row" style={{ color: barsPrimaryColor.textField, fontSize: `${barsTitleFontSize}px` }}>
                        <div className="col-9 d-flex">
                          <p>Buy 2</p>
                          <span className="ms-3" style={{
                            backgroundColor: barsLabelBackgroundColor.textField,
                            height: '60%',
                            paddingLeft: '0.6rem',
                            paddingRight: '0.6rem',
                            borderRadius: '25px',
                            fontSize: '14px',
                            color: barsBackgroundColor.textField,
                          }}>
                            <i>Popular</i>
                          </span>
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                          {(checkedPerPrices || checkedCompareAtPrice) && (
                            <span>180<u>đ</u></span>
                          )}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-9">
                          <span style={{color: barsSubtitleColor.textField, fontSize: `${barsSubtitleFontSize}px`}}>
                            Save 10%
                          </span>
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                          {checkedCompareAtPrice && (
                            <span><s>300<u>đ</u></s></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Box>
            <Box paddingBlock="100">
              <Card>
                <div className="row">
                  <div className="col-1 d-flex justify-content-center">
                    <RadioButton
                      checked={false}
                      label=""
                      disabled={false}
                    />
                  </div>
                  <div className="col-11">
                    <div className="row" style={{ color: barsPrimaryColor.textField, fontSize: `${barsTitleFontSize}px` }}>
                      <div className="col-9">
                        <span>Buy 3</span>
                      </div>
                      <div className="col-3 d-flex justify-content-end">
                        {(checkedPerPrices || checkedCompareAtPrice) && (
                          <span>240<u>đ</u></span>
                        )}
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-9">
                        <span style={{color: barsSubtitleColor.textField, fontSize: `${barsSubtitleFontSize}px`}}>
                          Save 20%
                        </span>
                      </div>
                      <div className="col-3 d-flex justify-content-end">
                        {checkedCompareAtPrice && (
                          <span><s>450<u>đ</u></s></span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Box>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

