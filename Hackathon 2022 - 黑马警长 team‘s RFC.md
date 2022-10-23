# 设计文档模板
- 团队名称：黑马警长
- 作者：
  - 队长: 程威 17521309124
  - 队员：胡海峰18651643335 
  - 队员：蔡阳洲 15910816082
  - 队员: 金文涛 1807043179

项目地址: 
后端: https://github.com/mikechengwei/Hack-2022
前端: git@github.com:cyzlucky/tidb-2022-hackathon-web.git


项目进展:

|  时间   | 里程碑  | 状态  |
|  ----  | ----  | ----  |
| 2022-10-03  | 完成初步的UI原型图  | 完成 |
| 2022-10-12  | 完成socket方式 lightning与dumpling的集成 demo| 完成 |
| 2022-10-13  | dumpling源集成，设计后端writer reader并发模型框架 | 进行中 |
|   | oracle源讨论支持 |  |
|   | 前端接口协议沟通 |  |

# 项目介绍
将lightning与dumpling一体化，自动化的编排多表搬运任务，完成db级别数据的导出与tidb数据的导入。除了dumpling的导出，会支持oracle数据源的导出。

# 背景&动机

- Dumpling: 用于将Mysql或者TiDB数据全量导出SQL 或 CSV 格式。参考: https://docs.pingcap.com/zh/tidb/dev/dumpling-overview
- Lightning: 用于从静态文件导入 TB 级数据到 TiDB 集群的工具。参考: https://docs.pingcap.com/zh/tidb/dev/tidb-lightning-overview

用户完成一次全量导入,需要两次操作:

1）从源集群导出文件到本地。

2）lightning解析本地数据导入目标集群。

如果数据量过大，需要按照表粒度依次导入导出，控制本地磁盘的容量，效率低。

## 问题分析
针对上述场景有两个问题，一个是效率问题，一个空间放大问题。
### 效率问题
对于某个表的数据，我们可以将数据通过本地socket套接字的方式，dumpling数据导出后直接传给lighting，导入目标集群，可以节省导出到本地，再通过lighting解析导入的时间。

如果是多张表的数据搬运，需要人工的编排数据的导入和导出，控制磁盘容量。
### 空间放大问题
当前dumpling和lightning需要利用本地存储做中转，存在空间放大的问题。当数据量达到TB级别，本地存储存在瓶颈。通过网络传输的方式，省去本地数据存储的环节。

## 多数据源扩展支持
输入端支持dumpling，制定读写搬运协议，框架上支持多数据源。本次会支持oracle源读取，lightning将数据写入tidb。


# 项目设计
## 后端设计
### 后端原型
基本架构简图:
![基本架构简图](https://github.com/mikechengwei/Hackathon-2022/blob/main/images/4.png)
![UML简图](https://github.com/mikechengwei/Hackathon-2022/blob/main/images/5.png)

通过CS模式将lightning与dumpling/oracle dump 集成一体化，完成自动化数据搬运任务。
### 表级别任务搬运功能
任务数据拆分，需要支持表级别的拆分，如10张表，一张表一个长连接，每个长连接中会完成一张表的数据搬运。


### 搬运数据的传输格式
暂时支持csv格式。


## UI 原型图
![列表页](https://github.com/mikechengwei/Hackathon-2022/blob/main/images/1.jpg)
![创建业务](https://github.com/mikechengwei/Hackathon-2022/blob/main/images/2.png)
![查看进度](https://github.com/mikechengwei/Hackathon-2022/blob/main/images/3.jpg)

## API文档
已完成，参考文档目录中apidoc/apidoc/index.html
![api文档](https://github.com/mikechengwei/Hackathon-2022/blob/main/images/6.png)
## 设计文档讲解视频（可选）