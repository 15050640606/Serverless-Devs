# Init 指令帮助文档

- [前言](#前言)
- [指令解析](#指令解析)
    - [参数解析](#参数解析)
    - [初始化项目](#初始化项目)
        - [引导式初始化](#引导式初始化)
        - [直接初始化](#直接初始化)
            - [初始化Registry应用](#初始化Registry应用)
            - [初始化仓库应用](#初始化仓库应用)

## 前言

`init`指令是初始化Serverless项目的脚手架。

## 指令解析

当执行`s init -h`之后，可以进行相关帮助信息的查看：

```shell script
$ s init -h
Usage: s init [options] [name | url]

Initialize a new project based on a template. You can initialize the application that conforms to the serverless devs project specification through GitHub, or you can initialize the application provided by the source by configuring the source.

    Example:
        $ s init
        $ s init project
        $ s init project -d my_dir
        $ s init git@github.com:foo/bar.git
        $ s init https://github.com/foo/bar.git
        
🚀 More Application: https://github.com/Serverless-Devs/package-awesome

Options:
  -d, --dir [dir]       Where to output the initialized app into (default: ./<ProjectName> )
  -r, --registry [url]  Use specify registry
  -h, --help            Display help for command
```

### 参数解析

| 参数全称 | 参数缩写 | 默认取值 | 参数含义 |
|-----|-----|-----|-----|
| dir | d | `./<ProjectName>` | 项目初始化的路径/目录 | 
| registry | -r | http://registry.devsapp.cn/simple | 源配置地址，类似于Python中指定pip源，或者Node.js中指定NPM源 | 

### 初始化项目

#### 引导式初始化

通过`s init`可以直接进入项目初始化的引导模块：

```shell script
$ s init

🚀 Serverless Awesome: https://github.com/Serverless-Devs/package-awesome

? Hello Serverless for Cloud Vendors (Use arrow keys or type to search)
❯ Alibaba Cloud Serverless 
  AWS Cloud Serverless 
  Baidu Cloud Serverless 
  Huawei Cloud Serverless 
  Tencent Cloud Serverless 
  Dev Template for Serverless Devs 
```

此时只需要选择对应的选项，按照引导进行操作，即可。例如选择`Alibaba Cloud Serverless`，就可以看到阿里云Serverless产品下的应用模板分类:

```shell script
? Please select an Serverless-Devs Application (Use arrow keys or type to search)
❯ fc-runtime-starter - 快速部署一个 FC 函数 
  fc-custom-container-stater - 快速部署一个 custom-container 应用 
  web-framework-stater - 快速部署一个 Web 框架 
  static-website-stater - 快速部署一个静态网站 
  serverless-best-practice - 快速体验 Serverless 最佳实践 
```

此时可以继续选择某分类下的具体应用进行初始化，例如选择`fc-runtime-starter`之后，可以看到该分类下的具体模板应用：

```shell script
? Please select an templete (Use arrow keys or type to search)
❯ fc-http-nodejs - 快速部署一个 nodejs12 http函数 
  fc-http-python - 快速部署一个 python3 http函数 
  fc-http-php - 快速部署一个 php http函数 
  fc-http-java - 快速部署一个 java8 http函数 
  fc-event-nodejs - 快速部署一个 nodejs12 event函数 
  fc-event-python - 快速部署一个 python3 event函数 
  fc-event-php - 快速部署一个 php event函数 
```

选择`fc-http-nodejs`即可完成创建：

```shell script
jiangyu@ServerlessSecurity demo % s init                                         

🚀 Serverless Awesome: https://github.com/Serverless-Devs/package-awesome

? Hello Serverless for Cloud Vendors Alibaba Cloud Serverless
? Please select an Serverless-Devs Application fc-runtime-starter - 快速部署一个 FC 函数
? Please select an templete fc-http-nodejs - 快速部署一个 nodejs12 http函数

......

💞 Document ❤ Star：https://github.com/Serverless-Devs/Serverless-Devs
```

更多关于默认源对应的应用信息，可以参考[Package Awesome](https://github.com/Serverless-Devs/package-awesome)

#### 直接初始化

通过`s init [name | url]`，可以从配置的`Registry`或者指定的仓库`Url`获取模板项目。

##### 初始化Registry应用

以默认的`Registry`为例，可以初始化相对应的案例项目：`start-fc-http-nodejs12`，可以通过`s init start-fc-http-nodejs12`命令来进行：

```shell script
$ s init start-fc-http-nodejs12

🚀 Serverless Awesome: https://github.com/Serverless-Devs/package-awesome

? Please input your project name (init dir) start-fc-http-nodejs12
✔ file decompression completed

......

💞 Document ❤ Star：https://github.com/Serverless-Devs/Serverless-Devs
```

##### 初始化仓库应用

以Github仓库 `https://github.com/devsapp/puppeteer-app` 为例，可以通过`s init git@github.com:devsapp/puppeteer-app.git`命令初始化该案例项目：

```shell script
$ s init git@github.com:devsapp/puppeteer-app.git

🚀 Serverless Awesome: https://github.com/Serverless-Devs/package-awesome

Cloning into 'puppeteer-app'...
remote: Enumerating objects: 35, done.
remote: Counting objects: 100% (35/35), done.
remote: Compressing objects: 100% (23/23), done.
remote: Total 35 (delta 10), reused 30 (delta 6), pack-reused 0
Receiving objects: 100% (35/35), 6.59 KiB | 3.30 MiB/s, done.
Resolving deltas: 100% (10/10), done.
```



