/**
 * @api {post} /api/v1/client  获取客户端列表
 * @apiVersion 0.3.0
 * @apiName listClient
 * @apiGroup Client
 *
 * @apiDescription 客户端获取在线列表
 *
 * @apiHeader {String} action=ListClient api 名称
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "请求成功",
    "data": [
        {
            "name": "dumpling-1",
            "key": "65b3cf10-5f2f-46f0-8049-22d2a391a140"
        }
    ]
 * }    
 */
function listClient () {}

/**
 * @api {post} /api/v1/datasource 获取数据源
 * @apiVersion 0.3.0
 * @apiName listDataSource
 * @apiGroup DataSource
 *
 * @apiDescription 获取数据库数据源
 *
 * @apiHeader {String} action=ListDataSource api 名称
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "请求成功",
    "data": [
        {
            "name": "tidb-test",
            "id": 1
        }
    ]
 * }    
 */
function listDataSource () {}

/**
 * @api {post} /api/v1/datasource 获取数据库列表
 * @apiVersion 0.3.0
 * @apiName listDataBase
 * @apiGroup DataSource
 *
 * @apiDescription 获取数据库列表
 *
 * @apiHeader {String} action=ListDataBase api 名称
 *
 * @apiParamExample {json} Some json code:
 *   {
 *     "datasourceId": 1
 *   }
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "请求成功",
    "data": [
        {
            "name": "hackathon"
        }
    ]
 * }    
 */
function listDataBase () {}


/**
 * @api {post} /api/v1/datasource 获取表列表
 * @apiVersion 0.3.0
 * @apiName listTables
 * @apiGroup DataSource
 *
 * @apiDescription 获取表列表
 *
 * @apiHeader {String} action=listTables api 名称
 *
 * @apiParamExample {json} Some json code:
 *   {
 *     "datasourceId": 1,
       "database": "hackathon"
 *   }
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "请求成功",
    "data": [
        {
            "name": "middleware_env"
        }
    ]
 * }    
 */
function listTables () {}

/**
 * @api {post} /api/v1/task 获取任务拆分模式
 * @apiVersion 0.3.0
 * @apiName listTaskMode
 * @apiGroup Task
 *
 * @apiDescription 获取表列表
 *
 * @apiHeader {String} action=listTaskMode api 名称
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "请求成功",
    "data": [
        {
            "name": "按表拆分",
            "id":"1"
        }
    ]
 * }    
 */
function listTaskMode () {}

/**
 * @api {post} /api/v1/task 获取导入模式列表
 * @apiVersion 0.3.0
 * @apiName listExportMode
 * @apiGroup Task
 *
 * @apiDescription 获取导入模式列表
 *
 * @apiHeader {String} action=listExportMode api 名称
 *
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "请求成功",
    "data": [
        {
            "name": "Logical Import Mode",
            "id":"1"
        },
        {
            "name": "Physical Import Mode",
            "id":"2"
        }
    ]
 * }    
 */
function listExportMode () {}


/**
 * @api {post} /api/v1/task 创建任务
 * @apiVersion 0.3.0
 * @apiName createTask
 * @apiGroup Task
 *
 * @apiDescription 创建任务
 *
 * @apiHeader {String} action=createTask api 名称
 *
 * @apiParamExample {json} Some json code:
 *   {
 *     "name": "test",
       "source":{
	       "client":"xxxxxx",
	       "datasource":1,
	       "database":"hackathon",
	       "table": ["middleware_env",""],
	       "selectSql":"",
	       "taskSplitMode":1
       },
       "target":{
	       "datasource":"xxxxxx",
	       "datasource":1,
	       "database":"hackathon",
	       "importDataMode":1
       }
       "concurrent": 1 ,//并行度
       "isSyncSchema": true
 *   }
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "创建成功",
    "data": ""
 * }    
 */
function createTask () {}

/**
 * @api {post} /api/v1/task 获取任务列表
 * @apiVersion 0.3.0
 * @apiName listTasks
 * @apiGroup Task
 *
 * @apiDescription 获取任务列表
 *
 * @apiHeader {String} action=listTasks api 名称
 *
 * @apiParamExample {json} Some json code:
 *   {
 *     "pageNumber": 1,
 *     "name":"xxx" #搜索名称
 *   }
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "请求成功",
    "data": {
    "pageNumber":1,
    "total":100,
    "items":
    [
        {
            "name": "test",
            "client": "dumpling-1",#客户端名称
            "status": 1,# 1是运行中，2是待启动，3是已完成，4是运行失败。
            "createTime": "2022-07-01 14:00:00",
            "finishTime": "2022-07-01 15:00:00"
        }
    ]
    }
 * }    
 */
function createTask () {}

/**
 * @api {post} /api/v1/startTask 启动任务
 * @apiVersion 0.3.0
 * @apiName startTask
 * @apiGroup Task
 *
 * @apiDescription 启动任务
 *
 * @apiHeader {String} action=startTask api 名称
 *
 * @apiParamExample {json} Some json code:
 *   {
 *     "taskId": 1
 *   }
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "启动成功",
    "data": {
    }
 * }    
 */
function startTask () {}



/**
 * @api {post} /api/v1/stopTask 停止任务
 * @apiVersion 0.3.0
 * @apiName stopTask
 * @apiGroup Task
 *
 * @apiDescription 停止任务
 *
 * @apiHeader {String} action=stopTask api 名称
 *
 * @apiParamExample {json} Some json code:
 *   {
 *     "taskId": 1
 *   }
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "停止成功",
    "data": {
    }
 * }    
 */
function startTask () {}


/**
 * @api {post} /api/v1/getTaskProgress 查看任务进度
 * @apiVersion 0.3.0
 * @apiName getTaskProgress
 * @apiGroup Task
 *
 * @apiDescription 查看任务进度
 *
 * @apiHeader {String} action=getTaskProgress api 名称
 *
 * @apiParamExample {json} Some json code:
 *   {
 *     "taskId": 1
 *   }
 *
 * @apiSuccessExample {json} 例子:
 * {
    "code": 0,
    "message": "停止成功",
    "data": {
    	"status": 1,# 1是运行中，2是待启动，3是已完成，4是运行失败。
    	"progressList":[ #进度列表
				{
				"table":"xxxx",
				"size":"10bit",
                "progeress":"10%"
				},
				{
				"table":"xxxx",
				"size":"10bit",
                "progeress":"20%"
				}

    	]
    }
 * }    
 */
function getTaskProgress () {}