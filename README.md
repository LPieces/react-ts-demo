## 组件划分
 1.App组件
 2. TodoList组件
 3. 子组件
    - Input
    - List
      - index
      - Item

## 基本的TS组件写法格式
import React form 'react'

interface IProps {

}

const Index: React.FC<IProps> = ({

}):React.ReactElement => {
  return (
    <div>
      Index
    </div>
  )
}

exprot default Index