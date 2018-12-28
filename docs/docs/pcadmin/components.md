## 组件介绍

这儿主要介绍一些关键的组件，如果时间允许的情况下，我们会尽可能的介绍所有细节。

## PageList

该组件组要分为两个部分：

- 实例化后会设置分页、默认分页条数、表单所需要的初始值、跳转后获得数据的方法
- PageList.Search为常用的搜索组件，可以设置默认值及跳转时约束其他参数关联关系，如：

```Jsx
import React, { Component, Fragment } from "react";
import PageHeaderWrapper from "@/components/pageHeaderWrapper";
import { Card, Button, Table, Tag, Divider, Modal } from "antd";
import styles from "./index.css";
import router from "umi/router";
import PageList from "@/components/pageList";
import { connect } from "dva";

// 连接express models(理解为数据池)
@connect(({ express, loading }) => ({
    // 为了不报错，express.list.result，请在express models里定义好list :{ result : list:[],total_number:0} 类似这样的对象结构，以免在引入的时候未定义undefinded
    expressList: express.list.result,
    // express/list model请求完后台的加载状态
    expressListLoading: loading.effects["express/list"]
}))
class ExpressList extends Component {
    static defaultProps = {
        // 定义默认值
        expressListLoading: true,
        // 定义默认值，为了方便阅读，我们在这儿也定义了list初始值
        expressList: {
            list: [],
            total_number: 0
        }
    };
	// 实例化PageList，为了下文方便调用常用搜索方法，我们在这提前定义好
    search = new PageList({
        // 跳转、搜索提交的默认路由地址，记得'/'这个是根目录的意思，如果不加就是相对路径
        router: "/setting/deliver/express",
        // 每次请求的条数
        rows: 10,
        // 搜索框需要的参数及默认值
        param: {
            keywords_type: "company_name",
            keywords: null
        },
        // 搜索参数的依赖关系，为了过滤掉不必要不成立的参数，如下，意思为keywords_type依赖于keywords参数，如果keywords不成立那么keywords_type也不成立
        rule: [{ key: "keywords_type", rule: ["rely", "keywords"] }],
        // 当跳转后刷新的请求方法
        refresh: (e) => {
            this.initList(e);
        }
    });
	// 当组件加载完毕后，我们初始化数据，如果为了美观您也可以定义在refresh方法里，通过this.search.refresh进行调用，能省一个方法定义
    componentDidMount() {
        this.initList();
    }
	// 自定义的初始化列表数据方法
    initList = () => {
        const { dispatch } = this.props;
        dispatch({
            type: "express/list",
            payload: this.search.filter()
        });
    };
	// 默认的react渲染方法，这儿就不介绍了，react文档都有
    render() {
        // this.search里的getParam()方法可以获得所有参数的集合，用于下面给PageList.Search组件附初始值 
        let { keywords_type, keywords } = this.search.getParam();
        // connect方法后会自动把express models里的数据池的数据仍给上面定义的键值里
        const { expressList, expressListLoading } = this.props;
        
        // 表格的栏目定义
        const columns = [
            {
                title: "物流公司名称",
                dataIndex: "company_name",
                // key一定要定义，否则渲染性能很慢
                key: "company_name"
            }, {
                title: "是否为常用",
                dataIndex: "is_commonly_use",
                key: "is_commonly_use",
                render: (value) => value === 1 ? <Tag color="red">常用</Tag> : "否"
            }, {
                title: "操作",
                dataIndex: "operating",
                key: "operating",
                // Fragment这个组件要注意了，react提供的空组件，否则就要用[<a>xx<a>,<a>yyy</a>]这样去解决
                render: (value, record) => <Fragment>
                    {record.is_commonly_use !== 1 ? <Fragment><a
                        onClick={() => {
                            Modal.confirm({
                                title: "确认设为常用？",
                                okText: "确认",
                                okType: "danger",
                                cancelText: "取消",
                                onOk: () => {
                                    this.props.dispatch({
                                        type: "express/setCommonlyUse",
                                        payload: {
                                            id: record.id
                                        },
                                        callback: () => {
                                            this.search.push();
                                        }
                                    });
                                }
                            });
                        }}
                    >设为常用</a><Divider type="vertical" /></Fragment> : null}
                    {!record.is_system ? <Fragment><a
                        onClick={() => {
                            router.push({
                                pathname: `/setting/deliver/express/edit`,
                                search: `?id=${record.id}`
                            });
                        }}
                    >
                        编辑
                    </a><Divider type="vertical" /></Fragment> : null}
                    {!record.is_system ? <a
                        onClick={() => {
                            Modal.confirm({
                                title: "确认删除？",
                                okText: "确认",
                                okType: "danger",
                                cancelText: "取消",
                                onOk: () => {
                                    this.props.dispatch({
                                        type: "express/del",
                                        payload: {
                                            id: record.id
                                        },
                                        callback: () => {
                                            this.search.push();
                                        }
                                    });
                                }
                            });
                        }}
                    >删除</a> : null}
                </Fragment>
            }
        ];
        return (
            <PageHeaderWrapper hiddenBreadcrumb={true}>
                <Card bordered={false}>
                    <PageList.Search
                        loading={expressListLoading}
                        onSubmit={this.search.submit}
                        defaultValue={this.search.defaultParam}
                        onReset={this.search.reset}
                        // 这儿是封装好的常见搜索框元素，只需用这种数据结构去定义
                        items={[
                            {
                                selectInput: [
                                    {
                                        // 参数名字，后端开发者理解为字段
                                        field: "keywords_type",
                                        // 样式
                                        style: { minWidth: 115 },
                                        // 初始值
                                        initialValue: keywords_type,
                                        // select的数据列表，格式请注意，为：[{key:any,value:any}]:array
                                        data: keywords_type_list
                                    },
                                    {
                                        field: "keywords",
                                        placeholder: "请输入关键词",
                                        initialValue: keywords
                                    }
                                ]
                            }
                        ]} />
                    <div className={styles.batchView}>
                        <Button
                            type='primary'
                            onClick={() => {
                                router.push("/setting/deliver/express/add");
                            }}
                        >
                            新增物流公司
                        </Button>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={expressList.list}
                        loading={expressListLoading}
                        rowKey={record => record.id}
                        pagination={{
                            showSizeChanger: false,
                            showQuickJumper: false,
                                // 从search里拿page，方便其他地方的自动维护
                            current: this.search.page,
                                // 从search里拿rows，方便其他地方的自动维护
                            pageSize: this.search.rows,
                            total: expressList.total_number
                        }}
                        onChange={({ current }) => {
                            // 从search的setPage方法去设置page，并且刷新页面，push里主要是实现了refresh和路由跳转
                            this.search.setPage(current).push();
                        }}

                    />
                </Card>
            </PageHeaderWrapper>
        );
    }

}
const keywords_type_list = [
    {
        name: "公司名称",
        value: "company_name"
    }

];
// 注意在这儿导出是新的规范，不这么写，遇到babel7的时候装饰器语法会导致错误
export default ExpressLis
```

## PageList.Search

可使用内组件介绍

### input

| 参数               | 类型     | 是否必填 | 说明                                   |
| ------------------ | -------- | -------- | -------------------------------------- |
| label              | 否       | 否       | 字段描述                               |
| input.field        | string   | 是       | 字段名称                               |
| input.placeholder  | string   | 否       | 占位文字                               |
| input.onChange     | function | 否       | 当input发生改变时触发，闭包参数(value) |
| input.initialValue | any      | 否       | 初始值                                 |

```jsx
const props = {
    label:"名称",
    input:{
        field: null,
        placeholder: null,
        onChange: (value) => {},
        initialValue: null
    }
}
```

select

selectInput

timeRange

treeSelect