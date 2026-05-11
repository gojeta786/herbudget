// HerBudget Type Definitions

export interface User {
  id: string;
  name: string;
  email: string;
  lifeStage: LifeStage;
  avatarUrl?: string;
  createdAt: string;
}

export type LifeStage = 
  | 'young-professional'
  | 'mid-career'
  | 'established'
  | 'single'
  | 'married'
  | 'mother'
  | 'divorcee'
  | 'caregiver';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  category: SpendingCategory;
  merchant: string;
  date: string;
  isExpense: boolean;
  notes?: string;
}

export type SpendingCategory = 
  | 'housing'
  | 'food'
  | 'transportation'
  | 'healthcare'
  | 'personal'
  | 'family'
  | 'entertainment'
  | 'savings'
  | 'debt'
  | 'income'
  | 'other';

export interface CategoryInfo {
  id: SpendingCategory;
  label: string;
  icon: string;
  color: string;
}

export interface Budget {
  id: string;
  userId: string;
  category: SpendingCategory;
  monthlyLimit: number;
  spent: number;
  month: string; // YYYY-MM format
}

export interface Goal {
  id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  category: 'emergency' | 'vacation' | 'wedding' | 'retirement' | 'other';
}

export interface Bill {
  id: string;
  userId: string;
  name: string;
  amount: number;
  dueDate: string;
  isPaid: boolean;
  recurring: 'monthly' | 'yearly' | 'one-time';
}

export interface SpendingStats {
  totalSpent: number;
  totalBudget: number;
  savingsRate: number;
  essentialRatio: number;
  discretionaryRatio: number;
  categoryBreakdown: CategoryBreakdown[];
}

export interface CategoryBreakdown {
  category: SpendingCategory;
  amount: number;
  percentage: number;
  budget: number;
  isOverBudget: boolean;
}

export interface PeerComparison {
  userPercentile: number;
  ageGroup: string;
  incomeBracket: string;
  categoryComparisons: CategoryPeerComparison[];
}

export interface CategoryPeerComparison {
  category: SpendingCategory;
  userAmount: number;
  peerAverage: number;
  percentile: number;
}

export interface DemographicInsights {
  lifeStage: LifeStage;
  peerComparison: PeerComparison;
  recommendations: Recommendation[];
  tools: Tool[];
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  category: SpendingCategory;
  potentialSavings: number;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  route: string;
}

export interface DashboardData {
  savingsRate: number;
  monthlyBudgetStatus: number;
  emergencyFundProgress: number;
  peerRank: string;
  spendingSnapshot: CategoryBreakdown[];
  goals: Goal[];
  upcomingBills: Bill[];
}
