"use client"
import Table from '@/components/common/Table'
import { headerTableUser } from '@/helper/utils/data'
import { StyledTableCell, StyledTableRow } from '@/helper/utils/mui'
import { convertDate, spratorNumber, toFarsiNumber } from '@/helper/utils/toFarsiNumber'
import { User } from '@/types/User'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { BiSearch } from 'react-icons/bi'
interface Props {
    list: { Users: User[], Total: number }
}
const Users = ({ list }: Props) => {
    const [page, setPage] = React.useState(1);
    const router = useRouter()
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      router.push(`/admin?skip=${(value - 1) * 10}`)
    };
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin?q=${e.target.value}`)
    }
    return (
        <div className="flex-1 w-full mb-20">
            <div className='flex items-center mb-10 lg:w-1/2 bg-[#f7f7f7] border px-2 border-[#e1e1e1] rounded-lg py-2'>
                <input placeholder='جستجو...' className='bg-transparent font-artin-regular outline-none w-full' onChange={onChange} />
                <BiSearch size={20}/>
            </div>
            <Table  header={headerTableUser}>
                {list.Users?.map((user, i) => (
                    <StyledTableRow key={i}>
                        <StyledTableCell align="center">{user.FirstName}</StyledTableCell>
                        <StyledTableCell align="center">{user.LastName}</StyledTableCell>
                        <StyledTableCell align="center">{toFarsiNumber(user.Phone)}</StyledTableCell>
                        <StyledTableCell align="center">{convertDate(user.createdAt)}</StyledTableCell>
                        <StyledTableCell align="center">{user.Sex}</StyledTableCell>
                        <StyledTableCell align="center">{spratorNumber(user.Balance)} تومان</StyledTableCell>
                        {/* <StyledTableCell align="center">{toFarsiNumber(user.mobile)}</StyledTableCell> */}
                        {/* <StyledTableCell onClick={() => onSelect(member)} align="center">
                    <BiEditAlt size={20} className="group-hover:!text-blue_deep" color="#9e9e9e" />
                </StyledTableCell> */}
                    </StyledTableRow>
                ))}
            </Table>
            <Pagination onChange={handleChange} color="primary" className='flex justify-center items-center mt-10' count={Math.ceil(list.Total / 10)} variant="outlined" shape="rounded" />
        </div>
    )
}

export default Users