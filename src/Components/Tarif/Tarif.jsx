import style from '../../style/Tarif.module.scss'


export default function Tarif(props) {
    return (
        <div className={style.container} >

            <div className={style.name}>
                <h1>{props.name}</h1></div>

            <div className={style.price}>
                <p>{props.price}</p></div>
            <h2 className={style.speed}>{props.speed}</h2>
            <p className={style.info}>{props.info}</p>


        </div >
    )
}