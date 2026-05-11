// Mock Data for HerBudget MVP
import type {
  User,
  Transaction,
  Budget,
  Goal,
  Bill,
  DashboardData,
  CategoryInfo,
  SpendingCategory,
  CategoryBreakdown,
  PeerComparison,
  DemographicInsights,
} from '@/types';

// Category definitions matching the design system
export const CATEGORIES: CategoryInfo[] = [
  { id: 'housing', label: 'Housing', icon: '🏠', color: '#B76E79' },
  { id: 'food', label: 'Food & Dining', icon: '🍽️', color: '#9CAF88' },
  { id: 'transportation', label: 'Transport', icon: '🚗', color: '#7BA3C9' },
  { id: 'healthcare', label: 'Healthcare', icon: '💊', color: '#E57373' },
  { id: 'personal', label: 'Personal', icon: '👗', color: '#C9A9C9' },
  { id: 'family', label: 'Family', icon: '👶', color: '#F08080' },
  { id: 'entertainment', label: 'Entertainment', icon: '🎬', color: '#FFB74D' },
  { id: 'savings', label: 'Savings', icon: '💰', color: '#9CAF88' },
  { id: 'debt', label: 'Debt', icon: '📋', color: '#E57373' },
  { id: 'other', label: 'Other', icon: '📦', color: '#6B6B6B' },
];

// Mock user
export const mockUser: User = {
  id: 'user-1',
  name: 'Sarah Mitchell',
  email: 'sarah.mitchell@email.com',
  lifeStage: 'mid-career',
  avatarUrl: undefined,
  createdAt: '2024-01-15T10:00:00Z',
};

// Mock transactions
export const mockTransactions: Transaction[] = [
  {
    id: 'txn-1',
    userId: 'user-1',
    amount: 1850,
    category: 'housing',
    merchant: 'Riverview Apartments',
    date: '2024-05-01',
    isExpense: true,
  },
  {
    id: 'txn-2',
    userId: 'user-1',
    amount: 127.43,
    category: 'food',
    merchant: 'Whole Foods Market',
    date: '2024-05-03',
    isExpense: true,
  },
  {
    id: 'txn-3',
    userId: 'user-1',
    amount: 45.00,
    category: 'transportation',
    merchant: 'Shell Gas Station',
    date: '2024-05-04',
    isExpense: true,
  },
  {
    id: 'txn-4',
    userId: 'user-1',
    amount: 3200,
    category: 'income',
    merchant: 'TechCorp Industries',
    date: '2024-05-05',
    isExpense: false,
  },
  {
    id: 'txn-5',
    userId: 'user-1',
    amount: 89.99,
    category: 'healthcare',
    merchant: 'CVS Pharmacy',
    date: '2024-05-06',
    isExpense: true,
  },
  {
    id: 'txn-6',
    userId: 'user-1',
    amount: 156.32,
    category: 'food',
    merchant: 'Trader Joe\'s',
    date: '2024-05-07',
    isExpense: true,
  },
  {
    id: 'txn-7',
    userId: 'user-1',
    amount: 72.50,
    category: 'personal',
    merchant: 'Sephora',
    date: '2024-05-08',
    isExpense: true,
  },
  {
    id: 'txn-8',
    userId: 'user-1',
    amount: 245.00,
    category: 'family',
    merchant: 'Kids Soccer League',
    date: '2024-05-09',
    isExpense: true,
  },
  {
    id: 'txn-9',
    userId: 'user-1',
    amount: 14.99,
    category: 'entertainment',
    merchant: 'Netflix',
    date: '2024-05-10',
    isExpense: true,
  },
  {
    id: 'txn-10',
    userId: 'user-1',
    amount: 500.00,
    category: 'savings',
    merchant: 'Emergency Fund Transfer',
    date: '2024-05-10',
    isExpense: true,
  },
  {
    id: 'txn-11',
    userId: 'user-1',
    amount: 38.00,
    category: 'food',
    merchant: 'Starbucks',
    date: '2024-05-11',
    isExpense: true,
  },
  {
    id: 'txn-12',
    userId: 'user-1',
    amount: 2200,
    category: 'housing',
    merchant: 'Riverview Apartments',
    date: '2024-05-01',
    isExpense: true,
  },
  {
    id: 'txn-13',
    userId: 'user-1',
    amount: 85.00,
    category: 'transportation',
    merchant: 'Uber',
    date: '2024-05-12',
    isExpense: true,
  },
  {
    id: 'txn-14',
    userId: 'user-1',
    amount: 320.00,
    category: 'debt',
    merchant: 'Student Loan Payment',
    date: '2024-05-15',
    isExpense: true,
  },
  {
    id: 'txn-15',
    userId: 'user-1',
    amount: 54.00,
    category: 'healthcare',
    merchant: 'Hair Salon',
    date: '2024-05-16',
    isExpense: true,
  },
];

// Mock budgets
export const mockBudgets: Budget[] = [
  { id: 'budget-1', userId: 'user-1', category: 'housing', monthlyLimit: 2200, spent: 2200, month: '2024-05' },
  { id: 'budget-2', userId: 'user-1', category: 'food', monthlyLimit: 600, spent: 367.75, month: '2024-05' },
  { id: 'budget-3', userId: 'user-1', category: 'transportation', monthlyLimit: 300, spent: 130, month: '2024-05' },
  { id: 'budget-4', userId: 'user-1', category: 'healthcare', monthlyLimit: 200, spent: 143.99, month: '2024-05' },
  { id: 'budget-5', userId: 'user-1', category: 'personal', monthlyLimit: 200, spent: 72.50, month: '2024-05' },
  { id: 'budget-6', userId: 'user-1', category: 'family', monthlyLimit: 400, spent: 245, month: '2024-05' },
  { id: 'budget-7', userId: 'user-1', category: 'entertainment', monthlyLimit: 150, spent: 14.99, month: '2024-05' },
  { id: 'budget-8', userId: 'user-1', category: 'savings', monthlyLimit: 640, spent: 500, month: '2024-05' },
  { id: 'budget-9', userId: 'user-1', category: 'debt', monthlyLimit: 400, spent: 320, month: '2024-05' },
];

// Mock goals
export const mockGoals: Goal[] = [
  {
    id: 'goal-1',
    userId: 'user-1',
    name: 'Emergency Fund',
    targetAmount: 15000,
    currentAmount: 8500,
    targetDate: '2024-12-31',
    category: 'emergency',
  },
  {
    id: 'goal-2',
    userId: 'user-1',
    name: 'Vacation to Hawaii',
    targetAmount: 5000,
    currentAmount: 2200,
    targetDate: '2024-08-15',
    category: 'vacation',
  },
  {
    id: 'goal-3',
    userId: 'user-1',
    name: 'New Laptop',
    targetAmount: 2500,
    currentAmount: 2500,
    targetDate: '2024-06-01',
    category: 'other',
  },
];

// Mock bills
export const mockBills: Bill[] = [
  { id: 'bill-1', userId: 'user-1', name: 'Rent', amount: 1850, dueDate: '2024-05-01', isPaid: true, recurring: 'monthly' },
  { id: 'bill-2', userId: 'user-1', name: 'Car Insurance', amount: 145, dueDate: '2024-05-15', isPaid: false, recurring: 'monthly' },
  { id: 'bill-3', userId: 'user-1', name: 'Phone Bill', amount: 85, dueDate: '2024-05-20', isPaid: false, recurring: 'monthly' },
  { id: 'bill-4', userId: 'user-1', name: 'Student Loan', amount: 320, dueDate: '2024-05-15', isPaid: true, recurring: 'monthly' },
  { id: 'bill-5', userId: 'user-1', name: 'Gym Membership', amount: 49, dueDate: '2024-05-25', isPaid: false, recurring: 'monthly' },
];

// Helper to calculate category breakdown
function calculateCategoryBreakdown(): CategoryBreakdown[] {
  const expensesByCategory: Record<string, number> = {};
  let totalExpenses = 0;

  mockTransactions
    .filter(t => t.isExpense)
    .forEach(t => {
      expensesByCategory[t.category] = (expensesByCategory[t.category] || 0) + t.amount;
      totalExpenses += t.amount;
    });

  return CATEGORIES
    .filter(c => c.id !== 'other')
    .map(cat => {
      const amount = expensesByCategory[cat.id] || 0;
      const budget = mockBudgets.find(b => b.category === cat.id);
      return {
        category: cat.id as SpendingCategory,
        amount,
        percentage: totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0,
        budget: budget?.monthlyLimit || 0,
        isOverBudget: budget ? amount > budget.monthlyLimit : false,
      };
    })
    .filter(c => c.amount > 0)
    .sort((a, b) => b.amount - a.amount);
}

// Mock dashboard data
export const mockDashboardData: DashboardData = {
  savingsRate: 15.6,
  monthlyBudgetStatus: 78,
  emergencyFundProgress: 57,
  peerRank: 'Top 35%',
  spendingSnapshot: calculateCategoryBreakdown(),
  goals: mockGoals,
  upcomingBills: mockBills.filter(b => !b.isPaid),
};

// Mock peer comparison
export const mockPeerComparison: PeerComparison = {
  userPercentile: 35,
  ageGroup: '35-44',
  incomeBracket: '$75,000-$100,000',
  categoryComparisons: [
    { category: 'housing', userAmount: 2200, peerAverage: 2400, percentile: 45 },
    { category: 'food', userAmount: 367.75, peerAverage: 450, percentile: 28 },
    { category: 'transportation', userAmount: 130, peerAverage: 200, percentile: 22 },
    { category: 'healthcare', userAmount: 143.99, peerAverage: 180, percentile: 40 },
    { category: 'personal', userAmount: 72.50, peerAverage: 150, percentile: 18 },
    { category: 'entertainment', userAmount: 14.99, peerAverage: 120, percentile: 8 },
    { category: 'savings', userAmount: 500, peerAverage: 640, percentile: 35 },
  ],
};

// Mock demographic insights
export const mockDemographicInsights: DemographicInsights = {
  lifeStage: 'mid-career',
  peerComparison: mockPeerComparison,
  recommendations: [
    {
      id: 'rec-1',
      title: 'Increase Food Budget Efficiency',
      description: 'Your food spending is 28% below peer average. Consider maintaining this trend by meal planning.',
      category: 'food',
      potentialSavings: 82,
    },
    {
      id: 'rec-2',
      title: 'Emergency Fund Progress',
      description: 'You\'re 57% towards your emergency fund goal. Aim for 3-6 months of expenses.',
      category: 'savings',
      potentialSavings: 0,
    },
    {
      id: 'rec-3',
      title: 'Entertainment Spending',
      description: 'Your entertainment spending is in the top 8% of your peer group - in a good way!',
      category: 'entertainment',
      potentialSavings: 105,
    },
  ],
  tools: [
    { id: 'tool-1', name: 'Maternity Leave Planner', description: 'Plan your finances during maternity leave', icon: '👶', route: '/tools/maternity' },
    { id: 'tool-2', name: 'Pay Gap Analyzer', description: 'Compare your earnings to industry benchmarks', icon: '📊', route: '/tools/paygap' },
    { id: 'tool-3', name: 'Retirement Calculator', description: 'Plan for a secure retirement', icon: '🏖️', route: '/tools/retirement' },
    { id: 'tool-4', name: 'Career Milestones', description: 'Track salary negotiation and promotions', icon: '📈', route: '/tools/career' },
  ],
};

// Utility function to format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Utility function to format percentage
export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

// Utility function to get greeting based on time
export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}
