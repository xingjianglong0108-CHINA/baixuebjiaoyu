
export enum Tab {
  OVERVIEW = 'overview',
  LIFESTYLE = 'lifestyle',
  TREATMENT = 'treatment',
  EMERGENCY = 'emergency'
}

export interface ChecklistItem {
  id: string;
  category: string;
  content: string;
  important?: boolean;
}

export interface EmergencyRule {
  id: number;
  text: string;
}
