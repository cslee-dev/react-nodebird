import {useCallback} from 'react'
import {Form, Input} from 'antd'
import styled from "styled-components"

const SearchInput = styled(Input.Search)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 10px
`

export default function NicknameEditForm() {
  return (
    <Form>
      <SearchInput
        addonBefore="닉네임"
        enterButton="수정"
      />
    </Form>
  )
}