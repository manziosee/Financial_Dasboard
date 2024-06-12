import { HeaderBox } from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
    const loggedIn = { firstName: 'Osee', lastName: 'Manzi', email:'oseemanzi3@gmail.com' };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                <div className="recent-transactions">
                    <h2>Recent Transactions</h2>
                    {/* Placeholder for recent transactions list */}
                    <p>No recent transactions available.</p>
                </div>
            </div>
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50}, { currentBalance: 500.23}]}
            />
        </section>
    );
};

export default Home;
