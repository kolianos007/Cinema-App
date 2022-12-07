import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/config/url.config'

import { IMovie } from '../../../shared/types/movies.types'
import FavoriteButton from '../Single-Movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
			<Link href={getMovieUrl(movie.slug)}>
				<a className={styles.item}>
					<Image
						alt={movie.title}
						src={movie.bigPoster}
						layout="fill"
						draggable={false}
						priority
					/>

					<div className={styles.title}>{movie.title}</div>
				</a>
			</Link>
		</div>
	)
}

export default FavoriteItem
