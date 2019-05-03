import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import pricingPlanItems from './PricingPlan/pricing-plan';
import PricingPlan from './PricingPlan/PricingPlan';
import transactions from './TransactionHistory/transactions';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const user = {
  name: 'Timothy Grant',
  tag: 'tgrant',
  location: 'San Paulo, Brazil',
  avatar:
    'https://icdn.lenta.ru/images/2016/01/22/12/20160122123602668/detail_dbd7e16e6f2a3378ef1535c607f8fb8f.jpg',
  stats: {
    followers: 198,
    views: 3685,
    likes: 492,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 32 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
];

const App = () => (
  <div>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <TransactionHistory items={transactions} />
    <PricingPlan items={pricingPlanItems} />
  </div>
);

export default App;
