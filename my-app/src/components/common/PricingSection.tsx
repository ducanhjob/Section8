import React from 'react';
import { Card, Text, BlockStack, Checkbox } from '@shopify/polaris';
import { handleCheckboxChange } from '../../utils/commonUtils';

interface PricingSectionProps {
  checkedPerPrices: boolean;
  setCheckedPerPrices: React.Dispatch<React.SetStateAction<boolean>>;
  checkedCompareAtPrice: boolean;
  setCheckedCompareAtPrice: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  checkedPerPrices,
  setCheckedPerPrices,
  checkedCompareAtPrice,
  setCheckedCompareAtPrice
}) => {
  return (
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
  );
};

