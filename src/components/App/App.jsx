import './App.scss';
import CardBlock from '../CardBlock/CardBlock';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';

function App() {
  const [visible, setVisible] = useState(true);
  const [arr, setArr] = useState([]);
  const [check, setCheck] = useState();
  const length = 32;

  function generationArr(length) {
    //створюємо масив допустимих значень та виймаємо з нього випадкові.

    let arr = [];
    let rundomnumber;

    while (arr.length < length / 2) {
      rundomnumber = Math.floor(Math.random() * 60) + 1;
      if (arr.indexOf(rundomnumber) === -1) {
        // Перевіримо чи є таке число
        arr.push(rundomnumber);
      }
    }

    const values = arr.map((item) => item);
    const result = [...arr, ...values];

    const newArr = [...Array(length)].map(
      () => result.splice(Math.floor(Math.random() * result.length), 1)[0],
    );

    return newArr;
  }

  useEffect(() => {
    setArr(generationArr(length));
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <div className="main__block block-main">
            {arr.map((item, i) => {
              return (
                <CardBlock
                  key={i}
                  count={item}
                  visible={visible}
                  onClickCheck={(index) => setCheck(index)}
                  check={check}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
