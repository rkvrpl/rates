import style from './Card.module.css'
import { useState } from 'react'


const Card = (props) =>{
	const { price, mb, theme} = props

	const [selected , setSelected] = useState(true)

	const handelSelectedState = () =>{
		setSelected(!selected)
	}

	return(
		<div onClick={handelSelectedState} 
		className={selected ? 
		style.container :
		`${style.container} ${style.selected}`}>
			<p className={`${theme.dark} ${style.title}`} >Безлимитный {price}</p>
			<div className={`${theme.light} ${style.price}`} >
				<p className={style.currency}>руб</p>
				<p className={style.priceBig}>{price}</p>
				<p className={style.month}>/мес</p>
			</div>
			<p className={style.mb}>до {mb} Мбит/сек</p>
			<p className={style.text}>Объем включенного <br />трафика не ограничен</p>
		</div>
	)
}
export default Card