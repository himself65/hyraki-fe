import React, { Fragment } from 'react'
import { Breadcrumb } from 'antd'

export function BreadcrumbFactory (pathname: string) {
  let path = '/'
  return (
    <Fragment>
      <Breadcrumb.Item>
        Home
      </Breadcrumb.Item>
      {
        pathname.split('/')
          .splice(1)
          .map((name, index, array) => {
            const fixedName = name.charAt(0).toUpperCase().concat(name.slice(1))
            path += name
            // tip: 最后一个地址不显示链接
            return array.length === index + 1
              ? (<Breadcrumb.Item>{fixedName}</Breadcrumb.Item>)
              : (<Breadcrumb.Item><a href={path}>{fixedName}</a></Breadcrumb.Item>)
          })
      }
    </Fragment>
  )
}
