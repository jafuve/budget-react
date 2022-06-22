import { Container, Segment, Statistic, Grid, Icon } from 'semantic-ui-react';
import './App.css';
import { DisplayBalance } from './components/DisplayBalance';
import { DisplayBalances } from './components/DisplayBalances';
import { EntryLine } from './components/EntryLine';
import MainHeader from './components/MainHeader';
import { NewEntryForm } from './components/NewEntryForm';

function App() {
  return (
    <Container>

      <MainHeader title='Budget' />
      
      <DisplayBalance title='Your Balance' value='25,530.15' size='small'/>
      <DisplayBalances/>

      <MainHeader type='h3' title='History' />

      <EntryLine description='Income' value='$10.00' />
      <EntryLine description='Expense' value='$10.00' isExpense />
      
      <MainHeader title='Add new transaction' as='h3'/>
      <NewEntryForm/>
    </Container>
  );
}

export default App;
