import Report from '../../components/Report';
import CurrentMonth from '../../components/CurrentMonth/CurrentMonth';
import GoHome from '../../components/GoHome/GoHome';
import Balance from '../../components/Balance';


import s from './ReportsPage.module.css';

import Chart from '../../components/Chart';

import Container from '../../components/Container'
import Loader from '../../components/Loader'
import { getLoader } from '../../redux/transactions-selectors';
import { useSelector } from 'react-redux';


const ReportsPage = () => {
  const loader = useSelector(getLoader);
  return (

    <>

      <Container >
        {loader && <Loader />}
       <div className={s.section}>
        <GoHome />
          <div className={s.flex}>
          <CurrentMonth />
          <Balance/>
          </div>
        </div>

        </Container>
      <Report />
      {/* <Chart/> */}
    
    </>

  );
};

export default ReportsPage;
