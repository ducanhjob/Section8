import React from 'react';
import { Card, Text, Box, RadioButton } from '@shopify/polaris';

interface PreviewSectionProps {
  mainTitleFontSize: string;
  descriptionFontSize: string;
  barsTitleFontSize: string;
  barsSubtitleFontSize: string;
  cornerRadius: string;
  borderWeight: string;
  checkedPerPrices: boolean;
  checkedCompareAtPrice: boolean;
  colorStates: {
    [key: string]: {
      textField: string;
    };
  };
}

export const PreviewSection: React.FC<PreviewSectionProps> = ({
  mainTitleFontSize,
  descriptionFontSize,
  barsTitleFontSize,
  barsSubtitleFontSize,
  cornerRadius,
  borderWeight,
  checkedPerPrices,
  checkedCompareAtPrice,
  colorStates
}) => {
  return (
    <Card>
      <Text as="h2" variant="headingMd">
        Preview
      </Text>
      <Text variant="headingLg" as="p" alignment="center">
        <p style={{fontSize: `${mainTitleFontSize}px`, fontWeight: 700, color: colorStates['Main title'].textField}}>
          Bundle and save
        </p>
      </Text>
      <Text variant="headingSm" as="p" alignment="start">
        <p style={{fontSize: `${descriptionFontSize}px`, color: colorStates['Description'].textField}}>
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
              <div className="row" style={{ color: colorStates['Bars primary color'].textField, fontSize: `${barsTitleFontSize}px` }}>
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
                  <span style={{color: colorStates['Bars subtitle'].textField, fontSize: `${barsSubtitleFontSize}px`}}>
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
          border: `solid ${borderWeight}px ${colorStates['Bars primary color'].textField}`,
          borderRadius: `${cornerRadius}px`,
          backgroundColor: colorStates['Bars background'].textField
        }}>
          <Card>
            <div className="row">
              <div className="col-1 d-flex justify-content-center">
                <input 
                  style={{
                    width: '18px',
                    accentColor: colorStates['Bars primary color'].textField
                  }} 
                  checked={true} 
                  type="radio" 
                  name="flexRadioDefault" 
                  id="flexRadioDefault2"
                />
              </div>
              <div className="col-11">
                <div className="row" style={{ color: colorStates['Bars primary color'].textField, fontSize: `${barsTitleFontSize}px` }}>
                  <div className="col-9 d-flex">
                    <p>Buy 2</p>
                    <span className="ms-3" style={{
                      backgroundColor: colorStates['Bars label background'].textField,
                      height: '60%',
                      paddingLeft: '0.6rem',
                      paddingRight: '0.6rem',
                      borderRadius: '25px',
                      fontSize: '14px',
                      color: colorStates['Bars background'].textField,
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
                    <span style={{color: colorStates['Bars subtitle'].textField, fontSize: `${barsSubtitleFontSize}px`}}>
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
              <div className="row" style={{ color: colorStates['Bars primary color'].textField, fontSize: `${barsTitleFontSize}px` }}>
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
                  <span style={{color: colorStates['Bars subtitle'].textField, fontSize: `${barsSubtitleFontSize}px`}}>
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
  );
};

