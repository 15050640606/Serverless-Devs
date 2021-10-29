# Clean 命令

`clean`命令是清理 Serverless Devs 的缓存相关功能，可以通过该命令清理环境、不用的依赖包以及相关的缓存内容。

- [命令解析](#命令解析)
    - [参数解析](#参数解析)
    - [操作案例](#操作案例)
    
## 命令解析

当我们执行`s clean -h`之后，可以进行相关帮助信息的查看：

```shell script
$ s clean -h
Usage: s cli [options]

Clean up the cache related functions of serverless devs. You can clean up the environment, unused dependent packages and related cache contents through this command.
    Example:
        $ s clean --component fc-api
        $ s clean --all

    Tips:
        Get all installed component: s component

📖 Document: https://github.com/Serverless-Devs/Serverless-Devs/tree/master/docs/zh/command/clean.md

Options:
  --all                         Clean up the environment
  --cache [dirName]             Delete the <dirName> file in the cache
  --component [componentName]   Remove component (like: fc, fc@0.0.1)
  -h, --help                    Display help for command
```

### 参数解析

| 参数全称 | 参数缩写 | 是否必填 | 参数含义 |
|-----|-----|-----|-----|
| all |  | 选填 | 清理环境 |
| cache |  | 选填 | 删除缓存里的的<dirName>文件 |
| component |  | 选填 | 删除指定的组件，可以是组件名，也可以是[组件名@版本号] |

### 操作案例

如果想要清理掉某个组件，可以通过`--component`参数与具体的组件名进行清理，例如：

```shell script
$ s clean --component fc-api
Component [fc-api] has been cleaned up successfully.
```

如果想要清理整体环境，可以直接通过`--all`参数进行，例如：

```shell script
$ s clean --all       
The environment of Serverless Devs has been cleaned up successfully.
```

# todo: 增加与registry的关系