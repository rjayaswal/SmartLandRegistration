export interface SideMenuOption {
    iconName?: string;
    displayText: string;
    component?: any;
    custom?: any;
    selected?: boolean;
    suboptions?: Array<SideMenuOption>;
}