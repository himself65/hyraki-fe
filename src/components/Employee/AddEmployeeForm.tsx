import React, { FormEvent, useCallback, useState } from 'react'
import { Form } from 'antd'

const AddEmployeeForm: React.FC = () => {
  const [finished, setFinished] = useState(false)
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    // todo
  }, [finished])

  // todo
  return (
    <Form onSubmit={handleSubmit}>
    </Form>
  )
}

export default AddEmployeeForm
