import style from './Card.module.css'


const Card = (props) =>{
	const { price, mb, theme, selected} = props

	let classNameDefault = `style.container`
	let classNameSelected = `${style.container} ${style.selected}`
	console.log(selected)

	return(
		
		<div className={{selected}? 
		classNameSelected:
		classNameDefault
		}>
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