# 设计文档模板
- 团队名称：黑马警长
- 作者：
  队长 胡海峰18651643335 
  队员：程威 17521309124
  队员：蔡阳洲 15910816082

项目进展:

- 完成初步的原型图
- 完成初步网络层reader writer原型后端代码


# 项目介绍
自动化的完成业务数据的导出与tidb数据的导入，无需关心空间问题，提升效率。

# 背景&动机

- Dumpling: 用于将Mysql或者TiDB数据全量导出SQL 或 CSV 格式。参考: https://docs.pingcap.com/zh/tidb/dev/dumpling-overview
- Lightning: 用于从静态文件导入 TB 级数据到 TiDB 集群的工具。参考: https://docs.pingcap.com/zh/tidb/dev/tidb-lightning-overview

用户完成一次全量导入,需要两次操作1）从源集群导出文件，2）导入目标集群，本文将针对此场景进行问题分析与优化。

## 问题分析
针对上述场景有两个问题，一个是效率问题，一个空间放大问题。
### 效率问题
我们可以将数据通过本地socket套接字的方式，通过dumpling数据导出后直接传给lighting导入目标集群，可以一倍以上的损耗。
### 空间放大问题
如果利用本地存储做中转，数据量大，存在空间放大的问题。
### 多数据源支持
输入端支持dumpling，未来可能会支持更多的writer。lighting是统一的reader端，在lightning中制定一系列的适配接口，可以完成多数据源的接入。




# 项目设计
## 表级别任务搬运功能
任务数据拆分，需要支持表级别的拆分，如10张表，一张表一个长连接，每个长连接中会完成一张表的数据搬运。表级别的搬运，支持支持行长拆分，默认按千行搬运。


## 搬运数据读写格式功能
半包/粘包问题
据协议头里面的数据长度来决定接受多少数据。

## UI 原型图
![列表页](https://github.com/mikechengwei/Hackathon-2022/blob/main/images/1.png)
![创建业务](https://github.com/mikechengwei/Hackathon-2022/blob/main/images/2.png)
![查看进度](https://github.com/mikechengwei/Hackathon-2022/blob/main/images/3.png)


## 设计文档讲解视频（可选）