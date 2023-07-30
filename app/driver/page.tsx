import Menu from '@/components/common/Menu'
import { menuDriver } from '@/helper/utils/data'
import React from 'react'
import SectionAdminPage from './SectionDriverPage'

const Driver = async () => {
    return (
        <main>
            <SectionAdminPage />
            <Menu menu={menuDriver} />
        </main>
    )
}

export default Driver