export interface KeyValueUnitListItem {
    name: string;
    items: Array<{
        key: string;
        value: string;
        unit: string;
    }>;
}
