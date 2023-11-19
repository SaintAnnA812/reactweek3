import style from '../src/style/App.module.scss'
import Tarif from '../src/Components/Tarif/Tarif'


function App() {

  return (
    <>

      <div className={style.container}>

        <div className={style.tarif1}>
          <Tarif
            name='Безлимитный 300'
            price="руб 300/мес"
            speed="до 10 Мбит/сек"
            info="Объём включённого трафика не ограничен"
          /></div>
        <div className={style.tarif2}>
          <Tarif
            name="Безлимитный 450"
            price="руб 450/мес"
            speed="до 50 Мбит/сек"
            info="Объём включённого трафика не ограничен"
          />
        </div>
        <div className={style.isSelected}>
          <Tarif
            name='Безлимитный 550'
            price="руб 550/мес"
            speed="до 100 Мбит/сек"
            info="Объём включённого трафика не ограничен"
          /></div>
        <div className={style.tarif4}>
          <Tarif
            name='Безлимитный 1000'
            price="руб 1000/мес"
            speed="до 200 Мбит/сек"
            info="Объём включённого трафика не ограничен"
          />
        </div>
      </div>
    </>
  )
}
export default App
