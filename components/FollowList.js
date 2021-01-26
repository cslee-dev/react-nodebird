import {List, Button, Card} from 'antd'
import styled from "styled-components"
import {StopOutlined} from "@ant-design/icons";

const StyleList = styled(List)`
  margin-bottom: 20px
`

const LoadMore = styled.div`
  text-align: center;
  margin: 10px 0;
`
const RenderListItem = styled(List.Item)`
  margin-top: 20px;
`
export default function FollowList({header, data}) {
  return (
    <StyleList
      grid={{gutter: 4, xs: 2, md: 3}}
      size="small"
      header={<div>{header}</div>}
      loadMore={<LoadMore><Button>더 보기</Button></LoadMore>}
      bordered
      dataSource={data}
      renderItem={item => (
        <RenderListItem>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </RenderListItem>
      )}

    >

    </StyleList>
  )

}