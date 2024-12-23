import React, { useState } from 'react';
import { Page, Layout, Button, Text, InlineStack } from '@shopify/polaris';
import { ArrowLeftIcon } from '@shopify/polaris-icons';
import { useColorState } from '../hooks/useColorState';
import { PricingSection } from './common/PricingSection';
import { CustomizeSection } from './common/CustomizeSection';
import { PreviewSection } from './common/PreviewSection';

export default function VolumeDiscountSettings() {
  const [checkedPerPrices, setCheckedPerPrices] = useState(false);
  const [checkedCompareAtPrice, setCheckedCompareAtPrice] = useState(true);
  const [cornerRadius, setCornerRadius] = useState('14');
  const [borderWeight, setBorderWeight] = useState('2');
  const [mainTitleFontSize, setMainTitleFontSize] = useState('16');
  const [descriptionFontSize, setDescriptionFontSize] = useState('14');
  const [barsTitleFontSize, setBarsTitleFontSize] = useState('14');
  const [barsSubtitleFontSize, setBarsSubtitleFontSize] = useState('14');

  const colorStates = {
    'Main title': useColorState({ hue: 20, saturation: 1, brightness: 1 }),
    'Description': useColorState({ hue: -120, saturation: 1, brightness: 1 }),
    'Bars primary color': useColorState({ hue: 20, saturation: 1, brightness: 1 }),
    'Bars subtitle': useColorState({ hue: -120, saturation: 1, brightness: 1 }),
    'Bars background': useColorState({ hue: 0, saturation: 0, brightness: 1 }),
    'Bars label background': useColorState({ hue: 0, saturation: 1, brightness: 1 }),
  };

  return (
    <Page fullWidth>
      <InlineStack>
        <Button icon={ArrowLeftIcon} />
        <Text variant="headingLg" as="p">Volume discount settings</Text>
      </InlineStack>
      
      <Layout>
        <Layout.Section>
          <PricingSection
            checkedPerPrices={checkedPerPrices}
            setCheckedPerPrices={setCheckedPerPrices}
            checkedCompareAtPrice={checkedCompareAtPrice}
            setCheckedCompareAtPrice={setCheckedCompareAtPrice}
          />
          
          <CustomizeSection
            cornerRadius={cornerRadius}
            setCornerRadius={setCornerRadius}
            borderWeight={borderWeight}
            setBorderWeight={setBorderWeight}
            mainTitleFontSize={mainTitleFontSize}
            setMainTitleFontSize={setMainTitleFontSize}
            descriptionFontSize={descriptionFontSize}
            setDescriptionFontSize={setDescriptionFontSize}
            barsTitleFontSize={barsTitleFontSize}
            setBarsTitleFontSize={setBarsTitleFontSize}
            barsSubtitleFontSize={barsSubtitleFontSize}
            setBarsSubtitleFontSize={setBarsSubtitleFontSize}
            colorStates={colorStates}
          />
        </Layout.Section>
        
        <Layout.Section variant="oneThird">
          <PreviewSection
            mainTitleFontSize={mainTitleFontSize}
            descriptionFontSize={descriptionFontSize}
            barsTitleFontSize={barsTitleFontSize}
            barsSubtitleFontSize={barsSubtitleFontSize}
            cornerRadius={cornerRadius}
            borderWeight={borderWeight}
            checkedPerPrices={checkedPerPrices}
            checkedCompareAtPrice={checkedCompareAtPrice}
            colorStates={colorStates}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}

