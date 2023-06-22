export interface FilterProps {
  onChange: (inputValue: string) => void;
  onSaleChange: (isSaleOn: boolean) => void;
  onStockChange: (isStockOn: boolean) => void;
  onRangeClick: (min: number, max: number) => void;
  onShopChange: (material: string) => void;
  onSortChange: (order: string) => void;
}
