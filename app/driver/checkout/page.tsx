"use client";
import BackHeader from '@/components/common/BackHeader'
import Button from '@/components/common/Button';
import Input from '@/components/common/Input'
import { Warr_iocn } from '@/components/icons/icons';
import { toEnglishNumber } from '@/helper/utils/toFarsiNumber';
import { validationSchemaCheckout } from '@/helper/utils/validation/checkout';
import useCheckoutByDriverMutation from '@/hooks/mutation/checkout/useCheckoutByDriverMutation';
import { useFormik } from 'formik'

const Checkout = () => {
  const { mutate, isError, error, isLoading } = useCheckoutByDriverMutation()
  const formik = useFormik({
    initialValues: {
      amount: ""
    },
    validationSchema: validationSchemaCheckout,
    onSubmit: (values) => {
      mutate({ amount: Number(toEnglishNumber(values.amount)) })
    }
  })
  return (
    <div className='w-90 flex flex-col justify-between min-h-screen'>
      <div>
        <BackHeader name='درخواست تسویه حساب' url='/driver/profile' />
          <Input classInput='mt-10' ltr formik={formik} name='amount' label='مبلغ تسویه (تومان)' />
        
      </div>

      {isError && (
        <div className="flex flex-col -mt-5 gap-3 items-center justify-center">
          <Warr_iocn />
          {/* @ts-ignore */}
          <p className="text-center text-orange font-artin-light">{error?.response?.data?.Message}</p>
        </div>
      )}
      <Button onClick={formik.handleSubmit} isLoading={isLoading} className='!bg-green-500 !mb-4 !text-white' name='درخواست تسویه' />
    </div>
  )
}

export default Checkout