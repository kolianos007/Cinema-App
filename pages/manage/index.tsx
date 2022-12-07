import { NextPage } from 'next'
import React from 'react'

import Admin from '@/screens/Admin/Home/Admin'

import { NextPageAuth } from '@/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
