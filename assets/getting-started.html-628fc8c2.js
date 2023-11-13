import{_ as a,o as e,c as d,e as r}from"./app-e1a13da4.js";const n={},i=r(`<h1 id="开发者指南" tabindex="-1"><a class="header-anchor" href="#开发者指南" aria-hidden="true">#</a> 开发者指南</h1><h2 id="foxit-pdf-sdk简介" tabindex="-1"><a class="header-anchor" href="#foxit-pdf-sdk简介" aria-hidden="true">#</a> Foxit PDF SDK简介</h2><h3 id="foxit-pdf-sdk" tabindex="-1"><a class="header-anchor" href="#foxit-pdf-sdk" aria-hidden="true">#</a> Foxit PDF SDK</h3><h3 id="foxit-pdf-sdk-for-android" tabindex="-1"><a class="header-anchor" href="#foxit-pdf-sdk-for-android" aria-hidden="true">#</a> Foxit PDF SDK for Android</h3><h4 id="为什么选择foxit-pdf-sdk-for-android" tabindex="-1"><a class="header-anchor" href="#为什么选择foxit-pdf-sdk-for-android" aria-hidden="true">#</a> 为什么选择Foxit PDF SDK for Android</h4><h4 id="foxit-pdf-sdk-for-android的主要框架" tabindex="-1"><a class="header-anchor" href="#foxit-pdf-sdk-for-android的主要框架" aria-hidden="true">#</a> Foxit PDF SDK for Android的主要框架</h4><h4 id="ui-extensions组件概述" tabindex="-1"><a class="header-anchor" href="#ui-extensions组件概述" aria-hidden="true">#</a> UI Extensions组件概述</h4><h4 id="foxit-pdf-sdk-for-android的主要功能" tabindex="-1"><a class="header-anchor" href="#foxit-pdf-sdk-for-android的主要功能" aria-hidden="true">#</a> Foxit PDF SDK for Android的主要功能</h4><h3 id="评估" tabindex="-1"><a class="header-anchor" href="#评估" aria-hidden="true">#</a> 评估</h3><h3 id="授权" tabindex="-1"><a class="header-anchor" href="#授权" aria-hidden="true">#</a> 授权</h3><h3 id="关于此文档" tabindex="-1"><a class="header-anchor" href="#关于此文档" aria-hidden="true">#</a> 关于此文档</h3><h2 id="入门指南" tabindex="-1"><a class="header-anchor" href="#入门指南" aria-hidden="true">#</a> 入门指南</h2><h3 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求" aria-hidden="true">#</a> 系统要求</h3><h3 id="包结构说明" tabindex="-1"><a class="header-anchor" href="#包结构说明" aria-hidden="true">#</a> 包结构说明</h3><h3 id="运行demo" tabindex="-1"><a class="header-anchor" href="#运行demo" aria-hidden="true">#</a> 运行demo</h3><h4 id="function-demo" tabindex="-1"><a class="header-anchor" href="#function-demo" aria-hidden="true">#</a> Function demo</h4><h4 id="viewer-control-demo" tabindex="-1"><a class="header-anchor" href="#viewer-control-demo" aria-hidden="true">#</a> Viewer control demo</h4><h4 id="complete-pdf-viewer-demo" tabindex="-1"><a class="header-anchor" href="#complete-pdf-viewer-demo" aria-hidden="true">#</a> Complete PDF viewer demo</h4><h2 id="快速构建一个功能齐全的pdf阅读器" tabindex="-1"><a class="header-anchor" href="#快速构建一个功能齐全的pdf阅读器" aria-hidden="true">#</a> 快速构建一个功能齐全的PDF阅读器</h2><h3 id="创建一个新的android工程" tabindex="-1"><a class="header-anchor" href="#创建一个新的android工程" aria-hidden="true">#</a> 创建一个新的Android工程</h3><pre><code>- 3.2 集成Foxit PDF SDK for Android到您的应用程序
- 3.3 初始化Foxit PDF SDK for
  Android............................................................................................
- 3.4 使用PDFViewCtrl显示PDF文档
- 3.5 打开一个RMS加密的文档
- 3.6 使用UI Extensions组件构建一个功能齐全的PDF阅读器......................................................
- 3.7 基于功能齐全的PDF阅读器添加扫描功能
- 3.8 分区存储 (Scoped Storage)处理 开发者指南
</code></pre><h2 id="自定义ui" tabindex="-1"><a class="header-anchor" href="#自定义ui" aria-hidden="true">#</a> 自定义UI</h2><pre><code>- 4.1 通过配置文件自定义UI
    - 4.1.1
      JSON文件介绍.....................................................................................................................................
    - 4.1.2 配置项描述
    - 4.1.3 使用配置文件实例化一个UIExtensionsManager对象
    - 4.1.4 通过配置文件自定义UI的示例
- 4.2 通过APIs自定义UI元素
    - 4.2.1 自定义 top/bottom toolbar
    - 4.2.2
      自定义添加/移除一个特定的面板........................................................................................................
    - 4.2.3 自定义隐藏View setting bar上的UI元素
    - 4.2.4 自定义添加/隐藏More Menu菜单上的UI元素
- 4.3 通过源代码自定义UI实现
</code></pre><h2 id="使用sdk-api" tabindex="-1"><a class="header-anchor" href="#使用sdk-api" aria-hidden="true">#</a> 使用SDK API</h2><pre><code>- 5.1 Render
    - 5.1.1 如何将指定的PDF页面渲染到bitmap
- 5.2 Text Page
    - 5.2.1 如何通过选择获取页面上的文本区域
- 5.3 Text Search
    - 5.3.1 如何在PDF文档中搜索指定的文本模型
- 5.4 Bookmark (Outline)
    - 5.4.1 如何使用深度优先顺序遍历PDF文档的bookmarks
- 5.5 Reading Bookmark
    - 5.5.1 如何添加自定义reading bookmark并枚举所有的reading bookmarks
- 5.6 Attachment
    - 5.6.1 如何将指定文件嵌入到PDF文档
    - 5.6.2 如何从PDF文档中导出嵌入的附件文件，并将其另存为单个文件
- 5.7 Annotation 开发者指南
    - 5.7.1 如何向PDF页面中添加注释
    - 5.7.2 如何删除PDF页面中的注释
    - 5.7.3 如何注册监听器获取UIExternsion的annot事件
- 5.8 Form
    - 5.8.1 如何通过XML文件导入表单数据或将表单数据导出到XML文件
- 5.9 Security
    - 5.9.1 如何使用密码加密PDF文件
- 5.10 Signature
    - 5.10.1 如何对PDF文档进行签名，并验证签名
    - 5.10.2 如何为签名设置定制时间格式
</code></pre><h2 id="创建自定义工具" tabindex="-1"><a class="header-anchor" href="#创建自定义工具" aria-hidden="true">#</a> 创建自定义工具</h2><h2 id="使用cordova实现foxit-pdf-sdk-for-android" tabindex="-1"><a class="header-anchor" href="#使用cordova实现foxit-pdf-sdk-for-android" aria-hidden="true">#</a> 使用Cordova实现Foxit PDF SDK for Android..................................................................</h2><h2 id="使用react-native实现foxit-pdf-sdk-for-android" tabindex="-1"><a class="header-anchor" href="#使用react-native实现foxit-pdf-sdk-for-android" aria-hidden="true">#</a> 使用React Native实现Foxit PDF SDK for Android</h2><h2 id="使用xamarin实现foxit-pdf-sdk-for-android" tabindex="-1"><a class="header-anchor" href="#使用xamarin实现foxit-pdf-sdk-for-android" aria-hidden="true">#</a> 使用Xamarin实现Foxit PDF SDK for Android</h2><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><pre><code>- 10.1 从指定的PDF文件路径打开一个PDF文档
- 10.2 打开PDF文档时显示指定的页面
- 10.3 License key和序列号无法正常工作
- 10.4 在PDF文档中添加link注释
- 10.5 向PDF文档中插入图片
- 10.6 SetDocModified API
- 10.7 高亮PDF文档中的links和设置高亮颜色
- 10.8 高亮PDF文档中的表单域和设置高亮颜色
- 10.9 支持全文索引搜索
- 10.10 打印PDF文档 开发者指南
- 10.11 夜间模式颜色设置
- 10.12 输出exception/crash日志信息
- 10.13 减小APK的大小
- 10.14 开启 shrink-code (设置 &quot;minifyEnabled&quot; 为 &quot;true&quot;)
- 10.15 本地化设置
- 10.16
  迁移到AndroidX.......................................................................................................................
- 10.17
  支持Chromebook....................................................................................................................
- 10.19 如何使用 UIExtensions设置只读模式 10.18 在文档权限的基础上自定义Annotations权限 错误! 未定义书签。
- 1 0.20 怎样兼容Android Studio 3.2
</code></pre><h2 id="技术支持" tabindex="-1"><a class="header-anchor" href="#技术支持" aria-hidden="true">#</a> 技术支持</h2>`,32),o=[i];function h(t,s){return e(),d("div",null,o)}const c=a(n,[["render",h],["__file","getting-started.html.vue"]]);export{c as default};
