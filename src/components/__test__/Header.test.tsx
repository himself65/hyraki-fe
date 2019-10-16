import React from 'react'
import { MainHeader } from '../Layout/Header'
import renderer from 'react-test-renderer'

describe('component: MainHeader', () => {
  it.skip('base: should render success', () => {
    // fixme: 无法正常挂载，see: https://github.com/react-component/menu/issues/292
    const component = renderer.create(
      <MainHeader items={[]} />
    )
  })
})
