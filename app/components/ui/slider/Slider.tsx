import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'
import { useSlider } from './useSlider'

interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	)
	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				classNames="slide-animation"
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isPrev && (
				<SlideArrow clickHandler={() => handleClick('prev')} variant="left" />
			)}

			{isNext && (
				<SlideArrow clickHandler={() => handleClick('next')} variant="right" />
			)}
		</div>
	)
}

export default Slider
