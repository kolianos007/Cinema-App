import { GetStaticProps, NextPage } from 'next'

import Collections from '@/components/screens/Collections/Collections'
import { ICollection } from '@/components/screens/Collections/collections.interface'

import { GenreService } from '@/services/genre.service'

import Error404 from './404'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	console.log('collections', collections)
	return collections ? (
		<Collections collections={collections || []} />
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()
		console.log('collections', collections)

		return {
			props: {
				collections,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			// props: {},
			notFound: true,
		}
	}
}

export default GenresPage
