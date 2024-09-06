import style from './App.module.scss';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className={style.App}>
      <AppRouter />
    </div>
  );
}

export default App;
