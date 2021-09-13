import './App.css';
import Customer from './components/customer';

const customer = {
  'name' : '홍길동',
  'birthday' : '961119',
  'gender' : '남',
  'job' : '대학생'
}


function App() {
  return (
    <Customer 
    name={customer.name}
    birthday={customer.birthday}
    gender={customer.gender}
    job={customer.job}
    />
  );
}

export default App;
