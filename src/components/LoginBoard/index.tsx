import React, { useCallback } from 'react'
import { Button, Checkbox, Form, Icon, Input, message } from 'antd'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { FormComponentProps } from 'antd/es/form'
import { login } from '~api/user'
import { Logger } from '~util/debug'
import { observer } from 'mobx-react'
import { store } from '~store'

const LoginBoard = (props: FormComponentProps & RouteComponentProps<any>) => {
  const { validateFields } = props.form
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    validateFields(async (err, value) => {
      if (err) {
        // fixme: error logger
        return
      }
      await login(value.username, value.password).then(res => {
        if (res.status === 200) {
          const successMessage = '登陆成功'
          Logger(successMessage)
          store.logout = false
          message.success(successMessage)
          props.history.push('/dashboard') // fixme: 返回时错误的显示
        } else {
          store.logout = true
          message.error('登陆失败: ', res.status)
          Logger(res)
        }
      })
    })
  }, [])
  const { getFieldDecorator } = props.form! // tip: props.form must exists
  return (
    <Form style={{ padding: '0 0.5rem' }} className='hy-login-board'>
      <Form.Item>
        {
          getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的用户名' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0, 0, 0, 0.25)' }}/>}
              placeholder='账号'
            />
          )
        }
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入您的密码' }]
        })(
          <Input
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }}/>}
            type='password'
            placeholder='密码'
          />
        )}
      </Form.Item>
      <Form.Item>
        {
          getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>七天内自动登录</Checkbox>)
        }
        {/* fixme: forget password href */}
        <Link className='login-form-forgot' to='/forget'>
          {/* todo: 忘记密码的处理 */}
          忘记密码
        </Link>
        <Button type='primary' onClick={handleSubmit} htmlType='submit' style={{ width: '100%' }}>
          登录
        </Button>
        <Link to='/register'>注册</Link>
      </Form.Item>
    </Form>
  )
}

export const WrappedLoginBoard = observer(Form.create({ name: 'normal_login_board' })(withRouter(LoginBoard)))

export default WrappedLoginBoard
